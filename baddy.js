var Baddy = function(name){
  this.name = name;
}

Baddy.prototype = {
  radioactivefy: function(rat){
    rat.radioactive = true;
  }
}

module.exports = Baddy;