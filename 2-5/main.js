let arg1 = process.argv[2];

let number_1 = Math.floor(arg1/100);
let number_2 = Math.floor(arg1%100 / 10);
let number_3 = Math.floor(arg1%10 / 1);
console.log(`100円玉${number_1}枚,10円玉${number_2}枚,1円玉${number_3}枚`);
