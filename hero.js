var Hero = function(name, health, favouriteFood){
  this.name = name;
  this.health = health;
  this.favouriteFood = favouriteFood;
  this.powers = [];
};

Hero.prototype = {
  speak: function(){
    return "Hello my name is " + this.name;
  },

  eat: function(food) {
    if (food.radioactive) {
      this.losePowers();
    }
    else if (food.poisoned) {
      this.health *= 0.5;
    }
    else if (food.name === this.favouriteFood) {
      this.health += (food.replenishmentValue * 1.5);
    }
    else {
      this.health += food.replenishmentValue;
    }
  },

  addPower: function(power){
    this.powers.push(power);
  },

  losePowers: function(){
    for (power of this.powers) {
      if(power.radioSensitivity){
        this.powers.pop(power);
      }
    }
  }
};

module.exports = Hero;

