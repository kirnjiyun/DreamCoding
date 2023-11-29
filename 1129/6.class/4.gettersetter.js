// 접근자 프로퍼티 (Accessor Property)
class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  get fullName() {
    return `${this.lastName} ${this.firstName}`;
  } //fullName을 겟 할때 함수에 접근 저거 안 하면 안나, 김 수지 나오지만 get 하면 그냥 안나, 김 안나 나옴

  set fullName(value) {
    console.log("set", value);
  }
}

const student = new Student("수지", "김");
student.firstName = "안나";
console.log(student.firstName);
console.log(student.fullName);
student.fullName = "김철수";
