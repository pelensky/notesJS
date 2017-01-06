(function(exports){
  function NoteList(){
    this.notes = [];
  };

  NoteList.prototype.createNote = function(text){
    var noteID = this.getNotes().length;
    var newNote = new Note(text, noteID);
    this.notes.push(newNote);
  };

  NoteList.prototype.getNotes = function(){
    return this.notes;
  }

  exports.NoteList = NoteList;
})(this);
