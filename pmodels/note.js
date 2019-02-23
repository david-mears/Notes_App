'use strict';

(function(exports) {

    var counter = 0;
    var allNotes = [];

    function Note(message='This is a message') {
        counter += 1;
        this.text = message;
        this.id = counter;
        allNotes.push(this);
    }

    Note.prototype.read = function() {
      return this.text
    }

    exports.Note = Note
    exports.allNotes = allNotes
})(this)
