'use strict';

(function(exports) {

    function NoteList() {
        this.noteModel = require('./note.js');
        this.notes = [];
    }

    NoteList.prototype.addNote = function(newNote) {
      this.notes.push(newNote)
    }

    NoteList.prototype.addMessage = function(newMessage) {
      var newNote = new this.noteModel.note(newMessage)
      this.notes.push(newNote)
    }

    exports.noteList = NoteList
})(this)
