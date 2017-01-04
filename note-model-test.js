function testReturnText() {
  var note = new Note("My favourite language is Javascript");
  assert.isTrue(note.text === "My favourite language is Javascript");
};

function testReturnText() {
  var note = new Note("Test");
  assert.isTrue(note.getText() === "Test");
};

testReturnText();
testGetText();
