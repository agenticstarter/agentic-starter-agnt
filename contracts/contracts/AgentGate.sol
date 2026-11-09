// SPDX-License-Identifier: MIT
pragma solidity 0.8.24;

import {Ownable, Ownable2Step} from "@openzeppelin/contracts/access/Ownable2Step.sol";
import {IAgentGate, IAgentRegistry} from "./interfaces/IPancake.sol";

/// @title AgentGate
/// @notice Answers "is this wallet a verified agent?" for the launchpad. A wallet passes when it holds at least one
///         token of any listed identity registry: the official Agent ID, the ERC-8004 identity registry (ERC-721,
///         so `balanceOf` works as is), or other agent ecosystems on BNB Chain.
///  - Adding a registry waits 48 hours in public (propose, wait, apply).
///  - Removing a registry is instant (owner or guardian), so an abused registry can be cut off at once.
///  - Each registry call has a gas limit and a failing registry is skipped, so one bad registry cannot block trading.
contract AgentGate is IAgentGate, Ownable2Step {
    uint256 public constant TIMELOCK = 48 hours;
    uint256 public constant MAX_REGISTRIES = 10;
    uint256 public constant CALL_GAS = 50_000;

    address[] private _registries;
    address public guardian;
    mapping(address => uint256) public pendingAddAt;

    event RegistryProposed(address indexed registry, uint256 effectiveAt);
    event RegistryAdded(address indexed registry);
    event RegistryRemoved(address indexed registry, address indexed by);
    event ProposalCancelled(address indexed registry);
    event GuardianSet(address indexed guardian);

    error NoRegistries();
    error TooMany();
    error Known();
    error NotPending();
    error TimelockActive();
    error NotAllowed();
    error ZeroAddress();

    constructor(address[] memory registries_, address owner_, address guardian_) Ownable(owner_) {
        if (registries_.length == 0) revert NoRegistries();
        if (registries_.length > MAX_REGISTRIES) revert TooMany();
        for (uint256 i = 0; i < registries_.length; i++) {
            if (registries_[i] == address(0)) revert ZeroAddress();
            if (_indexOf(registries_[i]) != type(uint256).max) revert Known();
            _registries.push(registries_[i]);
            emit RegistryAdded(registries_[i]);
        }
        guardian = guardian_;
    }

    function registries() external view returns (address[] memory) {
        return _registries;
    }

    function isAgent(address account) external view returns (bool) {
        uint256 n = _registries.length;
        for (uint256 i = 0; i < n; i++) {
            (bool ok, bytes memory data) = _registries[i].staticcall{gas: CALL_GAS}(
                abi.encodeWithSelector(IAgentRegistry.balanceOf.selector, account)
            );
            if (ok && data.length >= 32 && abi.decode(data, (uint256)) > 0) return true;
        }
        return false;
    }

    function proposeRegistry(address registry) external onlyOwner {
        if (registry == address(0)) revert ZeroAddress();
        if (_indexOf(registry) != type(uint256).max) revert Known();
        pendingAddAt[registry] = block.timestamp + TIMELOCK;
        emit RegistryProposed(registry, block.timestamp + TIMELOCK);
    }

    function cancelProposal(address registry) external {
        if (msg.sender != owner() && msg.sender != guardian) revert NotAllowed();
        if (pendingAddAt[registry] == 0) revert NotPending();
        delete pendingAddAt[registry];
        emit ProposalCancelled(registry);
    }

    function applyRegistry(address registry) external onlyOwner {
        uint256 at = pendingAddAt[registry];
        if (at == 0) revert NotPending();
        if (block.timestamp < at) revert TimelockActive();
        if (_registries.length >= MAX_REGISTRIES) revert TooMany();
        delete pendingAddAt[registry];
        _registries.push(registry);
        emit RegistryAdded(registry);
    }

    /// @notice Instant removal by the owner or the guardian. The last registry cannot be removed.
    function removeRegistry(address registry) external {
        if (msg.sender != owner() && msg.sender != guardian) revert NotAllowed();
        uint256 i = _indexOf(registry);
        if (i == type(uint256).max) revert NotPending();
        if (_registries.length == 1) revert NoRegistries();
        _registries[i] = _registries[_registries.length - 1];
        _registries.pop();
        emit RegistryRemoved(registry, msg.sender);
    }

    function setGuardian(address g) external onlyOwner {
        guardian = g;
        emit GuardianSet(g);
    }

    function _indexOf(address r) internal view returns (uint256) {
        for (uint256 i = 0; i < _registries.length; i++) if (_registries[i] == r) return i;
        return type(uint256).max;
    }
}
