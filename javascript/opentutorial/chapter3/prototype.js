function Ultra() {
}

Ultra.prototype.ultraProp = true;

function Super() {
}

Super.prototype = new Ultra();

function Sub() {
}

Sub.prototype = Super.prototype;
Sub.prototype.add = "add";
var o = new Sub();
// o.ultraProp = 1;

o['ultraProp'] = 100;
console.log(o.ultraProp);
console.log(o.add);
var s = new Super();
console.log(s.ultraProp);
console.log(s.add);