require ("@nomiclabs/hardhat-waffle");

module.exports =  {
  solidity:'0.8.0',
  networks:{
  sepolia: {
    url: 'https://eth-sepolia.g.alchemy.com/v2/0pq3KOcLuLWdVeqMgNJhDCvoaOMxFW5z',
    accounts: ['83c6355364af3a93f69b1d0d65aa2bcff2e185a3a4cfb1975255f6e4b8f199b7']
  }
}
};