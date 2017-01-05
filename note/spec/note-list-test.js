'use strict';

function testNewListCreated() {
  var list = new NoteList();
  console.log("TEST: testNewListCreated")
  assert.isTrue( list.seeList() instanceof Array )
};

function testNoteIsInList() {
  var list = new NoteList();
  var note = new Note('yo');
  list.newNote(note);
  console.log("TEST: testNoteListIsInList")
  assert.isTrue(list.seeList().length === 1)
};

testNewListCreated();
testNoteIsInList();
