let num = 2;
// num이 짝수면 👍
// num이 홀수면 👎
// if
if (num % 2 === 0) {
  console.log("👍");
} else {
  console.log("👎");
}
// ternary
num % 2 === 0 ? console.log("👍") : console.log("👎");
let emoji = num % 2 === 0 ? "👍" : "👎";
console.log(emoji);
