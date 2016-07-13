var Hero = require('../hero');
var Food = require('../food');
var Rat = require('../rat');
var Power = require('../power');
var Baddy = require('../baddy');
var assert = require('chai').assert;

describe('Hero', function(){

  beforeEach(function(){
    hero1 = new Hero("Superman", 100, "Herbalife");
    food1 = new Food("Hamburger", 50);
    food2 = new Food("Herbalife", 50);
    food3 = new Food("Sushi", 50);
    rat1 = new Rat("ratty");
    power1 = new Power("Flying", true);
    power2 = new Power("Invisibility", false);
    baddy1 = new Baddy("Lex Luther");
  })

  it('should have a name, health and favourite food', function(){
    assert.equal("Superman", hero1.name);
    assert.equal(100, hero1.health);
    assert.equal("Herbalife", hero1.favouriteFood);
  })

  it('should have be able to say its name', function(){
    assert.equal("Hello my name is Superman", hero1.speak());
  })

  it('should be able to eat food and increase health', function(){
    hero1.eat(food1);
    assert.equal(150, hero1.health);
  })

  it('should be able to eat favourite food and increase health', function(){
    hero1.eat(food2);
    assert.equal(175, hero1.health);
  })

  it('should decrease health if eat poisoned food', function(){
    rat1.touch(food3);
    hero1.eat(food3);
    assert.equal(50, hero1.health);
  })

  it('should be able to add power', function(){
    hero1.addPower(power1);
    assert.equal(1, hero1.powers.length);
  })

  it('should lose power if power is radiosensitive', function(){
    hero1.addPower(power1);
    hero1.addPower(power2);
    hero1.losePowers();
    assert.equal(1, hero1.powers.length);
  })

  it('should lose power if food eaten is radioactive', function(){
    hero1.addPower(power1);
    hero1.addPower(power2);
    baddy1.radioactivefy(rat1);
    rat1.touch(food1);
    hero1.eat(food1);
    assert.equal(1, hero1.powers.length);
  })

});











