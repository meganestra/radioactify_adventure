var Hero = require('../hero');
var Food = require('../food');
var Rat = require('../rat');
var Baddy = require('../baddy');
var assert = require('chai').assert;

describe('Rat', function(){

  beforeEach(function(){
    hero1 = new Hero("Superman", 100, "Herbalife");
    food1 = new Food("Hamburger", 50);
    rat1 = new Rat("Ratty");
    baddy1 = new Baddy("Lex Luther");
  })

  it('should poison food by touching it', function(){
    rat1.touch(food1);
    assert.equal(true, food1.poisoned);
  })

  it('if rat is radioactive and touches food, the food should also become radioactive', function(){
    baddy1.radioactivefy(rat1);
    rat1.touch(food1);
    assert.equal(true, food1.radioactive);
  })

  it('should remove all powers and health from hero if rat is radioactive', function(){
    baddy1.radioactivefy(rat1);
    rat1.bite(hero1);
    assert.equal(0, hero1.powers.length);
    assert.equal(0, hero1.health);
  })


})