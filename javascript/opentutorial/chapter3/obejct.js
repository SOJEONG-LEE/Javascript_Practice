var person = {}
person.name = 'sojeong';
person.introduce = function () {
    return 'My name is ' + this.name;
}
console.log(person.introduce());
person.name = 'change name';
var eg = {
    name: 'egoing'
};
console.log(person.introduce());
console.log(person.introduce.call(eg));
console.log(person.introduce.apply(eg));

console.log("------------------------------");

function Person(age) {
    this.age = age;
    this.introduce = function () {
        return 'My age is ' + this.age;
    }
}

var p0 = new Person(0);
console.log(p0.introduce());

var p1 = new Person(1);
console.log(p1.introduce());