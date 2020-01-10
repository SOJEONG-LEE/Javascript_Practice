var memberArray = ['egoing', 'graphittie', 'leezhce'];
console.group('array loop');
var i = 0;
while (i < memberArray.length) {
    console.log(i, memberArray[i]);
    i += 1;
}
console.groupEnd();

console.group('object loop');
var memberObject = {
    manager: 'egoing',
    developer: 'graphittie',
    designer: 'leezhce'
}
for(var name in memberObject){
    console.log(name, memberObject[name]);
}
console.groupEnd();

