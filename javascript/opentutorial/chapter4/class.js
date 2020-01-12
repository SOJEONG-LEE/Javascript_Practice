class Person {
    constructor(name, first, second) {
        this.name = name;
        this.first = first;
        this.second = second;
        // console.log('constructor');
    }
    sum() {
        return this.first + this.second;
    }
}

class PersonPlus extends Person{
    constructor(name, first, second, third){
        super(name, first, second);
        this.third = third;
    }
    sum(){
        return super.sum()+this.third;
    }
    avg(){
        return (this.first+this.second)/2;
    }
}

// Person.prototype.sum = function () {
//     return 'prototype : ' + (this.first + this.second);
// }

var kim = new PersonPlus('kim',10,20,30);
// kim.sum = function(){
//     return 'this : '+(this.first+this.second);
// }
console.log('kim', kim);
console.log("kim.sum()", kim.sum());
console.log("kim.avg()", kim.avg());