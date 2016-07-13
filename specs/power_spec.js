var Hero = require('../hero');
var Power = require('../power');
var assert = require('chai').assert;

describe('Power', function(){

  beforeEach(function(){
    hero1 = new Hero("Superman", 100, "Herbalife");
    power1 = new Power("Flying", true);
  })

  it('should have a name', function(){
    assert.equal("Flying", power1.name);
  })

})