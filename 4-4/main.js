const arr = [];
//10個の配列を作成
for (let i=0; i<10; i++) {
  //重複せずに0から9までの数字を生成
  while (true) {
    let random_number = getRandomIntInclusive(0, 10);   //0から9まで乱数生成
    if (! arr.includes(random_number)) {
      arr.push(random_number);
      break;
    }
  }
}
console.log(arr.join(" "));


//minとmaxの範囲内の乱数生成宣言
function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
