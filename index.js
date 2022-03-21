const fs = require("fs");
var cors = require("cors");
var csv = require("jquery-csv");
var $ = require("jquery");
var sample = "./benchmark.csv";
var Web3 = require("web3");
const EthereumTx = require("ethereumjs-tx").Transaction;
var express = require("express"),
  app = express(),
  port = process.env.PORT || 3000;

app.use(cors());
app.listen(port);
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/benchmark/:time", (req, res) => {
  console.log("inside time here");
  fs.appendFileSync("./benchmark.csv", req.params.time + ",");
  res.send("appended!");
});

app.get("/Benchmark", (req, res) => {
  const infura = `https://rinkeby.infura.io/v3/19d51e5e9b1f41cb910fd7239c2edc65`;
  const web3 = new Web3(new Web3.providers.HttpProvider(infura));
  web3.eth.defaultAccount = "0x2986c1699AF0639a980e5eDD7EC5DedFeFCc89A1";
  let abi = [
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "uint256",
          name: "_id4",
          type: "uint256",
        },
      ],
      name: "authoritySignedUp",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "uint256",
          name: "_id2",
          type: "uint256",
        },
      ],
      name: "holderSignedUp",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "uint256",
          name: "_id1",
          type: "uint256",
        },
      ],
      name: "issuerSignedUp",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "uint256",
          name: "_id3",
          type: "uint256",
        },
      ],
      name: "providerSignedUp",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "uint256",
          name: "_id5",
          type: "uint256",
        },
      ],
      name: "vaccineStored",
      type: "event",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_ID",
          type: "uint256",
        },
        {
          internalType: "string",
          name: "_password",
          type: "string",
        },
        {
          internalType: "address",
          name: "addr",
          type: "address",
        },
      ],
      name: "SignIn",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "addr",
          type: "address",
        },
      ],
      name: "aChecker",
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
      inputs: [
        {
          internalType: "uint256",
          name: "_age",
          type: "uint256",
        },
      ],
      name: "convertBytes",
      outputs: [
        {
          internalType: "bytes32",
          name: "",
          type: "bytes32",
        },
      ],
      stateMutability: "pure",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "_age",
          type: "bytes32",
        },
      ],
      name: "convertUint",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "pure",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_id2",
          type: "uint256",
        },
      ],
      name: "getAgePermission",
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
      inputs: [
        {
          internalType: "uint256",
          name: "_id2",
          type: "uint256",
        },
      ],
      name: "getDoseNo",
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
      inputs: [
        {
          internalType: "uint256",
          name: "_id2",
          type: "uint256",
        },
      ],
      name: "getHLocation",
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
          name: "_id2",
          type: "uint256",
        },
      ],
      name: "getHname",
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
          internalType: "address",
          name: "addr",
          type: "address",
        },
      ],
      name: "getHolder",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
        {
          internalType: "string",
          name: "",
          type: "string",
        },
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
        {
          internalType: "string",
          name: "",
          type: "string",
        },
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
      name: "getHolderLen",
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
      inputs: [
        {
          internalType: "uint256",
          name: "_id2",
          type: "uint256",
        },
      ],
      name: "getHolderPriority",
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
      inputs: [
        {
          internalType: "uint256",
          name: "_id2",
          type: "uint256",
        },
        {
          internalType: "address",
          name: "_add",
          type: "address",
        },
      ],
      name: "getHsignUp",
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
          internalType: "uint256",
          name: "_hid",
          type: "uint256",
        },
      ],
      name: "getHvaccineTaken",
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
          internalType: "uint256",
          name: "_id2",
          type: "uint256",
        },
        {
          internalType: "address",
          name: "_add",
          type: "address",
        },
      ],
      name: "getIsignUp",
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
          internalType: "address",
          name: "addr",
          type: "address",
        },
      ],
      name: "getIssuer",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
        {
          internalType: "string",
          name: "",
          type: "string",
        },
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
        {
          internalType: "string",
          name: "",
          type: "string",
        },
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
          name: "_id2",
          type: "uint256",
        },
      ],
      name: "getLocationPermission",
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
      inputs: [
        {
          internalType: "address",
          name: "addr",
          type: "address",
        },
      ],
      name: "getMyResult",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
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
          name: "_id2",
          type: "uint256",
        },
      ],
      name: "getResult",
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
      inputs: [
        {
          internalType: "uint256",
          name: "_id2",
          type: "uint256",
        },
      ],
      name: "getResultedMap",
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
      inputs: [],
      name: "getTotalHolder",
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
      inputs: [
        {
          internalType: "address",
          name: "addr",
          type: "address",
        },
      ],
      name: "getVaccinationInfo",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
        {
          internalType: "string",
          name: "",
          type: "string",
        },
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
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
      inputs: [
        {
          internalType: "uint256",
          name: "_id2",
          type: "uint256",
        },
      ],
      name: "getVname",
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
          internalType: "address",
          name: "addr",
          type: "address",
        },
      ],
      name: "hChecker",
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
      inputs: [
        {
          internalType: "string",
          name: "_hName",
          type: "string",
        },
        {
          internalType: "uint256",
          name: "_age",
          type: "uint256",
        },
        {
          internalType: "string",
          name: "_photoUrl",
          type: "string",
        },
        {
          internalType: "string",
          name: "_hlocation",
          type: "string",
        },
        {
          internalType: "string",
          name: "_hEmail",
          type: "string",
        },
        {
          internalType: "string",
          name: "_password",
          type: "string",
        },
      ],
      name: "hSignUp",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_pAge",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "_phLocation",
          type: "uint256",
        },
      ],
      name: "holderPermission",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "addr",
          type: "address",
        },
      ],
      name: "iChecker",
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
      inputs: [
        {
          internalType: "string",
          name: "_iName",
          type: "string",
        },
        {
          internalType: "string",
          name: "_qualification",
          type: "string",
        },
        {
          internalType: "string",
          name: "_photoUrl",
          type: "string",
        },
        {
          internalType: "string",
          name: "_ilocation",
          type: "string",
        },
        {
          internalType: "string",
          name: "_iPassword",
          type: "string",
        },
      ],
      name: "iSignUp",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_id2",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "_testResult",
          type: "uint256",
        },
      ],
      name: "issueResult",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "addr",
          type: "address",
        },
      ],
      name: "pChecker",
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
      inputs: [
        {
          internalType: "address",
          name: "_addr",
          type: "address",
        },
      ],
      name: "setContractLocation",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "_addr",
          type: "address",
        },
      ],
      name: "setContractVaccination",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_id2",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "_doseNo",
          type: "uint256",
        },
      ],
      name: "setDoseNo",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_id2",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "_priority",
          type: "uint256",
        },
      ],
      name: "setHolderPriority",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_hID",
          type: "uint256",
        },
      ],
      name: "setPushedVaccine",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_id2",
          type: "uint256",
        },
        {
          internalType: "string",
          name: "_vName",
          type: "string",
        },
      ],
      name: "setVname",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "addr",
          type: "address",
        },
      ],
      name: "verification",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
        {
          internalType: "string",
          name: "",
          type: "string",
        },
        {
          internalType: "string",
          name: "",
          type: "string",
        },
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
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
  var pk = "242eacc326d4b81d880bc05620e83d42a5b3805b5b3b4dffff948209ad5add14"; // private key of your account
  let toadd = "0xbA5718bD18dE1BC6792de0bbe4Ff44ce3966A999";
  let address = "0xbA5718bD18dE1BC6792de0bbe4Ff44ce3966A999"; //Contract Address
  // t1 = performance.now();

  web3.eth.getTransactionCount(web3.eth.defaultAccount, function (err, nonce) {
    console.log("nonce value is", nonce);
    const contract = new web3.eth.Contract(abi, address, {
      from: web3.eth.defaultAccount,
      gas: 3000000,
    });

    const functionAbi = contract.methods
      .hSignUp("Nabil", "23", "myPhoto", "Dhaka", "salekin@gmail.com", "12345")
      .encodeABI();
    let details = {
      nonce: nonce,
      gasPrice: web3.utils.toHex(web3.utils.toWei("72", "gwei")),
      gas: 1000000,
      to: address,
      value: 0,
      data: functionAbi,
    };
    const transaction = new EthereumTx(details, { chain: "rinkeby" });
    transaction.sign(Buffer.from(pk, "hex"));
    let rawData = "0x" + transaction.serialize().toString("hex");
    web3.eth
      .sendSignedTransaction(rawData)
      .on("transactionHash", function (hash) {
        console.log(["transferToStaging Trx Hash:" + hash]);
      })
      .on("receipt", function (receipt) {
        console.log(["transferToStaging Receipt:", receipt]);
        // t2 = performance.now();
        // t3 = t2 - t1;
        // console.log(`this is block validation time ${t3}`);
        res.send(receipt);
      })
      .on("error", console.error)
      .then(function (tx) {
        console.log(tx);
      })
      .catch(function (tx) {
        console.log(tx);
      });
  });
});

app.get("/csv", (req, res) => {
  // reading from csv

  // const sample = "./data/sample.csv";
  fs.readFile(sample, "UTF-8", (err, fileContent) => {
    if (err) {
      console.log(err);
    }
    csv.toArrays(fileContent, {}, (err, data) => {
      if (err) {
        console.log(err);
      }

      for (let i = 0, len = data.length; i < len; i++) {
        console.log(data[i]);
        res.send(data[i]);
      }
    });
  });
});

app.get("/arrays", (req, res) => {
  const data = $.csv.toArrays(sample);
  console.log(data);
});

app.get("/clear", (req, res) => {
  // const empty = "";
  fs.writeFile("./benchmark.csv", "", (err) => {
    if (err) throw err;
    console.log("The file has been saved!");
  });
  res.send("cleared!");
});

console.log("todo list RESTful API server started on: " + port);
