/const errorLogs = [
  "Error 101:Invalid Exception AAA - 2020/01/01/01:00",
  "Error 3:Invalid Exception BBBB - 2020/01/01/02:00",
  "Error 22:Invalid Exception CCCCC - 2020/01/01/03:00"
];
// 正規表現
for (let i=0; i<errorLogs.length; i++) {
  let get_str = errorLogs[i];
  let found = get_str.match(/:.*\s[-]/g);
  let edit = String(found).replace(/:/g, "").replace(/\s[-]/g, "");
  console.log(edit);
}
