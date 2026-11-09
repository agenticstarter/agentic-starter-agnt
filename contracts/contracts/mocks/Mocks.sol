// SPDX-License-Identifier: MIT
pragma solidity 0.8.24;

import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {Math} from "@openzeppelin/contracts/utils/math/Math.sol";

/// @notice Test / local-chain stand-ins. Never deploy these to mainnet.

/// @dev Soulbound "Agent ID": balanceOf > 0 marks an agent wallet.
contract MockAgentID {
    mapping(address => uint256) public balanceOf;
    address public owner = msg.sender;

    function grant(address who) external {
        require(msg.sender == owner, "owner");
        balanceOf[who] = 1;
    }

    function revoke(address who) external {
        require(msg.sender == owner, "owner");
        balanceOf[who] = 0;
    }
}

contract MockWBNB is ERC20 {
    constructor() ERC20("Wrapped BNB", "WBNB") {}

    function deposit() external payable {
        _mint(msg.sender, msg.value);
    }

    function withdraw(uint256 amt) external {
        _burn(msg.sender, amt);
        payable(msg.sender).transfer(amt);
    }
}

contract MockPair is ERC20 {
    address public token0;
    address public token1;
    uint112 private reserve0;
    uint112 private reserve1;

    constructor(address a, address b) ERC20("Pancake LPs", "Cake-LP") {
        (token0, token1) = a < b ? (a, b) : (b, a);
    }

    function getReserves() external view returns (uint112, uint112, uint32) {
        return (reserve0, reserve1, uint32(block.timestamp));
    }

    function mint(address to) external returns (uint256 liq) {
        uint256 b0 = IERC20(token0).balanceOf(address(this));
        uint256 b1 = IERC20(token1).balanceOf(address(this));
        uint256 a0 = b0 - reserve0;
        uint256 a1 = b1 - reserve1;
        if (totalSupply() == 0) liq = Math.sqrt(a0 * a1);
        else liq = Math.min(a0 * totalSupply() / reserve0, a1 * totalSupply() / reserve1);
        _mint(to, liq);
        reserve0 = uint112(b0);
        reserve1 = uint112(b1);
    }

    function swap(uint256 out0, uint256 out1, address to) external {
        if (out0 > 0) IERC20(token0).transfer(to, out0);
        if (out1 > 0) IERC20(token1).transfer(to, out1);
        reserve0 = uint112(IERC20(token0).balanceOf(address(this)));
        reserve1 = uint112(IERC20(token1).balanceOf(address(this)));
    }

    function sync() external {
        reserve0 = uint112(IERC20(token0).balanceOf(address(this)));
        reserve1 = uint112(IERC20(token1).balanceOf(address(this)));
    }
}

contract MockFactory {
    mapping(address => mapping(address => address)) public getPair;
    address[] public allPairs;

    function createPair(address a, address b) public returns (address pair) {
        pair = address(new MockPair(a, b));
        getPair[a][b] = pair;
        getPair[b][a] = pair;
        allPairs.push(pair);
    }
}

