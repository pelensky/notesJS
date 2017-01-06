function testCreateNote() {
  var noteList = new NoteList();
  noteList.createNote("test");
  assert.isTrue(noteList.notes.length === 1);
};

function testGetNotes(){
  var noteList = new NoteList();
  noteList.createNote("test");
  assert.isTrue(noteList.getNotes() === noteList.notes);
};

function testNewNoteHasAnIDProperty(){
  var noteList = new NoteList();
  noteList.createNote("test");
  console.log("TEST testNewNoteHasAnIDProperty")
  console.log(noteList.getNotes())
  assert.isTrue(noteList.getNotes()[0].id === 0);
};

testCreateNote();
testGetNotes();
testNewNoteHasAnIDProperty();
