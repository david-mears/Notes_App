'use strict';

var test = require('../spec/testing.js');
var noteListModel = require('../models/note-list.js');
var noteModel = require('../models/note.js');


var noteList = new noteListModel.noteList
var note = new noteModel.note('Message 1')
test.assert.isTrue(noteList.notes.length == 0)
noteList.addNote(note)
test.assert.isTrue(noteList.notes[0] = 'Message 1')
noteList.addMessage('Message 2')
test.assert.isTrue(noteList.notes[1] = 'Message 2')
