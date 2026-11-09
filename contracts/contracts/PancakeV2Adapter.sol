// SPDX-License-Identifier: MIT
pragma solidity 0.8.24;

import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {IPancakeRouter02, IPancakeFactory, IPancakePair, IWBNB, IGraduationAdapter} from "./interfaces/IPancake.sol";

/// @title PancakeV2Adapter
/// @notice Graduation adapter for PancakeSwap V2. Liquidity is minted straight into the pair (never through the
///         router), so a pair created early or a WBNB donation cannot block graduation: any donation simply becomes
///         extra liquidity. The LP tokens are minted to the burn address.
/// @dev Holds nothing between calls. Anyone may call it, but a caller can only ever add their own tokens and BNB
///      as burned liquidity.
contract PancakeV2Adapter is IGraduationAdapter {
    address public constant DEAD = 0x000000000000000000000000000000000000dEaD;
    address public immutable router;

    error TransferFailed();

    constructor(address router_) {
        router = router_;
    }

    function graduate(address token, uint256 tokenAmount) external payable returns (address pair) {
        IPancakeRouter02 r = IPancakeRouter02(router);
        address wbnb = r.WETH();
        IPancakeFactory f = IPancakeFactory(r.factory());
        pair = f.getPair(token, wbnb);
        if (pair == address(0)) pair = f.createPair(token, wbnb);
        if (!IERC20(token).transfer(pair, tokenAmount)) revert TransferFailed();
        IWBNB(wbnb).deposit{value: msg.value}();
        if (!IWBNB(wbnb).transfer(pair, msg.value)) revert TransferFailed();
        IPancakePair(pair).mint(DEAD);
    }
}
