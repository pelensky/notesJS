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
  assert.isTrue(listView.returnHTML() === "<ul><li><div><a href=note/0>this is a string</a></div></li></ul>");
};

function testNoteListViewReturnsHTMLStringWith20Character() {
  var noteList = new NoteList();
  noteList.newNote("This is a very very long string!");
  var listView = new NoteListView(noteList);
  console.log("TEST: testNoteListViewReturnsHTMLStringWith20Character");
  assert.isTrue(listView.returnHTML() === "<ul><li><div><a href=note/0>This is a very very </a></div></li></ul>");
}

function testIndividualNoteIsLinkedToIndividualURL() {
  var noteList = new NoteList();
  noteList.newNote("note 1")
  var listView = new NoteListView(noteList);
  console.log("TEST: testIndividualNoteIsLinkedToIndividualURL")
  assert.isTrue(listView.returnHTML() === "<ul><li><div><a href=note/0>note 1</a></div></li></ul>");
};

testNewNoteListViewCreated();
testNoteListViewTakesNoteListModel();
testNoteListViewReturnsHTML();
testNoteListViewReturnsHTMLStringWith20Character();
testIndividualNoteIsLinkedToIndividualURL();
