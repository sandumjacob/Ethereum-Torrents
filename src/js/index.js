window.addEventListener('load', function() {

    let web3js;
    if (typeof window.web3 !== "undefined" && typeof window.web3.currentProvider !== "undefined") {
        web3js = new Web3(window.web3.currentProvider);
        console.log("Web3 Worked");
    } else {
        //Metamask not foun`d
    }
    //var abi = [ { "constant": true, "inputcs": [ { "name": "", "type": "uint256" } ], "name": "torrents", "outputs": [ { "name": "magnetLink", "type": "string" }, { "name": "name", "type": "string" } ], "payable": false, "stateMutability": "view", "type": "function", "signature": "0x29cd9ee0" }, { "constant": false, "inputs": [ { "name": "name", "type": "string" }, { "name": "magnetLink", "type": "string" } ], "name": "addTorrent", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function", "signature": "0x6483768c" } ]
    //var contractAddress = "";
    //var TorrentsContract = web3js.eth.contract(abi, contractAddress);
    //var TorrentsContractInstance = TorrentsContract.at('0xfC293d5e9cDCDe35343bA5eE3c8194Ec80C4AF45');
    //TorrentsContractInstance.torrents();
})