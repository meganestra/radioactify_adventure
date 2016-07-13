var Baddy = require('../baddy');
var Rat = require('../rat');
var assert = require('chai').assert;

describe('Baddy', function(){

  beforeEach(function(){
    baddy1 = new Baddy("Lex Luther");
    rat1 = new Rat("ratty");
  })

  it('should have name', function(){
    assert.equal("Lex Luther", baddy1.name)
  })

  it('should make a rat radioactive', function(){
    baddy1.radioactivefy(rat1);
    assert.equal(true, rat1.radioactive)
  })


})