'use strict';

(function(exports) {

  function NoteListView(noteList) {
    this._noteList = noteList;
  };

  NoteListView.prototype.getListOfNotes = function() {
    return this._noteList;
  };

  NoteListView.prototype.returnHTML = function() {
    var list = this._noteList._list;
    var output = "<ul>";
    for (var i = 0; i < list.length; i++) {
      output += "<li><div>" + list[i].readNote().substring(0,20) + "</div></li>";
    }
    return output + "</ul>";
  };

  exports.NoteListView = NoteListView;

})(this);
