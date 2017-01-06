function testNoteView() {
  var noteList = new NoteList();
  noteList.createNote("test");
  var noteListView = new NoteListView(noteList);
  assert.isTrue(noteListView.printHTMLList() === "<ul><li><div>test</div></li></ul>")
}

testNoteView();

function testFirst20Chars() {
  var noteList = new NoteList();
  noteList.createNote("This is longer than 20 characters");
  var noteListView = new NoteListView(noteList);
  console.log("Test First20Chars");
  console.log(noteListView.printHTMLList());
  assert.isTrue(noteListView.printHTMLList() === "<ul><li><div>This is longer than </div></li></ul>")
}

testFirst20Chars();
