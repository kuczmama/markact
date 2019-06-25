# markact
Like react but smaller and less efficient

## Usage
```
m([node name], [attributes], ...children)
```

``` 
let element = m("div", {id: "myId"}, 
  m("div", {}, "Hello World!")
);
render(element);  // converts it to HTML

renderAt(element, "id") // renders element at a given ID
```

## Callbacks
It is possible to pass in a callback `onRender` to the element.  The `onRender` callback will pass in the rendered element, once it has been drawn to the screen.

### Example

```
m('div', {onRender: (e) => alert(e)}, "Hello World");
```
