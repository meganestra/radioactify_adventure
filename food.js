var Food = function(name, replenishmentValue){
  this.name = name;
  this.replenishmentValue = replenishmentValue;
  this.poisoned = false;
  this.radioactive = false;
}

module.exports = Food;