function test_eight(){
  var notelist = new NoteList();
  var view = new View(notelist);
  assert.isTrue(view.notelist === notelist, 'Can take a list as an argument ');
};

test_eight();

function test_nine(){
  var notelist = new NoteList();
  var view = new View(notelist);
  assert.isTrue(view.returnHTML() === '<ul></ul>', 'Will convert an empty note list into an html string ')
};

test_nine();

function test_ten(){
  var notelist = new NoteList();
  var view = new View(notelist);
  notelist.createAndAddNote()
  assert.isTrue(view.returnHTML() === '<ul><li><div>Default note</div></li></ul>', 'Will convert one note from the note list into an html string ')
};

test_ten();

function test_eleven(){
  var notelist = new NoteList();
  var view = new View(notelist);
  notelist.createAndAddNote('first note')
  notelist.createAndAddNote('second note')
  assert.isTrue(view.returnHTML() === '<ul><li><div>first note</div></li><li><div>second note</div></li></ul>', 'Will convert multiple notes from the note list into an html string ')
};

test_eleven();

function test_sixteen(){
  console.log('hello, ed');
  var notelist = new NoteList();
  var view = new View(notelist);
  notelist.createAndAddNote('LLLLLLLLLLLLLLLLLLLLEFJKAESNVKAW')
  console.log(view.returnHTML())
  assert.isTrue(view.returnHTML() === '<ul><li><div>LLLLLLLLLLLLLLLLLLLL</div></li></ul>', 'Will show only the first 20 characters of each notes ')
};

test_sixteen();
