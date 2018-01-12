(function(exports){
  function SingleNoteView(note) {
    this.note = note
  };

  SingleNoteView.prototype.returnHTML = function(){
    return "<p>" + this.note.readNote() + "</p>";
  };
exports.SingleNoteView = SingleNoteView

})(this);
