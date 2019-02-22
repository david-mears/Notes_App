(function(exports) {

    function NoteListView(noteList) {
        this.noteList = noteList
    };

    NoteListView.prototype.makeView = function() {
        elements = ['<ul>']
        var i;
        for (i = 0; i < this.noteList.notes.length; i++) {
            elements.push('<li><div>' + this.noteList.notes[i].text + '</div></li>')
        };
        elements.push('</ul>')
        return elements.join('')
    };

    exports.noteListView = NoteListView

})(this)
