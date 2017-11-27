var ForagerBee = function() {
  this.age = 10;
  this.job = "find pollen";
  this.honeyPot = 0;
  this.canFly = true;
};

ForagerBee.prototype = Object.create(Bee.prototype);

ForagerBee.prototype.forage = function(treasure) {
  this.treasureChest.push(treasure);
}

ForagerBee.prototype.treasureChest = [];
// HoneyMakerBee.prototype.giveHoney = function() {
//   this.honeyPot--; 
// }

ForagerBee.prototype.constructor = ForagerBee;
