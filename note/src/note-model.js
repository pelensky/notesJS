'use strict';

(function(exports) {

  function Note(text, id) {
    this._text = text;
    this.noteID = id;
  };

  Note.prototype.readNote = function() {
    return this._text;
  };

  Note.prototype.readID = function() {
    return this.noteID;
  };
  
  exports.Note = Note;

})(this);
