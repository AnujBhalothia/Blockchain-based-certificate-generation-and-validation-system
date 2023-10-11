// SPDX-License-Identifier: MIT
pragma solidity 0.8.18;

struct User {
    string aadhar;
    address account_ID;
}

contract UserAccess {
    User[] public registeredUser;
    address owner;

    constructor() {
        owner = msg.sender;
    }

    function grantAccess(
        string memory _aadhar,
        string memory accountAddress
    ) public onlyOwner {
        registeredUser.push(User(_aadhar, toAddress(accountAddress)));
    }

    function checkAccess() public view returns (bool) {
        //checks if the user exists
        if (msg.sender == owner) return true;
        for (uint256 i = 0; i < registeredUser.length; i++) {
            if (registeredUser[i].account_ID == msg.sender) {
                return true;
            }
        }
        return false;
    }

    modifier onlyOwner() //extend any function to this to ensure the task is only performed by the owner
    {
        require(msg.sender == owner);
        _;
    }

    function fromHexChar(uint8 c) public pure returns (uint8) {
        if (bytes1(c) >= bytes1("0") && bytes1(c) <= bytes1("9")) {
            return c - uint8(bytes1("0"));
        }
        if (bytes1(c) >= bytes1("a") && bytes1(c) <= bytes1("f")) {
            return 10 + c - uint8(bytes1("a"));
        }
        if (bytes1(c) >= bytes1("A") && bytes1(c) <= bytes1("F")) {
            return 10 + c - uint8(bytes1("A"));
        }
        return 0;
    }

    function hexStringToAddress(
        string memory s
    ) public pure returns (bytes memory) {
        bytes memory ss = bytes(s);
        require(ss.length % 2 == 0); // length must be even
        bytes memory r = new bytes(ss.length / 2);
        for (uint i = 0; i < ss.length / 2; ++i) {
            r[i] = bytes1(
                fromHexChar(uint8(ss[2 * i])) *
                    16 +
                    fromHexChar(uint8(ss[2 * i + 1]))
            );
        }

        return r;
    }

    function toAddress(string memory s) public pure returns (address) {
        bytes memory _bytes = hexStringToAddress(s);
        require(_bytes.length >= 1 + 20, "toAddress_outOfBounds");
        address tempAddress;

        assembly {
            tempAddress := div(
                mload(add(add(_bytes, 0x20), 1)),
                0x1000000000000000000000000
            )
        }

        return tempAddress;
    }
}
