var KmToken = artifacts.require("./KmToken.sol");
var KmTokenSale = artifacts.require("./KmTokenSale.sol");

module.exports = function(deployer) {
  deployer.deploy(KmToken, 1000000).then(function() {
    // Token price is 0.001 Ether
    var tokenPrice = 1000000000000000;
    return deployer.deploy(KmTokenSale, KmToken.address, tokenPrice);
  });
};
