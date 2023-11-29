//클래스의 정말 중요한 개념임!확장!

// class Tiger {
//   constructor(color) {
//     this.color = color;
//   }
//   eat() {
//     console.log('먹자!');
//   }
//   sleep() {
//     console.log('잔다');
//   }
// }

// class Dog {
//   constructor(color) {
//     this.color = color;
//   }
//   eat() {
//     console.log('먹자!');
//   }
//   sleep() {
//     console.log('잔다');
//   }
//   play() {
//     console.log('놀자아~!');
//   } 강아지는 추가적으로 놀 수가 있다.
// }

class Animal {
  constructor(color) {
    this.color = color;
  }
  eat() {
    console.log("먹자!");
  }
  sleep() {
    console.log("잔다");
  }
}

class Tiger extends Animal {}
const tiger = new Tiger("노랑이");
console.log(tiger);
tiger.sleep();
tiger.eat();

class Dog extends Animal {
  constructor(color, ownerName) {
    super(color); //부모생성자의 컬러 준다
    this.ownerName = ownerName; //외부로부터 가져오는거임
  }
  play() {
    console.log("놀자아~!");
  }

  // 오버라이딩 overriding
  eat() {
    super.eat();
    console.log("강아지가 먹는다!");
  }
}
const dog = new Dog("빨강이", "엘리");
console.log(dog);
dog.sleep();
dog.eat();
dog.play();
//둘의 공통점 먹고 자고!
