## Hijack Function
> Hijack the inner-workings of functions

## Install 
```
$ npm install --save hijack-function
```

## Usage
```javascript
var HijackFunction = require("hijack-function")

Greetings = {
  hello: function(){
    console.log("Hi there!")
  }
}

HijackFunction.before(global, "Greetings.hello", function(){
  console.log("hijacked")
})

Greetings.hello()
```
