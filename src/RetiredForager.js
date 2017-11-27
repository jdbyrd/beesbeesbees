var RetiredForagerBee = function() {
  this.age = 40;
  this.job = "gamble";
  this.color = "grey";
  this.honeyPot = 0;
  this.canFly = false;
  this.treasureChest = [];
};

RetiredForagerBee.prototype = Object.create(ForagerBee.prototype);

RetiredForagerBee.prototype.forage = function() {
  return "I am too old, let me play cards instead";
}

RetiredForagerBee.prototype.giveHoney = function() {
  this.honeyPot--; 
}

RetiredForagerBee.prototype.gamble = function() {
  this.treasureChest.push("")
}

RetiredForagerBee.prototype.constructor = RetiredForagerBee;