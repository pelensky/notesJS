'use strict';

function testNewNoteListViewCreated() {
  var listView = new NoteListView();
  console.log("TEST: testNewNoteListViewCreated")
  assert.isTrue(listView)
};

function testNoteListViewTakesNoteListModel() {
  var noteList = new NoteList();
  var listView = new NoteListView(noteList);
  console.log("TEST: testNoteListViewTakesNoteListModel")
  assert.isTrue(listView.getListOfNotes);
};

function testNoteListViewReturnsHTML() {
  var noteList = new NoteList();
  noteList.newNote("this is a string");
  var listView = new NoteListView(noteList);
  console.log("TEST:testNoteListViewReturnsHTML");
  assert.isTrue(listView.returnHTML() === "<ul><li><div>this is a string</div></li></ul>");
};

function testNoteListViewReturnsHTMLStringWith20Character() {
  var noteList = new NoteList();
  noteList.newNote("This is a very very long string!");
  var listView = new NoteListView(noteList);
  console.log("TEST:testNoteListViewReturnsHTMLStringWith20Character");
  assert.isTrue(listView.returnHTML() === "<ul><li><div>This is a very very </div></li></ul>");
}

testNewNoteListViewCreated();
testNoteListViewTakesNoteListModel();
testNoteListViewReturnsHTML();
testNoteListViewReturnsHTMLStringWith20Character()
