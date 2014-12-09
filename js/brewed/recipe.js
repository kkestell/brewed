var BREWED = (function(module) {

  module.Recipe = function(recipe) {
    this.recipe = recipe;

    this.boilSpecificGravity = function() {
      return this.recipe.og;
    }

    this.baseMalts = function() {
      var fermentables = [];

      if(this.recipe.abstractIngredients.baseMalts.length === 0 ||
         typeof this.recipe.brewingSystem.batchSize === "undefined" ||
         typeof this.recipe.brewingSystem.mashEfficiency === "undefined") {
        return fermentables;
      }

      // Assuming a base malt weight of 1 lb, calculate the total grist weight
      var gristWeight = 1 / (this.recipe.abstractIngredients.baseMalts[0].percent / 100);

      // Calculate number of points contributed by grains
      var points = 0;
      for(i = 0; i < this.recipe.abstractIngredients.baseMalts.length; i++) {
        var bm = this.recipe.abstractIngredients.baseMalts[i];

        if(typeof bm.fermentable === "undefined" ||
           typeof bm.percent === "undefined") {
          continue;
        }

        points += bm.fermentable.ppg * (gristWeight * (bm.percent / 100)) /
          this.recipe.brewingSystem.batchSize;
      }

      // Calculate scale factor
      var scale = points / ((this.recipe.og - 1.0) *
        1000.0);

      // Calculate grain weights
      for(i = 0; i < this.recipe.abstractIngredients.baseMalts.length; i++) {
        var bm = this.recipe.abstractIngredients.baseMalts[i];

        if(typeof bm.fermentable === "undefined" ||
           typeof bm.percent === "undefined") {
          continue;
        }

        var mashEfficiency = this.recipe.brewingSystem.mashEfficiency;
        if(bm.fermentable.type === 'Extract' || bm.fermentable.type === 'Caramel/Crystal Malt') {
          mashEfficiency = 100;
        }

        var amount = ((gristWeight * (bm.percent / 100)) / scale) / (mashEfficiency / 100);

        fermentables.push({'name': bm.fermentable.name, 'amount': amount});
      }

      return fermentables;
    }

    this.specialtyGrains = function() {
      var fermentables = [];

      if(this.recipe.abstractIngredients.specialtyGrains.length === 0 ||
         typeof this.recipe.brewingSystem.batchSize === "undefined") {
        return fermentables;
      }

      // Calculate grain weights
      for(i = 0; i < this.recipe.abstractIngredients.specialtyGrains.length; i++) {
        var bm = this.recipe.abstractIngredients.specialtyGrains[i];

        if(typeof bm.ozPerGal === "undefined") {
          continue;
        }

        var amount = (bm.ozPerGal * this.recipe.brewingSystem.batchSize) / 16;

        fermentables.push({'name': bm.fermentable.name, 'amount': amount});
      }

      return fermentables;
    }

    this.kettleHops = function() {
      var hops = [];

      if(this.recipe.abstractIngredients.kettleHops.length === 0 ||
         typeof this.recipe.brewingSystem.batchSize === "undefined") {
        return hops;
      }

      for(i = 0; i < this.recipe.abstractIngredients.kettleHops.length; i++) {
        var kh = this.recipe.abstractIngredients.kettleHops[i];

        if(typeof kh.hop === "undefined" ||
          typeof kh.time === "undefined" ||
           typeof kh.percent === "undefined") {
          continue;
        }

        // Calculate hop utilization factor
        var g = 1.65 * Math.pow(0.000125, this.boilSpecificGravity() - 1);
        var t = (1 - Math.pow(Math.E, -0.04 * kh.time)) / 4.15;
        var u = g * t;

        // Calculate the amount of hops required to add one IBU to the boil,
        // and multiply by the number of IBUs we need.
        var amount = ((((1 * this.recipe.brewingSystem.batchSize) / 75) / u) /
          kh.hop.alpha) * (this.recipe.ibu * (kh.percent / 100));

        hops.push({
          'name': kh.hop.name,
          'amount': amount,
          'time': kh.time
        });
      }

      return hops;
    }

    this.dryHops = function() {
      var hops = [];

      if(this.recipe.abstractIngredients.dryHops.length === 0 ||
         typeof this.recipe.brewingSystem.batchSize === "undefined") {
        return hops;
      }

      // Calculate hop amounts
      for(i = 0; i < this.recipe.abstractIngredients.dryHops.length; i++) {
        var dh = this.recipe.abstractIngredients.dryHops[i];

        if(typeof dh.ozPerGal === "undefined") {
          continue;
        }

        var amount = dh.ozPerGal * this.recipe.brewingSystem.batchSize;

        hops.push({'name': dh.hop.name, 'amount': amount});
      }

      return hops;
    }
  }

  return module;

}(BREWED || {}));
