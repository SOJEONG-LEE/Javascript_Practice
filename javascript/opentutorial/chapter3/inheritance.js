function Person(name){
    this.name = name;
}

// Person.prototype.name = null;
Person.prototype.introduce = function () {
    return 'My name is '+this.name;
}

var p1 = new Person('sojeong');
console.log(p1.introduce());

function Programmer(name){
    this.name = name;
}

Programmer.prototype = new Person();
Programmer.prototype.coding = function () {
    return "hello world";
}

var p2 = new Programmer('programmer');
console.log(p2.introduce());
console.log(p2.coding());

function Designer(name){
    this.name = name;
}

Designer.prototype = new Programmer();
Designer.prototype.design = function () {
    return "design";
}

var p3 = new Designer('designer');
console.log(p3.introduce());
console.log(p3.coding());
console.log(Designer.prototype);
console.log(p3);