"use strict";

(function(exports) {

  function SingleNoteView(note) {
    exports.singleNote = note
  }

  SingleNoteView.prototype.getSingleNote = function() {
      return exports.singleNote
  }

  SingleNoteView.prototype.returnHTML = function() {
    var singleNote = exports.singleNote._text;
    return "<div>" + singleNote + "</div>"
  }

  exports.SingleNoteView = SingleNoteView;

})(this);
