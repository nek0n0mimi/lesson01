let arr = [];
for (let i=2; i<process.argv.length; i++) {
  arr.push(Number(process.argv[i]));
}
// 数字を比較する場合、比較関数を定義
arr.sort((a, b) => a- b);
console.log(String(arr[2]));
