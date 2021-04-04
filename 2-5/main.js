let arg1 = process.argv[2];

let a = Math.floor(arg1/100);
let b = Math.floor(arg1%100 / 10);
let c = Math.floor(arg1%10 / 1);
console.log(`100円玉${a}枚,10円玉${b}枚,1円玉${c}枚`);
