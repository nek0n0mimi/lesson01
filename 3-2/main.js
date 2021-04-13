const arg1 = process.argv[2];
const arg2 = process.argv[3];
const mark = "\*";
const dash = "-";

for (let i = 0; i < arg1; i++) {
  let arr = [];
  if (i % 2 == 0) {
    for (let j = 0; j < arg2; j++) {
      let odd = (j % 2 == 1) ? dash : mark;
      arr.push(odd);
    }
  }
  else {
    for (let j = 0; j < arg2; j++) {
      let even = (j % 2 == 1) ? mark : dash;
      arr.push(even);
    }
  }
  console.log(arr.join(""));
}
