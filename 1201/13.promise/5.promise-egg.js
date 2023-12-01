function fetchEgg(chicken) {
  return Promise.resolve(`${chicken} => 🥚`);
} //치킨을 통해서 Egg를 가져올거야!

function fryEgg(egg) {
  return Promise.resolve(`${egg} => 🍳`);
} //egg라는 인자 받아서 비동기적으로 계란후라이 만드는거

function getChicken() {
  return Promise.reject(new Error("치킨을 가지고 올 수 없음!"));
  //return Promise.resolve(`🪴 => 🐓`);
}

getChicken()
  .catch(() => "🐔")
  .then(fetchEgg) //치킨 가져오는거 성공하면 fetchEgg호출.then((chicken)=>fetchEgg(chicken)
  .then(fryEgg) //.then((egg) => fryEgg(egg)) 이걸 생략한거야
  .then(console.log); // 다 성공적으로 한다면!
