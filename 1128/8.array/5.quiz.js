// 퀴즈1: 주어진 배열 안의 딸기 아이템을 키위로 교체하는 함수를 만들기
// 단, 주어진 배열을 수정하지 않도록!
// input: ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🥝', '🍇', '🥝' ]
function replace(array, from, to) {
  const replaced = Array.from(array);
  //대체할 값들을 조작하는 함수를 작성할 때, 기존 배열을 변경하지 않고 새로운 배열을 생성하려면 원래 배열의 복사본을 만들어야 합니다. 그렇지 않으면 기존 배열 자체가 수정될 수 있습니다.

  //그래서 const replaced = Array.from(array) 대신 const replaced = array로 직접 할당하면, replaced 배열은 array 배열과 같은 참조를 공유하게 됩니다. 이 경우, replaced 배열을 수정하면 array 배열도 동시에 변경될 수 있습니다.

  //원본 배열을 변경하지 않고 새로운 배열을 만들어야 할 때는 Array.from()이나 스프레드 연산자 등을 사용하여 배열의 복사본을 생성하는 것이 좋습니다. 그렇게 하면 함수 내에서 배열을 안전하게 조작할 수 있습니다.
  for (let i = 0; i < replaced.length; i++) {
    if (replaced[i] === from) {
      replaced[i] = to;
    }
  }
  return replaced;
}

const array = ["🍌", "🍓", "🍇", "🍓"];
const result = replace(array, "🍓", "🥝");
console.log(result);

// 퀴즈2:
// 배열과 특정한 요소를 전달받아,
// 배열안에 그 요소가 몇개나 있는지 카운트 하는 함수 만들기
// input: [ '🍌', '🥝', '🍇', '🥝' ], '🥝'
// output: 2
function count(array, item) {
  let counter = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === item) {
      counter++;
    }
  }
  return counter;
}

console.log(count(["🍌", "🥝", "🍇", "🥝"], "🥝"));

// 퀴즈3: 배열1, 배열2 두개의 배열을 전달받아,
// 배열1 아이템중 배열2에 존재하는 아이템만 담고 있는 배열 반환
// input: ['🍌', '🥝', '🍇'],  ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🍇' ]

function match(input, search) {
  const result = [];
  for (let i = 0; i < input.length; i++) {
    if (search.includes(input[i])) {
      result.push(input[i]);
    }
  }
  return result;
}
console.log(match(["🍌", "🥝", "🍇"], ["🍌", "🍓", "🍇", "🍓"]));
