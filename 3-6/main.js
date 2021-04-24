let arr_count = [];
let count = [];
const mark = "*";
const brank = " ";
const students = [17,38,100,95,23,62,77,45,69,81,83,51,42,36,60];
for ( let j=0; j<students.length; j++) {
  let get_score = Math.floor(students[j]/10);
  arr_count.push(get_score);
  arr_count = arr_count.sort(function(a, b) {
    return a - b;
  });
}

for (let k=0; k<arr_count.length; k++) {
  let num = arr_count[k];
  count[num] = (count[num] || 0) + 1;
}

// 配列を3つ作る
let arr_3 = [];
let arr_2 = [];
let arr_1 = [];

for (let m=0; m<count.length; m++) {
  let number = count[m];
  if (number>=3) {
    arr_1.push(mark);
    arr_2.push(mark);
    arr_3.push(mark);
  } else if (number>=2) {
    arr_1.push(mark);
    arr_2.push(mark);
    arr_3.push(brank);
  } else if (number>=1) {
    arr_1.push(mark);
    arr_2.push(brank);
    arr_3.push(brank);
  } else {
    arr_1.push(brank);
    arr_2.push(brank);
    arr_3.push(brank);
  }
}
console.log(arr_3.join("  "));
console.log(arr_2.join("  "));
console.log(arr_1.join("  "));

// 0から100
let arr = ["0"];
let score = 0;
for (let i=0; i<10; i++) {
  score = score + 10;
  arr.push(String(score));
}
console.log("---------------------------------")
console.log(arr.join(" "));
