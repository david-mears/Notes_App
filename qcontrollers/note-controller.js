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

    function getNoteTextById(id) {
      var i;
      for (i = 0; i < allNotes.length; i++) {
          if (allNotes[i].id == id) {
              return allNotes[i].text
          }
      }
      return 'Note not found.'
    }

    function showRelevantNote() {
        var hashid = window.location.hash.slice(7)
        var element = document.getElementById('app');
        element.innerHTML = 'Note' + hashid + ': ' + getNoteTextById(hashid);
        console.log('got here')
    }

    function makeUrlChangeShowRelevantNote() {
        window.addEventListener("hashchange", showRelevantNote);
    };

    makeUrlChangeShowRelevantNote();

    function listenForFormSubmit() {
        var form = document.getElementById('text');
        form.addEventListener('submit', function(event) {
            console.log('OK!')
            event.preventDefault()
        })
    };

    listenForFormSubmit();

    exports.NoteController = NoteController

})(this)
