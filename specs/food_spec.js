var Food = require('../food');
var assert = require('chai').assert;

describe('Food', function(){

  beforeEach(function(){
    food1 = new Food("Hamburger", 50);
  })

  it('should have a name and replenishment value', function(){
    assert.equal("Hamburger", food1.name);
    assert.equal(50, food1.replenishmentValue);
  })

});