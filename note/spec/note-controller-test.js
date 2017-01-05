'use strict';

function noteControllerIsInstantiated(){
  var cont = new NoteController();
  console.log("TEST: noteControllerIsInstantiated");
  assert.isTrue(cont);
}

function innerPropertyOfAppContainsHTML(){
  var cont = new NoteController();
  cont.createNote("Favourite food: pesto")
  cont.getHTML();
  console.log("TEST: innerPropertyOfAppContainsHTML");
  console.log(document.getElementById("app").innerHTML);
  assert.isTrue(document.getElementById("app").innerHTML === '<ul><li><div><a href="note/0">Favourite food: pest</a></div></li></ul>');
}

noteControllerIsInstantiated();
innerPropertyOfAppContainsHTML();
