const dog = { name: "와우", emoji: "🐶" };

console.log(Object.keys(dog));
console.log(Object.values(dog));
console.log(Object.entries(dog));

console.log("name" in dog); //특정 오브젝트에 해당 키의 유무를 확인하고싶다면
console.log(dog.hasOwnProperty("name"));

// 오브젝트의 각각의 프로퍼티는 프로퍼티 디스크립터라고 하는 객체로 저장됨
const descriptors = Object.getOwnPropertyDescriptors(dog);
console.log(descriptors);

const desc = Object.getOwnPropertyDescriptor(dog, "name");
console.log(desc);

Object.defineProperty(dog, "name", {
  value: "멍멍",
  // writable: false,업데이트
  // enumerable: false,열거
  // configurable: false,삭제수정
});

console.log(dog.name);
console.log(Object.keys(dog));
delete dog.name;
console.log(dog.name);

const student = {};
Object.defineProperties(student, {
  firstName: {
    value: "영희",
    writable: true,
    enumerable: true,
    configurable: true,
  },
  lastName: {
    value: "김",
    writable: true,
    enumerable: true,
    configurable: true,
  },
  fullName: {
    get() {
      return `${lastName} ${firstName}`;
    },
    set(name) {
      [this.lastName, this.firstName] = name.split(" ");
    },
    configurable: true,
  },
});
console.log(student);
