'use strict';

var test = require('../spec/testing.js')
var noteListViewModel = require('../models/note-list-view.js');
var noteListModel = require('../models/note-list.js');

var testNoteList = new noteListModel.noteList;
var newView = new noteListViewModel.noteListView(testNoteList);
testNoteList.addMessage('Note one')
test.assert.isTrue(newView.makeView() == '<ul><li><div>Note one</div></li></ul>')
testNoteList.addMessage('Note two')
test.assert.isTrue(newView.makeView() == '<ul><li><div>Note one</div></li><li><div>Note two</div></li></ul>')
