const jsonObject = require("./kobe.json");

let arr = [];
function search(obj) {
  // 連想配列のkey取得
  for (key in obj) {
    if (key=="kobe") {
      arr.push(obj[key]);
    } else if (typeof obj[key]=="object") {
      // 連想配列のvalue取得して、search()
      search(obj[key]);
    }
  }
}
search(jsonObject);
console.log(arr.join(""));
