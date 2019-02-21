'use strict';

var noteModel = require('./note-model.js');

var assert = {
  isTrue: function(assertionToCheck) {
    if (!assertionToCheck) {
      console.log("Assertion failed: " + assertionToCheck + " is not truthy");
    } else {
      console.log('Assertion passed.');
    }
  }
};

var newNote = new noteModel.note('Test message');
assert.isTrue(newNote.text == 'Test message');
assert.isTrue(newNote.read() == 'Test message');
