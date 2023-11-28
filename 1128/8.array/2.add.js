const fruits = ["🍌", "🍎", "🍇", "🍑"];

// 배열 아이템을 참조하는 방법
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
console.log(fruits.length);

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
// const fruits = ['🍌', '🍎', '🍇', '🍑'];
// 추가, 삭제 - 좋지 않은 방식 💩
fruits[6] = "🍓";
//인덱스로 접근하면 실수 생길 수 있음 비어잇는 칸 생긴다.
console.log(fruits);

delete fruits[1];
//얘도 동일 원리임 삭제도 걍 빈 상태로 남아있어서 문제가 된다.

console.log(fruits);
