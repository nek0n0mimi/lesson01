let arg1 = String(process.argv[2]);
let arg2 = String(process.argv[3]);

function reverse_number(value) {
   return Number(value.split("").reverse().join(""));
}

const sum = reverse_number(arg1) + reverse_number(arg2);
console.log(String(sum));
