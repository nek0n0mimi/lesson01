
const jsonObject = JSON.parse(fs.readFileSync('users.json', 'utf8'));
const result = {};

jsonObject.users.forEach((obj) => {
    result[obj.date] = obj;
    // 「給与」をjsonデータに追加
    // メンバーの給与を計算
    (obj.rank=="A" && obj.years<5) ? obj.salary = 3000*obj.years+100000 :
    (obj.rank=="A" && obj.years>=5) ? obj.salary = 3000*obj.years+120000 :
    (obj.rank=="B") ? obj.salary = 4000*obj.years+140000 : obj.salary = 5000*obj.years+160000;
});

for (let i=0; i<jsonObject.users.length-1; i++) {
  for (let j=jsonObject.users.length-1; j>i; j--) {
    if (jsonObject.users[j].salary > jsonObject.users[j-1].salary) {
      let tmp = jsonObject.users[j];
      jsonObject.users[j] = jsonObject.users[j-1];
      jsonObject.users[j-1] = tmp;
    }
  }
}
for (let k=0; k<jsonObject.users.length; k++) {
  console.log(jsonObject.users[k].name + ":" + jsonObject.users[k].salary);
}
