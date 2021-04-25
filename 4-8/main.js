const str = "こはるはるここはるここはるはるここはるこはるはるはる"
const search_word_1 = "こはる";
const search_word_2 = "はるこ";

// strを配列に追加
let arr = [];
for (let i=0; i<str.length; i++) {
  arr.push(str[i]);
}

// 前から3文字ずつ取得し、配列に追加
let found_arr = [];
for (let j=0; j<arr.length-2; j++) {
  let combo = arr.slice(j, j+3);
  combo = combo[0] + combo[1] + combo[2];
  found_arr.push(combo);
}

// 値を探し、カウント
function found(text) {
  let count = 0;
  for (let k=0; k<found_arr.length; k++) {
    let result = found_arr[k].includes(text);
    if (result == true) {
      count += 1;
    }
  }
  return count;
}
console.log(`${search_word_1}:${found(search_word_1)}`);
console.log(`${search_word_2}:${found(search_word_2)}`);
