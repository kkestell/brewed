var BREWED = (function(module) {

  module.util = {};

  module.util.calcAbv = function(og, fg) {
    return (og - fg) * 131;
  }

  module.util.calcBalance = function(og, ibu) {
    var balance = ibu / ((og - 1.0) * 1000.0);
    if(balance === Infinity) {
      return 1.0;
    }
    return balance;
  }

  module.util.calcYeastCellsNeeded = function(yeastType, volume, gravity) {
    if(yeastType === BREWED.yeastType.ale) {
      var rate = 0.75;
    } else {
      var rate = 1.5;
    }
    var plato = module.util.specificGravityToDegreesPlato(gravity);
    var milliliters = module.util.gallonsToMilliliters(volume);
    return (rate * 1000000) * milliliters * plato;
  }

  module.util.specificGravityToDegreesPlato = function(specificGravity) {
    return 259 - (259 / specificGravity);
  }

  module.util.degreesPlatoToSpecificGravity = function(degreesPlato) {
    return 259 / (259 - degreesPlato);
  }

  module.util.gallonsToMilliliters = function(gallons) {
    return gallons * 3785.41;
  }

  return module;

}(BREWED || {}));
