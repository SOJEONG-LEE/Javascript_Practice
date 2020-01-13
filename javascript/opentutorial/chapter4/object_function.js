var kim = {name: 'kim', first: 10, second: 20}
var lee = {name: 'lee', first: 10, second: 10}

// lee.__proto__ = kim;
function sum(prefix) {
    return prefix + (this.first + this.second);
}

console.log('sum.call(kim)', sum.call(kim, '=>'));
console.log('sum.call(lee)', sum.call(lee, ':'));

// sum 함수에는 새로운 객체를 할당하여 새로운 객체 생성
var kimSum = sum.bind(kim, '->');
console.log('kimSum()', kimSum());