'use strict';

function noteControllerIsInstantiated(){
  var cont = new NoteController();
  console.log("TEST: noteControllerIsInstantiated");
  assert.isTrue(cont);
}

function innerPropertyOfAppContainsHTML(){
  var cont = new NoteController();
  cont.createNote("Favourite food: pesto");
  cont.getHTML();
  console.log("TEST: innerPropertyOfAppContainsHTML");
  assert.isTrue(document.getElementById('app').innerHTML === '<ul><li><div>Favourite food: pesto</div></li></ul>');
}

noteControllerIsInstantiated();
innerPropertyOfAppContainsHTML();
