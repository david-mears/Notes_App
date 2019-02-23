'use strict';

(function(exports) {

    var counter = 0;

    function Note(message='This is a message') {
        counter += 1;
        this.text = message;
        this.id = counter;
    }

    Note.prototype.read = function() {
      return this.text
    }

    exports.Note = Note
})(this)
