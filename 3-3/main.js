const arg1 = process.argv[2];
let mark = "\*";
let brank = " ";

for(let i=1; i<=arg1; i++){
  let arr = [];
  for(let k=0; k<arg1-i; k++) {
    arr.push(brank);
  }
  for(let j=0; j<i*2-1; j++){
    arr.push(mark);
  }
  console.log(arr.join(""));
}
