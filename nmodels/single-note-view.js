'use strict';

(function(exports) {

  function SingleNoteView(note) {
    this.note = note;
  };

  SingleNoteView.prototype.HTMLview = function() {
    var elements = ['<div>'];
    elements.push(this.note.text);
    elements.push('</div>');
    return elements.join('');
  };

  exports.SingleNoteView = SingleNoteView;

})(this);
