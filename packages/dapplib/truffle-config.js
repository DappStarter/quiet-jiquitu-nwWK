require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'imitate prize flock tribe stove cruise shift pudding inner praise army gather'; 
let testAccounts = [
"0xc3df777b9bf91d84d643233a213e1b024cca52dcc643431136b286773f8ffa5a",
"0x9905ce0581ce7c5f9137d993581310ea3c6b3b4b77f6b19e4d6b50f933fc6677",
"0xdb9e5d3665c3df0e8bc6e44787bd92ea7138b74af5085104fe72d4a001b53fd9",
"0xb6a673fce4f2abfc0e56bcf4732108e195d632ae49e71da915998d1c7c6fa296",
"0x2be34df453f3c917fc4f8cd7417b5aa047b34258c3403c8ecd6f8c1354247419",
"0xc564b75b94cc9d345df65ff70fe2fc7b785e865229018e648f715b3511fc863d",
"0x6276987a8c8c2d36382fc7940e0223f5069d6fd1b4e5e71806d46de5858cd2d4",
"0x43aa3e81e59fb1e081289a11ec8211355c5ab0332b6b287651d3f70c6897ebc7",
"0x0d6fcf6ff02f80044e8fce65b4800f28a9fddf594ba9769efba9fd2a4bba1ed9",
"0xbc1cb70bacab1dec4f287f9f4cf7f1c63087af3cc6ba6c51c903b25ec7dbdaef"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

