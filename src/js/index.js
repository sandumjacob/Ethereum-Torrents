let web3js;
if (typeof window.web3 !== "undefined") {
    console.log("Web3 injected");
    web3js = new Web3(window.web3.currentProvider);
    console.log("Web3 Hooked");
    console.log(web3js.version);
} else {
    console.log("No web3 injected");
}
//Contract ABI
var abi = [
    {
        "constant": true,
        "inputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "torrents",
        "outputs": [
            {
                "name": "magnetLink",
                "type": "string"
            },
            {
                "name": "name",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "name",
                "type": "string"
            },
            {
                "name": "magnetLink",
                "type": "string"
            }
        ],
        "name": "addTorrent",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    }
];
//Contract Address (Ropsten right now)
var contractAddress = "0xfC293d5e9cDCDe35343bA5eE3c8194Ec80C4AF45";
//Contract
var TorrentsContract = web3js.eth.contract(abi);
//Instance of contract in blockchain
var TorrentsInstance = TorrentsContract.at(contractAddress);
//Call getter method of the torrents variable to get the torrent at index 0
for (var index = 0; index < 9; index++) {
    TorrentsInstance.torrents(index, function (error, result) {
        if (!error) {
            console.log("index = " + index);
            document.getElementById("TorrentMagnetLink" + index).innerHTML = result[1];
            document.getElementById("TorrentNameHeader" + index).innerHTML = result[0];
        }
        else
            console.error(error);
            index--;
    });
}
const generatePromiseArray = function(num) {

}