var BREWED = (function(module) {
  module.Style = function(name, og, ibu, color) {
    this.name  = ko.observable(name);
    this.og    = ko.numericObservable(og);
    this.ibu   = ko.numericObservable(ibu);
    this.color = ko.numericObservable(color);

    this.og.formatted = ko.computed({
      read: function() {
        return (this.og()).toFixed(3);
      },
      write: function(value) {
        this.og(parseFloat(value));
      },
      owner: this
    });
  }

  module.Fermentable = function(name, ppg, color, type) {
    this.name  = ko.observable(name);
    this.ppg   = ko.numericObservable(ppg);
    this.color = ko.numericObservable(color);
    this.type  = ko.observable(type);
  }

  module.Hop = function(name, alpha) {
    this.name  = ko.observable(name);
    this.alpha = ko.numericObservable(alpha);
  }

  module.Yeast = function(name, attenuation) {
    this.name  = ko.observable(name);
    this.attenuation = ko.numericObservable(attenuation);
  }

  module.AbstractRecipeBaseMalt = function(fermentable, percent) {
    this.fermentable = ko.observable(fermentable);
    this.percent = ko.numericObservable(percent);
  }

  module.AbstractRecipeSpecialtyGrain = function(fermentable, ozPerGal) {
    this.fermentable = ko.observable(fermentable);
    this.ozPerGal = ko.numericObservable(ozPerGal);
  }

  module.AbstractRecipeKettleHop = function(hop, percent, time) {
    this.hop = ko.observable(hop);
    this.percent = ko.numericObservable(percent);
    this.time = ko.numericObservable(time);
  }

  module.AbstractRecipeDryHop = function(hop, ozPerGal) {
    this.hop = ko.observable(hop);
    this.ozPerGal = ko.numericObservable(ozPerGal);
  }

  module.FermentableUse = function(name, amount) {
    this.name = ko.observable(name);
    this.amount = ko.numericObservable(amount);
    this.displayAmount = ko.computed({
      read: function() {
        return this.amount().toFixed(2);
      },
      write: function(value) {
        this.amount(parseFloat(value));
      },
      owner: this
    });
  }

  module.KettleHopUse = function(name, amount, time) {
    this.name = ko.observable(name);
    this.amount = ko.numericObservable(amount);
    this.time = ko.numericObservable(time);
    this.displayAmount = ko.computed({
      read: function() {
        return this.amount().toFixed(2);
      },
      write: function(value) {
        this.amount(parseFloat(value));
      },
      owner: this
    });
  }

  module.DryHopUse = function(name, amount) {
    this.name = ko.observable(name);
    this.amount = ko.numericObservable(amount);
    this.displayAmount = ko.computed({
      read: function() {
        return this.amount().toFixed(2);
      },
      write: function(value) {
        this.amount(parseFloat(value));
      },
      owner: this
    });
  }

  module.RecipeEditorViewModel = function() {
    var self = this;

    this.styles = ko.observableArray();
    this.fermentables = ko.observableArray();
    this.hops = ko.observableArray();
    this.yeasts = ko.observableArray();
    this.name = ko.observable('');
    this.style = ko.observable();
    this.notes = ko.observable('');
    this.og = ko.observable();

    this.fermentableTypes = ko.observableArray([
      'Base Malt',
      'Kilned Malt',
      'Roasted Malt',
      'Caramel/Crystal Malt',
      'Extract',
      'Adjunct'
    ]);

    // Formatted target OG
    this.og.formatted = ko.computed({
      read: function() {
        if(typeof this.og() === 'undefined') {
          return '';
        }
        return (this.og()).toFixed(3);
      },
      write: function(value) {
        this.og(parseFloat(value));
      },
      owner: this
    });

    this.ibu = ko.numericObservable();
    this.mashEfficiency = ko.numericObservable(75);
    this.batchSize = ko.numericObservable(5);
    this.baseMalts = ko.observableArray();
    this.specialtyGrains = ko.observableArray();
    this.kettleHops = ko.observableArray();
    this.dryHops = ko.observableArray();
    this.yeast = ko.observable();
    this.fermentableUses = ko.observableArray();
    this.kettleHopUses = ko.observableArray();
    this.dryHopUses = ko.observableArray();

    this.recipe = ko.computed({
      read: function() {
        var recipe = new BREWED.Recipe({
          og: this.og(),
          ibu: this.ibu(),
          abstractIngredients: {
            baseMalts: ko.toJS(this.baseMalts()),
            specialtyGrains: ko.toJS(this.specialtyGrains()),
            kettleHops: ko.toJS(this.kettleHops()),
            dryHops: ko.toJS(this.dryHops())
          },
          brewingSystem: {
            mashEfficiency: this.mashEfficiency(),
            batchSize: this.batchSize()
          }
        });

        // Populate fermentable uses
        this.fermentableUses.removeAll();

        var recipeBaseMalts = recipe.baseMalts();
        for(var i = 0; i < recipeBaseMalts.length; i++) {
          var bm = recipeBaseMalts[i];
          this.fermentableUses.push(new BREWED.FermentableUse(bm.name, bm.amount))
        }

        var recipeSpecialtyGrains = recipe.specialtyGrains();
        for(var i = 0; i < recipeSpecialtyGrains.length; i++) {
          var sg = recipeSpecialtyGrains[i];
          this.fermentableUses.push(new BREWED.FermentableUse(sg.name, sg.amount))
        }

        // Populate kettle and dry hop uses
        this.kettleHopUses.removeAll();
        this.dryHopUses.removeAll();

        var kettleHops = recipe.kettleHops();
        for(var i = 0; i < kettleHops.length; i++) {
          var kh = kettleHops[i];
          this.kettleHopUses.push(new BREWED.KettleHopUse(kh.name, kh.amount, kh.time))
        }

        var dryHops = recipe.dryHops();
        for(var i = 0; i < dryHops.length; i++) {
          var dh = dryHops[i];
          this.dryHopUses.push(new BREWED.DryHopUse(dh.name, dh.amount))
        }

        return recipe;
      },
      owner: this
    });

    this.removeBaseMalt = function(which) {
      this.baseMalts.remove(which);
    }.bind(this);

    this.removeSpecialtyGrain = function(which) {
      this.specialtyGrains.remove(which);
    }.bind(this);

    this.removeKettleHop = function(which) {
      this.kettleHops.remove(which);
    }.bind(this);

    this.removeDryHop = function(which) {
      this.dryHops.remove(which);
    }.bind(this);

    this.removeStyle = function(which) {
      this.styles.remove(which);
    }.bind(this);

    this.removeFermentable = function(which) {
      this.fermentables.remove(which);
    }.bind(this);

    this.removeHop = function(which) {
      this.hops.remove(which);
    }.bind(this);

    this.removeYeast = function(which) {
      this.yeasts.remove(which);
    }.bind(this);

    // Load data
    var json = localStorage['brewed'];
    if(typeof json !== 'undefined') {
      var data = JSON.parse(json);
    } else {
      var data = module.seedData;
    }

    var ingredientSort = function(a, b) {
      if(a.name < b.name) return -1;
      if(a.name > b.name) return 1;
      return 0;
    };

    data.styles.sort(ingredientSort);
    data.fermentables.sort(ingredientSort);
    data.hops.sort(ingredientSort);
    data.yeasts.sort(ingredientSort);

    data.styles.forEach(function(x) {
      self.styles.push(new BREWED.Style(x.name, x.og, x.ibu, x.color));
    });

    data.fermentables.forEach(function(x) {
      self.fermentables.push(new BREWED.Fermentable(x.name, x.ppg, x.color, x.type));
    });

    data.hops.forEach(function(x) {
      self.hops.push(new BREWED.Hop(x.name, x.alpha));
    });

    data.yeasts.forEach(function(x) {
      self.yeasts.push(new BREWED.Yeast(x.name, x.attenuation));
    });
  }

  module.RecipeEditorViewModel.prototype.addStyle = function() {
    this.styles.push(new BREWED.Style('', 0, 0));
  };

  module.RecipeEditorViewModel.prototype.addFermentable = function() {
    this.fermentables.push(new BREWED.Fermentable('', 0, 0));
  };

  module.RecipeEditorViewModel.prototype.addHop = function() {
    this.hops.push(new BREWED.Hop('', 0));
  };

  module.RecipeEditorViewModel.prototype.addYeast = function() {
    this.yeasts.push(new BREWED.Yeast('', 0, 0));
  };

  module.RecipeEditorViewModel.prototype.addBaseMalt = function(fermentable, percent) {
    this.baseMalts.push(new BREWED.AbstractRecipeBaseMalt(fermentable, percent));
  };

  module.RecipeEditorViewModel.prototype.addSpecialtyGrain = function(fermentable, ozPerGal) {
    this.specialtyGrains.push(new BREWED.AbstractRecipeSpecialtyGrain(fermentable, ozPerGal));
  };

  module.RecipeEditorViewModel.prototype.addKettleHop = function(hop, percent, time) {
    this.kettleHops.push(new BREWED.AbstractRecipeKettleHop(hop, percent, time));
  };

  module.RecipeEditorViewModel.prototype.addDryHop = function(hop, ozPerGal) {
    this.dryHops.push(new BREWED.AbstractRecipeDryHop(hop, ozPerGal));
  };

  module.RecipeEditorViewModel.prototype.addEmptyBaseMalt = function() {
    this.baseMalts.push(new BREWED.AbstractRecipeBaseMalt());
  };

  module.RecipeEditorViewModel.prototype.addEmptySpecialtyGrain = function() {
    this.specialtyGrains.push(new BREWED.AbstractRecipeSpecialtyGrain());
  };

  module.RecipeEditorViewModel.prototype.addEmptyKettleHop = function() {
    this.kettleHops.push(new BREWED.AbstractRecipeKettleHop());
  };

  module.RecipeEditorViewModel.prototype.addEmptyDryHop = function() {
    this.dryHops.push(new BREWED.AbstractRecipeDryHop());
  };

  module.RecipeEditorViewModel.prototype.ingredientsChanged = function() {
    var ingredients = {
      fermentables: ko.toJS(this.fermentables),
      hops: ko.toJS(this.hops),
      yeasts: ko.toJS(this.yeasts)
    }

    localStorage['ingredients'] = JSON.stringify(ingredients);
  }

  module.RecipeEditorViewModel.prototype.styleChanged = function() {
    this.og(this.style().og());
    this.ibu(this.style().ibu());
  }

  module.RecipeEditorViewModel.prototype.json = function() {
    var recipe = {
      name: this.name(),
      notes: this.notes(),
      style: {
        name: this.style().name(),
        og: this.style().og(),
        ibu: this.style().ibu(),
        color: this.style().color()
      },
      og: this.og(),
      ibu: this.ibu(),
      abstractIngredients: {
        baseMalts: ko.toJS(this.baseMalts()),
        specialtyGrains: ko.toJS(this.specialtyGrains()),
        kettleHops: ko.toJS(this.kettleHops()),
        dryHops: ko.toJS(this.dryHops()),
        yeast: ko.toJS(this.yeast())
      }
    };

    return JSON.stringify(recipe);
  }

  module.RecipeEditorViewModel.prototype.exportJson = function() {
    module.showModal('Export Recipe', this.json());
  };

  module.RecipeEditorViewModel.prototype.findFermentable = function(name, ppg, color, type) {
    var match = null;
    ko.utils.arrayForEach(this.fermentables(), function(fermentable) {
      if(fermentable.name() == name && fermentable.ppg() === ppg && fermentable.color() === color && fermentable.type() === type) {
        match = fermentable;
      }
    });
    return match;
  }

  module.RecipeEditorViewModel.prototype.findHop = function(name, alpha) {
    var match = null;
    ko.utils.arrayForEach(this.hops(), function(hop) {
      if(hop.name() == name && hop.alpha() === alpha) {
        match = hop;
      }
    });
    return match;
  };

  module.RecipeEditorViewModel.prototype.findYeast = function(name, attenuation) {
    var match = null;
    ko.utils.arrayForEach(this.yeasts(), function(yeast) {
      if(yeast.name() == name && yeast.attenuation() === attenuation) {
        match = yeast;
      }
    });
    return match;
  };

  module.RecipeEditorViewModel.prototype.findStyle = function(name, og, ibu, color) {
    var match = null;
    ko.utils.arrayForEach(this.styles(), function(style) {
      if(style.name() == name && style.og() === og && style.ibu() === ibu && style.color() === color) {
        match = style;
      }
    });
    return match;
  };

  module.RecipeEditorViewModel.prototype.importFermentable = function(name, ppg, color, type) {
    var fermentable = this.findFermentable(name, ppg, color, type);
    if(fermentable === null) {
      fermentable = new BREWED.Fermentable(name, ppg, color, type);
      this.fermentables.push(fermentable);
    }
    return fermentable;
  };

  module.RecipeEditorViewModel.prototype.importHop = function(name, alpha) {
    var hop = this.findHop(name, alpha);
    if(hop === null) {
      hop = new BREWED.Hop(name, alpha);
      this.hops.push(hop);
    }
    return hop;
  };

  module.RecipeEditorViewModel.prototype.importYeast = function(name, attenuation) {
    var yeast = this.findYeast(name, attenuation);
    if(yeast === null) {
      yeast = new BREWED.Yeast(name, attenuation);
      this.yeasts.push(yeast);
    }
    return yeast;
  };

  module.RecipeEditorViewModel.prototype.importStyle = function(name, og, ibu, color) {
    var style = this.findStyle(name, og, ibu, color);
    if(style === null) {
      style = new BREWED.Style(name, og, ibu, color);
      this.styles.push(style);
    }
    return style;
  };

  module.RecipeEditorViewModel.prototype.loadRecipe = function(data) {
    var _this = this;

    this.baseMalts.removeAll();
    this.specialtyGrains.removeAll();
    this.kettleHops.removeAll();
    this.dryHops.removeAll();

    this.name(data.name);
    this.og(data.og);
    this.ibu(data.ibu);
    this.notes(data.notes);

    var style = this.importStyle(data.style.name, data.style.og, data.style.ibu, data.style.color);
    this.style(style);

    if(typeof data.abstractIngredients.baseMalts !== 'undefined') {
      data.abstractIngredients.baseMalts.forEach(function(baseMalt) {
        var fermentable = _this.importFermentable(baseMalt.fermentable.name, baseMalt.fermentable.ppg, baseMalt.fermentable.color, baseMalt.fermentable.type);
        _this.addBaseMalt(fermentable, baseMalt.percent);
      });
    }

    if(typeof data.abstractIngredients.specialtyGrains !== 'undefined') {
      data.abstractIngredients.specialtyGrains.forEach(function(specialtyGrain) {
        var fermentable = _this.importFermentable(specialtyGrain.fermentable.name, specialtyGrain.fermentable.ppg, specialtyGrain.fermentable.color, specialtyGrain.fermentable.type);
        _this.addSpecialtyGrain(fermentable, specialtyGrain.ozPerGal);
      });
    }

    if(typeof data.abstractIngredients.kettleHops !== 'undefined') {
      data.abstractIngredients.kettleHops.forEach(function(kettleHop) {
        var hop = _this.importHop(kettleHop.hop.name, kettleHop.hop.alpha);
        _this.addKettleHop(hop, kettleHop.percent, kettleHop.time);
      });
    }

    if(typeof data.abstractIngredients.dryHops !== 'undefined') {
      data.abstractIngredients.dryHops.forEach(function(dryHop) {
        var hop = _this.importHop(dryHop.hop.name, dryHop.hop.alpha);
        _this.addDryHop(hop, dryHop.ozPerGal);
      });
    }

    if(typeof data.abstractIngredients.yeast !== 'undefined') {
      var yeast = _this.importYeast(data.abstractIngredients.yeast.name, data.abstractIngredients.yeast.attenuation);
      _this.yeast(yeast);
    }

    module.hideModal();
  };

  module.RecipeEditorViewModel.prototype.importJson = function() {
    var _this = this;

    module.showModal('Import Recipe', '', {
      'Import': function() {
        var json = $('.modal-body textarea').val();
        var data = JSON.parse(json);
        _this.loadRecipe(data);
      }
    });
  };

  return module;

}(BREWED || {}));
