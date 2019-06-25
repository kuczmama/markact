# markact
Like react but smaller and less efficient

## Usage
```js
m([node name], [attributes], ...children)
```

```js
let element = m("div", {id: "myId"}, 
  m("div", {}, "Hello World!")
);
render(element);  // converts it to HTML

renderAt(element, "id") // renders element at a given ID
```

## Callbacks
It is possible to pass in a callback `onRender` to the element.  The `onRender` callback will pass in the rendered element, once it has been drawn to the screen.

### Example

```js
m('div', {onRender: (e) => alert(e)}, "Hello World");
```
