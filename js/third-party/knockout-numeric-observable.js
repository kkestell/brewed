ko.numericObservable = function(initialValue) {
  var _actual = ko.observable(initialValue);

  var result = ko.dependentObservable({
    read: function() {
      return _actual();
    },
    write: function(value) {
      var parsedValue = parseFloat(value);
      _actual(isNaN(parsedValue) ? value : parsedValue);
    }
  });

  return result;
};
