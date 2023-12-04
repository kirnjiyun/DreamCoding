function fetchEgg(chicken) {
  return Promise.resolve(`${chicken} => 🥚`);
}

function fryEgg(egg) {
  return Promise.resolve(`${egg} => 🍳`);
}

function getChicken() {
  return Promise.reject(new Error("치킨을 가지고 올 수 없음!"));
  //return Promise.resolve(`🪴 => 🐓`);
}

async function makeFriedEgg() {
  let chicken;
  try {
    chicken = await getChicken();
  } catch {
    chicken = "🐔";
  }
  const egg = await fetchEgg(chicken);
  return fryEgg(egg);
}
//치킨 변수 있다. 치킨 가져오는걸 기다림
//성공하면 치킨 가져오고 실패하면 기본 닭 이모지로 할당
//egg 할당해주고 fryEgg리턴한다
makeFriedEgg().then(console.log);
