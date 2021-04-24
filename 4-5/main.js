let arr = [];
for (let i=2; i<process.argv.length; i++) {
  let get_number = (process.argv[i]);
  arr.push(Number(get_number));
}

for (let j=0; j<arr.length-1; j++) {
  for (let k=arr.length-1; k>j; k--) {
    if (arr[k] < arr[k-1]) {
      let tmp = arr[k];
      arr[k] = arr[k-1];
      arr[k-1] = tmp;
    }
  }
}
console.log(arr);
