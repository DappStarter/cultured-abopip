require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom problem brown turtle chaos rare remain clump hunt local foster gesture'; 
let testAccounts = [
"0x18d62e37b82cadc8927636635a95db5414971416b24eacc008457ed9a1a09aca",
"0x4a84c1267f2edbdacb3cafd9cecf6b9beb49639074022fa95f56844caa0cd264",
"0xae7b7dba10e9d4723d6446255a471c4bf8adfdbc6b94d8d9d1d8dc213deb7f0f",
"0x3e3909a8bc11a2656bc68e1ed5d7e7ff7cca3620b451f1602203e7c7b8131e46",
"0xb47a8d0f99efcad353f06815f31ba4b9dd4e646d725faba1307985de251e5134",
"0xd644a5840e273d5e0b0183c1d6afdc394df19331fe603605b00100f82ac8bc7a",
"0x3cc65b958fca16b253a54254db36713d4d6ac668adc5dbf534f4ad0f98ed134b",
"0xa2a844880f3ff7923b50f1df35032b62eb97326d5cdb5a8123bdae9fa7c54b7e",
"0x50458957843bbe26171b4ea67bd5c2e7160b085bdb6bcbfc27216c73e03eeda4",
"0x97d4667c5b709750d69ca396fee06c58ef0399fca59a7d6299fd00956674705e"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
