// jsonファイルの読み込み
const fs = require('fs');
const jsonObject = JSON.parse(fs.readFileSync('playdata.json', 'utf8'));
const result = {};
jsonObject.data.forEach((obj) => {
    result[obj.date] = obj;
});

const jsonObject_2 = JSON.parse(fs.readFileSync('songs.json', 'utf8'));
const result_2 = {};
jsonObject_2.songs.forEach((obj) => {
    result_2[obj.date] = obj;
});

// 大きい順にソート
for (let i=0; i<jsonObject.data.length-1; i++) {
  for (let j=jsonObject.data.length-1; j>i; j--) {
    if (Number(jsonObject.data[j].count) > Number(jsonObject.data[j-1].count)) {
      let tmp = jsonObject.data[j];
      jsonObject.data[j] = jsonObject.data[j-1];
      jsonObject.data[j-1] = tmp;
    }
  }
}

for (let j=0; j<jsonObject.data.length; j++) {
  let get_id = Number(jsonObject.data[j].id);
  for (let k=0; k<jsonObject_2.songs.length; k++) {
    if (get_id == jsonObject_2.songs[k].id) {
      console.log(`順位:${jsonObject_2.songs[k].title}\t${jsonObject.data[j].count}`);
    }
  }
}
