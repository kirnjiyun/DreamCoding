// Nullish Coalescing Operator
// ES11 (ECMAScript 2020)
// ?? null, undefined
// || falshy한 경우 설정(할당) 0, -0, ''
let num = 0;
//num 이 없을때만 기본값인 -1을 출력하고싶다
console.log(num || "-1");
//이건 0이 false라서 num = 0 출력한다
console.log(num ?? "-1");
