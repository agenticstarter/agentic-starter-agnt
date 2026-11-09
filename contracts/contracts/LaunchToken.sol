// SPDX-License-Identifier: MIT
pragma solidity 0.8.24;

import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";

/// @title LaunchToken
/// @notice Fixed-supply token created by AgentLaunchpad as an EIP-1167 clone of one audited template (CREATE2, so
///         the platform address suffix still works). No owner, no mint after creation, no tax.
///         Until graduation the token only moves between the launchpad and traders (curve buys and sells), or to
///         the burn address. At graduation transfers unlock forever and the launchpad loses its sell hook.
/// @dev The template locks itself in its constructor; each clone is initialised by the launchpad in the same
///      transaction that deploys it, so nobody can initialise a clone first.
contract LaunchToken is ERC20 {
    error TransfersLocked();
    error OnlyLaunchpad();
    error AlreadyInitialized();
    error Graduated();

    address public constant DEAD = 0x000000000000000000000000000000000000dEaD;
    address public launchpad;
    bool public graduated;
    string public metaURI;
    string private _tokenName;
    string private _tokenSymbol;

    event MetaURIUpdated(string metaURI);

    constructor() ERC20("", "") {
        launchpad = DEAD; // the template itself can never be initialised
    }

    modifier onlyLaunchpad() {
        if (msg.sender != launchpad) revert OnlyLaunchpad();
        _;
    }

    /// @notice Called once by the launchpad right after the clone is deployed: sets name, symbol and metadata and
    ///         mints the whole supply to the launchpad.
    function initialize(string calldata name_, string calldata symbol_, string calldata metaURI_, uint256 supply)
        external
    {
        if (launchpad != address(0)) revert AlreadyInitialized();
        launchpad = msg.sender;
        _tokenName = name_;
        _tokenSymbol = symbol_;
        metaURI = metaURI_;
        _mint(msg.sender, supply);
    }

    function name() public view override returns (string memory) {
        return _tokenName;
    }

    function symbol() public view override returns (string memory) {
        return _tokenSymbol;
    }

    /// @notice Creator-requested metadata update (logo, description, links), relayed by the launchpad.
    function setMetaURI(string calldata metaURI_) external onlyLaunchpad {
        metaURI = metaURI_;
        emit MetaURIUpdated(metaURI_);
    }

    /// @notice Called once by the launchpad when the token graduates. Unlocks transfers forever.
    function markGraduated() external onlyLaunchpad {
        graduated = true;
    }

    /// @notice Lets the launchpad take tokens back on a curve sell without a separate approve. Disabled forever
    ///         once the token graduates, so no contract can move holders' tokens after listing.
    function pullForSell(address from, uint256 amount) external onlyLaunchpad {
        if (graduated) revert Graduated();
        _transfer(from, msg.sender, amount);
    }

    function _update(address from, address to, uint256 value) internal override {
        if (!graduated && from != address(0) && from != launchpad && to != launchpad && to != DEAD) {
            revert TransfersLocked();
        }
        super._update(from, to, value);
    }
}
