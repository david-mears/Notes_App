'use strict';

(function(exports) {

    function NoteList(noteModelOrScopeOnWhichNoteCanBeFound) {
        this.noteModel = noteModelOrScopeOnWhichNoteCanBeFound;
        this.notes = [];
    }

    NoteList.prototype.addNote = function(newNote) {
      this.notes.push(newNote)
    }

    NoteList.prototype.addMessage = function(newMessage) {
      var newNote = new this.noteModel.Note(newMessage)
      this.notes.push(newNote)
    }

    NoteList.prototype.allNotes = function() {
      return this.notes
    }

    exports.NoteList = NoteList
})(this)
