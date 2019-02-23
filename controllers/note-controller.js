(function(exports) {

    changeHelloToHowdy = function() {
      var element = document.getElementById('app');
      element.innerHTML = 'howdy';
    };

    function NoteController(noteList) {
        this.noteList = noteList;
        this.noteList.addMessage('Favourite drink: seltzer')
        this.noteListView = new NoteListView(this.noteList)
    }

    NoteController.prototype.addHTMLtoAppElement = function() {
        var app = document.getElementById('app')
        app.innerHTML = this.noteListView.makeView()
    }

    exports.NoteController = NoteController

})(this)
