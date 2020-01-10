/*
var arr = new Array('seoul','new york','ladarkh','pusan', 'Tsukuba');
function getRandomValueFromArray(arr){
    var index = Math.floor(Math.random() * arr.length);
    return arr[index];
}
console.log(getRandomValueFromArray(arr));
*/

Array.prototype.random = function () {
    var index = Math.floor(Math.random() * this.length);
    return this[index];
}

var arr = new Array('seoul','new york','ladarkh','pusan', 'Tsukuba');

console.log(arr.random());