function func() {
    if (global === this) {
        console.log("global === this");
    } else if (window === this) {
        console.log("window === this");
    }
}

func();

var o = {
    func: function () {
        if (o === this) {
            console.log("o === this");
        }

        if (global === this) {
            console.log("global === this");
        }
    }
}
o.func();

console.log("---------------------");

var funcThis = null;

function Func() {
    funcThis = this;
}

var o1 = Func();
if (funcThis === global) {
    console.log("global");
}
// 호이스팅 : o2 == undefined
console.log(o2);
var o2 = new Func();
if (funcThis === o2) {
    console.log("o2");
}

console.log("---------------------");

function sum(x, y) {
    return x + y;
}

var sum2 = new Function('x', 'y', 'return x+y;');
console.log(sum2(1,5));

console.log("---------------------");
var o = {}
var p = {}
function func() {
    switch (this) {
        case o:
            console.log('o');
            break;
        case p:
            console.log('p');
            break;
        case global:
            console.log('global');
            break;
    }
}

func();
func.apply(o);
func.apply(p);