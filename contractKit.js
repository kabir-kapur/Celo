// require { newKit } from '@celo/contractkit'
var contractkit = require('@celo/contractkit');

async function printBalance(){
    let myAddress = 'https://alfajores-forno.celo-testnet.org';
    const kit = contractkit.newKit(myAddress);
    let totalBalance = await kit.getTotalBalance(myAddress);
    console.log(totalBalance);
}

printBalance();