var assert = {
  isTrue: function(assertionToCheck) {
    if (!assertionToCheck) {
      console.log("Assertion failed: " + assertionToCheck + " is not truthy");
    } else {
      console.log('Assertion passed.');
    }
  }
};

this.assert = assert
