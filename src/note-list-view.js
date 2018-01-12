(function(exports){
  var View = function(notelist) {
    this.notelist = notelist;
  };

  View.prototype.returnHTML = function(){
    htmlstring = ''
    for (var i = 0; i < this.notelist.notes.length; i++){
      htmlstring += '<li><div>' + this.notelist.notes[i].readNote().slice(0, 20) + '</div></li>';
    };
    return '<ul>' + htmlstring + '</ul>'
  };

exports.View = View;
})(this);
