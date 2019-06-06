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
