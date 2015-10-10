var redefineFunction = require("redefine-function");

var HijackFunction = {
  before: hijackBefore
}

function hijackBefore(context, fnString, beforeFn){
  // There should be some error checking 
  originalFn = getFunctionByName(fnString, context)
  redefineFunction(context, fnString, function(){
    beforeFn.apply(this, arguments);
    originalFn.apply(this, arguments);
    // executeFunctionByName(fnString, window);
  })
}

function getFunctionByName(functionName, context) {
  var namespaces = functionName.split(".");
  var func = namespaces.pop();

  for(var i = 0; i < namespaces.length; i++) {
    context = context[namespaces[i]];
  }

  return context[func];
}

module.exports = HijackFunction

