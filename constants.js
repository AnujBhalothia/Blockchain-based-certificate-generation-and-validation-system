export const contractAddress = "0x93Ce80293DA3C2565371D943B6fA5Ac3cDd7684f";

export const abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_firstName",
        type: "string",
      },
      {
        internalType: "string",
        name: "_lastName",
        type: "string",
      },
      {
        internalType: "string",
        name: "_organization",
        type: "string",
      },
      {
        internalType: "string",
        name: "_certifiedFor",
        type: "string",
      },
      {
        internalType: "string",
        name: "_dateOfIssue",
        type: "string",
      },
    ],
    name: "createCertificate",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "downloadCertificate",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "certificateId",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "firstName",
            type: "string",
          },
          {
            internalType: "string",
            name: "lastName",
            type: "string",
          },
          {
            internalType: "string",
            name: "organization",
            type: "string",
          },
          {
            internalType: "string",
            name: "certifiedFor",
            type: "string",
          },
          {
            internalType: "string",
            name: "dateOfIssue",
            type: "string",
          },
          {
            internalType: "address",
            name: "generatorID",
            type: "address",
          },
        ],
        internalType: "struct Certificate",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getId",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "id_number",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "notpass",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pass",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "registeredCertificates",
    outputs: [
      {
        internalType: "uint256",
        name: "certificateId",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "firstName",
        type: "string",
      },
      {
        internalType: "string",
        name: "lastName",
        type: "string",
      },
      {
        internalType: "string",
        name: "organization",
        type: "string",
      },
      {
        internalType: "string",
        name: "certifiedFor",
        type: "string",
      },
      {
        internalType: "string",
        name: "dateOfIssue",
        type: "string",
      },
      {
        internalType: "address",
        name: "generatorID",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "query_id",
        type: "uint256",
      },
    ],
    name: "validateCertificates",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export const contractAddress_UA = "0x69E3B667BC099946d4779AD42C39f7998CB7b0eF";

export const abi_UA = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "checkAccess",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "c",
        type: "uint8",
      },
    ],
    name: "fromHexChar",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_aadhar",
        type: "string",
      },
      {
        internalType: "string",
        name: "accountAddress",
        type: "string",
      },
    ],
    name: "grantAccess",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "s",
        type: "string",
      },
    ],
    name: "hexStringToAddress",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "registeredUser",
    outputs: [
      {
        internalType: "string",
        name: "aadhar",
        type: "string",
      },
      {
        internalType: "address",
        name: "account_ID",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "s",
        type: "string",
      },
    ],
    name: "toAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];
