function testSingleNoteViewObjectExists() {
  var singleNote = new SingleNoteView();
  console.log("TEST: testSingleNoteViewObjectExists")
  assert.isTrue(singleNote);
}

function testReturnsHTMLString(){
  note = new Note("Favourite drink: seltzer")
  var singleNote = new SingleNoteView(note);
  console.log("TEST: testReturnsHTMLString");
  assert.isTrue(singleNote.printHTML() === '<div>Favourite drink: seltzer</div>');
}


testSingleNoteViewObjectExists();
testReturnsHTMLString();
