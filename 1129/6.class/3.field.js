// 접근제어자 - 캡슐화
// private(#), public(기본), protected
class Fruit {
  #name;
  #emoji;
  #type = "과일";
  //클래스 프룻에는 세가지 프로퍼티가 있는데 두개는 외부로부터 전달받은 데이터, 타입은 클래스 만들어지자마자 과일로 초기화
  //한 번 만든 다음에 외부에서 접근이 안 되게 하고싶다면?
  //protected는 외부에서 볼 수 없는데 상속된 자식 클래스에서 볼 수 있는 거

  constructor(name, emoji) {
    this.#name = name;
    this.#emoji = emoji;
  }
  #display = () => {
    console.log(`${this.#name}: ${this.#emoji}`);
  };
}

const apple = new Fruit("apple", "🍎");
//apple.#name = '오렌지';
// #field는 외부에서 접근이 불가능함
//display만 보인다
console.log(apple);
