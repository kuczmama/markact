// A better React and utils -- MarkAct.js

export function m(nodeName, attributes, ...args) {
    let children = args.length ? [].concat(...args) : null;
    return {
        nodeName,
        attributes,
        children
    }
}

export function render(vnode) {
    if (vnode.split) return document.createTextNode(vnode);
    let n = document.createElement(vnode.nodeName);
    let as = vnode.attributes || {};
    let onRender = null;
    for (let k in as) {
        if (k === 'onRender') {
            onRender = as[k];
        } else if (typeof as[k] === "function") {
            n[k] = as[k];
        } else {
            n.setAttribute(k, as[k]);
        }
    }
    if(onRender) onRender(n);
    (vnode.children || []).map(c => n.appendChild(render(c)));
    return n;
}

export function renderAt(vnode, id) {
    let app = document.getElementById(id);
    if (app.firstChild) app.removeChild(app.firstChild);
    app.appendChild(render(vnode));
};
