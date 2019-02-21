'use strict';

(function(exports) {

    function Note(message='This is a message') {
        this.text = message
    }

    Note.prototype.read = function() {
      return this.text
    }

    exports.note = Note
})(this)
