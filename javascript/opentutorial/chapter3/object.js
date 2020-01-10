var arr = ["a", "b", "c"];
console.log('Object.keys(arr)', Object.keys(arr));
var o = {'name': 'egoing', 'age': 20, 'city': 'seoul'}
console.log(Object.keys(o));
console.log(Object.toString(o));
var a = new Array(1, 2, 3);
console.log(o.toString());
console.log(a.toString());

console.log("-----------------------");

Object.prototype.contain = function (neeldle) {
    for (var name in this) {
        if (this[name] === neeldle) {
            return  true;
        }
    }
    return false;
}
var o = {'name': 'egoing', 'city': 'seoul'}
console.log(o.contain('egoing'));
for(var name in o){
    console.log(name);
}
console.log("-----------------------");
var a = ['egoing', 'leezche', 'grapittie'];
console.log(a.contain('leezche'));
console.log(a.contain('asdfa'));
for(var name in a){
    console.log(name);
}
for(var name in o){
    if(o.hasOwnProperty(name))
        console.log(name);
}
