// SPDX-License-Identifier: MIT
pragma solidity 0.8.24;

/// @title LaunchRules
/// @notice Name and ticker rules for curve launches, kept in a library to keep the launchpad under the size limit.
library LaunchRules {
    error BadName();

    /// @notice Symbol: 1-12 ASCII letters or digits. Name: 1-32 bytes of printable ASCII, or a name with no ASCII
    ///  letters at all (any other script). Mixing Latin letters with other scripts is refused because that is how
    ///  look-alike names are built. Returns keccak256 of the uppercased symbol for the reserved-ticker check.
    function checkNames(string calldata name, string calldata symbol) external pure returns (bytes32) {
        bytes calldata s = bytes(symbol);
        bytes calldata n = bytes(name);
        if (s.length == 0 || s.length > 12 || n.length == 0 || n.length > 32) revert BadName();
        bytes memory upper = new bytes(s.length);
        for (uint256 i = 0; i < s.length; i++) {
            bytes1 ch = s[i];
            if (ch >= 0x61 && ch <= 0x7a) ch = bytes1(uint8(ch) - 32);
            if (!((ch >= 0x30 && ch <= 0x39) || (ch >= 0x41 && ch <= 0x5a))) revert BadName();
            upper[i] = ch;
        }
        bool latin;
        bool other;
        for (uint256 i = 0; i < n.length; i++) {
            uint8 ch = uint8(n[i]);
            if (ch >= 0x80) other = true;
            else if (ch < 0x20 || ch == 0x7f) revert BadName();
            else if ((ch >= 0x41 && ch <= 0x5a) || (ch >= 0x61 && ch <= 0x7a)) latin = true;
        }
        if (latin && other) revert BadName();
        return keccak256(upper);
    }
}
