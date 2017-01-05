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

function testNoteHasIDProperty() {
  var list = new NoteList();
  list.newNote("note 1 with ID 0")
  console.log("TEST: testNoteHasUniqueID")
  assert.isTrue(list._list[0].noteID === 0)
};

function testNoteHasUniqueID() {
  var list = new NoteList();
  list.newNote("note 1 with ID 0")
  list.newNote("note 2 with ID 1")
  console.log("TEST: testNoteHasUniqueID")
  assert.isTrue(list._list[1].noteID === 1)
};

testNewListCreated();
testNoteIsInList();
testNoteHasIDProperty();
testNoteHasUniqueID();
