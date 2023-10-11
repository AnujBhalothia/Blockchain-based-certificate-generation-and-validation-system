// SPDX-License-Identifier: MIT
pragma solidity 0.8.18;

struct Certificate {
    uint certificateId;
    string firstName;
    string lastName;
    string organization;
    string certifiedFor;
    string dateOfIssue;
    address generatorID;
}

contract CertificatesGenerator {
    // address[] public registeredCertificates;
    uint256 public id_number = 0;
    Certificate[] public registeredCertificates;

    function createCertificate(
        string memory _firstName,
        string memory _lastName,
        string memory _organization,
        string memory _certifiedFor,
        string memory _dateOfIssue
    ) public returns (uint256) {
        //appending it to the registry
        registeredCertificates.push(
            Certificate(
                id_number,
                _firstName,
                _lastName,
                _organization,
                _certifiedFor,
                _dateOfIssue,
                msg.sender
            )
        );
        id_number = id_number + 1;
        return id_number - 1;
    }

    function getId() public view returns (uint256) {
        return id_number - 1;
    }

    string public notpass = "Not Valid!";
    string public pass = "Verified";

    function validateCertificates(
        uint256 query_id
    ) public view returns (string memory) {
        if (query_id < id_number) {
            return pass;
        } else {
            return notpass;
        }
    }

    function downloadCertificate(
        uint256 id
    ) public view returns (Certificate memory) {
        return registeredCertificates[id];
    }
}
