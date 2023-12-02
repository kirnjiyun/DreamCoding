function loop() {
  const array = [];
  // var과 let의 차이점!
  for (var i = 0; i < 5; i++) {
    array.push(function () {
      console.log(i);
    });
  }
  return array;
}

const array = loop();
array.forEach((func) => func());
//01234
//var는 5가 출력된다.
//loop 스코프, 안에 for, 안에 함수라는 세개의 스코프
//var 함수스코프 갖고있음? 블록스코프 없어서 계속 하나의 변수임
//var i 있는거랑 똑같은거임
