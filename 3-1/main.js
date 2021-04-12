let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < num.length; i++) {
  let arr = [];
  // console.log(String(arr));
  for (let b = 1; b <= 9; b++) {
    let result = num[i] * b;
    arr.push(result);
  }
  console.log(arr.join("\t"));
}
