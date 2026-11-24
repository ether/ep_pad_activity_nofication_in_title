'use strict';

exports.postAceInit = (hook, context) => {
  context.ace.callWithAce((ace) => {
    const doc = ace.ace_getDocument();
    $(doc).find('#innerdocbody').mousemove(exports.userActive.bind(ace));
    $(doc).find('#innerdocbody').keypress(exports.userActive.bind(ace));
  }, 'hovering', true);
};


exports.aceEditEvent = (hookName, args) => {
  const padTitle = document.title;

  const caretMoving = (args.callstack.type === 'applyChangesToBase');
  if (!caretMoving) return false;

  if (padTitle[0] !== '*') {
    let prevTitle;
    if (padTitle[0] === '*') {
      prevTitle = padTitle.substring(2, padTitle.length);
    } else {
      prevTitle = padTitle;
    }
    const newTitle = `* ${prevTitle}`;
    document.title = newTitle;
  }
};

exports.userActive = () => {
  const padTitle = document.title;
  if (padTitle[0] === '*') {
    document.title = document.title.substring(
        1, document.title.length);
  }
};
