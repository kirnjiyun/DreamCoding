// 코드 블럭: { }, if() { }, for() { }, function() { }
// 블럭 외부에서는 블럭 내부의 변수를 참조할 수 ❌
{
  const a = "a";
}
console.log(a); //앱이 crash된다.
const b = "b";

// 함수 외부에서는 함수 내부의 변수를 참조 ❌
function print() {
  const message = "Hello World";
  console.log(message);
}
console.log(message);

// 함수 외부에서는 함수의 매개변수를 참조 ❌
function sum(a, b) {
  console.log(a, b);
}
console.log(a, b);

//스코프는 식별자가 유효한 범위를 말함
//내부에서는 외부에 접근 가능
//외부에서는 내부에 접근 노노
//