contract MockRouter {
    address public immutable factory;
    address public immutable WETH;

    constructor(address factory_, address weth_) {
        factory = factory_;
        WETH = weth_;
    }

    receive() external payable {}

    function addLiquidityETH(address token, uint256 amountTokenDesired, uint256, uint256, address to, uint256)
        external
        payable
        returns (uint256, uint256, uint256 liquidity)
    {
        address pair = MockFactory(factory).getPair(token, WETH);
        if (pair == address(0)) pair = MockFactory(factory).createPair(token, WETH);
        IERC20(token).transferFrom(msg.sender, pair, amountTokenDesired);
        MockWBNB(WETH).deposit{value: msg.value}();
        IERC20(WETH).transfer(pair, msg.value);
        liquidity = MockPair(pair).mint(to);
        return (amountTokenDesired, msg.value, liquidity);
    }

    function getAmountsOut(uint256 amountIn, address[] calldata path) external view returns (uint256[] memory amounts) {
        address pair = MockFactory(factory).getPair(path[0], path[1]);
        (uint112 r0, uint112 r1,) = MockPair(pair).getReserves();
        bool inIs0 = MockPair(pair).token0() == path[0];
        (uint256 rIn, uint256 rOut) = inIs0 ? (uint256(r0), uint256(r1)) : (uint256(r1), uint256(r0));
        uint256 inFee = amountIn * 9975;
        amounts = new uint256[](2);
        amounts[0] = amountIn;
        amounts[1] = inFee * rOut / (rIn * 10000 + inFee);
    }

    function swapExactTokensForETHSupportingFeeOnTransferTokens(
        uint256 amountIn,
        uint256 amountOutMin,
        address[] calldata path,
        address to,
        uint256
    ) external {
        address pair = MockFactory(factory).getPair(path[0], path[1]);
        IERC20(path[0]).transferFrom(msg.sender, pair, amountIn);
        (uint112 r0, uint112 r1,) = MockPair(pair).getReserves();
        bool inIs0 = MockPair(pair).token0() == path[0];
        (uint256 rIn, uint256 rOut) = inIs0 ? (uint256(r0), uint256(r1)) : (uint256(r1), uint256(r0));
        uint256 inFee = amountIn * 9975;
        uint256 out = inFee * rOut / (rIn * 10000 + inFee);
        require(out >= amountOutMin, "slippage");
        if (inIs0) MockPair(pair).swap(0, out, address(this));
        else MockPair(pair).swap(out, 0, address(this));
        MockWBNB(WETH).withdraw(out);
        payable(to).transfer(out);
    }

    function swapExactETHForTokensSupportingFeeOnTransferTokens(
        uint256 amountOutMin,
        address[] calldata path,
        address to,
        uint256
    ) external payable {
        address pair = MockFactory(factory).getPair(path[0], path[1]);
        MockWBNB(WETH).deposit{value: msg.value}();
        (uint112 r0, uint112 r1,) = MockPair(pair).getReserves();
        bool wethIs0 = MockPair(pair).token0() == WETH;
        (uint256 rIn, uint256 rOut) = wethIs0 ? (uint256(r0), uint256(r1)) : (uint256(r1), uint256(r0));
        uint256 inFee = msg.value * 9975;
        uint256 out = inFee * rOut / (rIn * 10000 + inFee);
        require(out >= amountOutMin, "slippage");
        IERC20(WETH).transfer(pair, msg.value);
        if (wethIs0) MockPair(pair).swap(0, out, to);
        else MockPair(pair).swap(out, 0, to);
    }
}

/// @dev Registry that burns all gas in balanceOf (tests the gate's per-registry gas limit).
contract GasBombRegistry {
    uint256[] private _sink;

    function balanceOf(address) external view returns (uint256 x) {
        while (true) x += _sink.length + 1; // never returns: runs out of the gas it was given
    }
}

/// @dev Registry that always reverts.
contract RevertingRegistry {
    function balanceOf(address) external pure returns (uint256) {
        revert("nope");
    }
}

/// @dev Perks stand-in: everyone listed has perks.
contract MockPerks {
    mapping(address => bool) public hasPerks;

    function set(address who, bool v) external {
        hasPerks[who] = v;
    }
}

interface IPresaleLike {
    function contribute() external payable;
    function refund() external;
}

interface ILaunchpadLike {
    function buy(address token, uint256 minOut) external payable returns (uint256);
    function withdraw() external;
}

/// @dev Tries to re-enter refund() from its receive hook.
contract ReentrantRefunder {
    IPresaleLike public immutable presale;
    uint256 public reentered;

    constructor(address p) {
        presale = IPresaleLike(p);
    }

    function buy() external payable {
        presale.contribute{value: msg.value}();
    }

    function doRefund() external {
        presale.refund();
    }

    receive() external payable {
        try presale.refund() {
            reentered++;
        } catch {}
    }
}

/// @dev An agent wallet that rejects BNB until told otherwise.
contract RejectingWallet {
    bool public accept;

    function setAccept(bool v) external {
        accept = v;
    }

    function buy(address lp, address token) external payable {
        ILaunchpadLike(lp).buy{value: msg.value}(token, 0);
    }

    function withdrawFrom(address lp) external {
        ILaunchpadLike(lp).withdraw();
    }

    receive() external payable {
        require(accept, "no BNB");
    }
}
