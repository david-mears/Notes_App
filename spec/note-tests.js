'use strict';

var noteModel = require('../models/note-model.js');
var test = require('../spec/testing.js')

var newNote = new noteModel.note('Test message');
test.assert.isTrue(newNote.text == 'Test message');
test.assert.isTrue(newNote.read() == 'Test message');
