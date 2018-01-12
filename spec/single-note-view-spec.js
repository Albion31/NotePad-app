function test_fifteen(){
  var note = new Note("Favourite drink: coke")
  var singleNoteView = new SingleNoteView(note)
  console.log(singleNoteView.returnHTML(note))
  assert.isTrue(singleNoteView.returnHTML(note) === "<p>Favourite drink: coke</p>", "showing the single note")
};

test_fifteen();
