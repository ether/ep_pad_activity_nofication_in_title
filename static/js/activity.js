var _ = require('ep_etherpad-lite/static/js/underscore');

if(typeof exports == 'undefined'){
  var exports = this['mymodule'] = {};
}

exports.postAceInit = function(hook, context){
  context.ace.callWithAce(function(ace){
    var doc = ace.ace_getDocument();
    $(doc).find('#innerdocbody').mousemove(_(exports.userActive).bind(ace));
    $(doc).find('#innerdocbody').keypress(_(exports.userActive).bind(ace));
  }, 'hovering', true);
}


exports.aceEditEvent = function(hook_name, args, cb){
  var caretMoving = ( args.callstack.type == "applyChangesToBase" );
  if(!caretMoving) return false;

  if(window.parent.document.title[0] !== "*"){
    if(window.parent.document.title[0] === "*"){
      var prevTitle = window.parent.document.title.substring(2,window.parent.document.title.length);
    }else{
      var prevTitle = window.parent.document.title;
    }
    var newTitle = "* "+prevTitle
    window.parent.document.title = newTitle;
  }
}

exports.userActive = function(){
  try {
    window.top.document; 
  } catch(e) { 
    /* top-level document is not accessible */ 
    return; 
  } 
  if(window.top.document.title[0] == "*"){
    window.top.document.title = window.top.document.title.substring(1,window.top.document.title.length);
  }
}
