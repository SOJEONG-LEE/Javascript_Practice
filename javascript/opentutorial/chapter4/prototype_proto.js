function Person(name, first, second) {
    this.name = name;
    this.first = first;
    this.second = second;
}
Person.prototype.sum = function () {
    return this.first + this.second;
}

var kim = new Person('kim', 10, 20);
console.log(kim.__proto__)

var lee = new Person();
console.log(lee.name);
console.log(lee.sum() );