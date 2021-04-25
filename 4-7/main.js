const arg1 = process.argv[2];
const arg2 = String(process.argv[3]);
let arr = [];

// 引数を配列に変換
const name = arg1.split(", ");

// 引数が含まれるか
for (let i=0; i<=name.length; i++) {
  let result = String(name[i]);
  const reg = new RegExp(".*" + arg2 + ".*", "i");
  const found = result.match(reg);
  if (found != null) {
    arr.push(found);
  }
}

// 小文字に変換
const newArray = arr.map(function(value) {
  return String(value).toLowerCase();
});

// アルファベット順に並び替え
console.log(newArray.sort().join(" "));
