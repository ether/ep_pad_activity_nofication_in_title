var _ = require('ep_etherpad-lite/static/js/underscore');

if(typeof exports == 'undefined'){
  var exports = this['mymodule'] = {};
}

exports.postAceInit = function(hook, context){
  context.ace.callWithAce(function(ace){
    var doc = ace.ace_getDocument();
    top.console.log("ace", ace);
    $(doc).find('#innerdocbody').mousemove(_(exports.userActive).bind(ace));
    $(doc).find('#innerdocbody').keypress(_(exports.userActive).bind(ace));
  }, 'hovering', true);
}


exports.aceEditEvent = function(hook_name, args, cb){
  var caretMoving = ( args.callstack.type == "applyChangesToBase" );
  if(!caretMoving) return false;

  if(top.document.title[0] !== "*"){
    if(top.document.title[0] === "*"){
      var prevTitle = top.document.title.substring(2,top.document.title.length);
    }else{
      var prevTitle = top.document.title;
    }
    var newTitle = "* "+prevTitle
    top.document.title = newTitle;
  }
}

exports.userActive = function(){
  if(top.document.title[0] == "*"){
    top.document.title = top.document.title.substring(1,top.document.title.length);
  }
}
