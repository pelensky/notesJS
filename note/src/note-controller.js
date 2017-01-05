'use strict';

(function(exports) {

  function NoteController() {
    this.noteList = new NoteList();
    this.noteListView = new NoteListView(this.noteList);
  }

  NoteController.prototype.createNote = function(text) {
    this.noteList.newNote(text)
  };

  NoteController.prototype.getHTML = function() {
   var app = document.getElementById("app");
   app.innerHTML = this.noteListView.returnHTML();
 };

  exports.NoteController = NoteController;

})(this);
