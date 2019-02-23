(function(exports) {

    function NoteListView(noteList) {
        this.noteList = noteList
    };

    NoteListView.prototype.makeView = function() {
        elements = ['<ul>']
        var i;
        for (i = 0; i < this.noteList.notes.length; i++) {
            var note = this.noteList.notes[i]
            elements.push('<li><div><a href="#notes/' + note.id + '">' + NoteListView.prototype.curtail(note.text) + '</a></div></li>')
        };
        elements.push('</ul>')
        return elements.join('')
    };

    NoteListView.prototype.curtail = function(string) {
        if (string.length <= 20) {
          return string
        } else {
          return string.slice(0, 19) + '...'
        }
    }

    exports.NoteListView = NoteListView

})(this)
