'use strict';

(function(exports) {

  function NoteController() {
    this.noteList = new NoteList();
    this.noteListView = new NoteListView(this.noteList)
  };

  NoteController.prototype.getHTML = function() {
   var app = document.getElementById("app");
   console.log(app);
   app.innerHTML = noteListView.returnHTML();
 };

  exports.NoteController = NoteController;

})(this);
