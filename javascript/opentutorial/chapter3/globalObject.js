/*
 호스트환경에 따라서 전역객체는 다르다.
 웹브라우저 : window, Node.js : global
*/
console.log(global);
console.log("-------------------------------");
console.log(global.process.title);