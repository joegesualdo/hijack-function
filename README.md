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

## API 

## `before(context, functionString, functionToInsert)`

| Name | Type | Description |
|------|------|-------------|
| context | `Object` | The context of the function you want to hijack 
| functionString| `String` | String that represents the function you want to hijack 
| functionToInsert| `Function` | The function you want to be inserted before the function to be hijacked 
