'use strict';

(function(exports) {

  function NoteController() {
    this.noteList = new NoteList();
    this.noteListView = new NoteListView(this.noteList);
  }

  NoteController.prototype.getHTML = function() {
   var app = document.getElementById("app");
   console.log(app);
   app.innerHTML = this.noteListView.returnHTML();
 };

 NoteController.prototype.createNote = function(text) {
   this.noteList.newNote(text)
 };

  exports.NoteController = NoteController;

})(this);
