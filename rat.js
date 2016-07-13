var Rat = function(name){
  this.name = name;
  this.radioactive = false;
}

Rat.prototype = {
  touch: function(food){
    if (this.radioactive){
      food.radioactive = true;
    }
    else {
      food.poisoned = true;
    }
  },

  bite: function(hero){
    if(this.radioactive){
      hero.powers.splice(0, hero.powers.length);
      hero.health = 0;
    } else {
      hero.health = 0;
    }
  }

}

module.exports = Rat;