var assert = {
  isTrue: function(assertionToCheck, testName) {
    if(!assertionToCheck) {
      throw new Error('Assertion failed: ' + testName + ' is not truthy');
    } else {
      console.log(testName + 'passing!');
    }
  }
};
