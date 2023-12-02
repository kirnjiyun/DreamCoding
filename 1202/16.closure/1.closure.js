const text = "hello";
function func() {
  console.log(text);
}
func();
//어떤  블럭이든 내부에서 외부로 접근은 가능하다~

function outer() {
  const x = 0;
  function inner() {
    console.log(`inside inner: ${x}`);
  }
  return inner;
}
const func1 = outer();
func1();

//내부 함수에서 외부 함수에 접근할 수 있는 권한을 주는 것이 클로져임
//클로저는 함수가 자신이 선언된 범위 외부의 변수에 접근할 수 있는 메커니즘을 말해요. 이는 함수가 만들어질 때의 환경을 기억하고 있다가 이후에도 해당 환경에 접근할 수 있게 해줍니다.
