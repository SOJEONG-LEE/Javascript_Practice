function func() {
}

// 기본적인 함수 호출 방법
func();


function sum1(arg1, arg2) {
    return arg1 + arg2;
}

// Function.apply, Function.call 이용한 호출 방법
console.log(sum1.apply(null, [1, 2]));
console.log(sum1.apply(null, [10, 15]));

o1 = {val1: 1, val2: 2, val3: 3}
o2 = {v1: 10, v2: 50, v3: 100, v4: 25}

function sum2() {
    var _sum = 0;
    // var this = o1 이라고 정의한것
    for (name in this) {
        _sum += this[name];
    }
    return _sum;
}

console.log(sum2.apply(o1)); // sum2.apply(o1) == o1.sum2()와 같다.
console.log(sum2.apply(o2, [200,200])); // 185

function sum3() {
    var _sum = 0;
    for (name in this) {
        if (typeof this[name] !== 'function') {
            _sum += this[name];
        }
    }
    return _sum;
}

o3 = {val1: 1, val2: 2, val3: 3, sum: sum2}
console.log("---------------------------------");
// sum2 함수도 같이 출력되는 이유는 this 값을 더하면서 sum2 함수도 같이 더하기 때문이다.
console.log(o3.sum());
o4 = {v1: 10, v2: 50, v3: 100, v4: 25, sum: sum3}
console.log("---------------------------------");
console.log(o4.sum());