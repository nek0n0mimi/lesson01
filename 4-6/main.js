const arg = process.argv[2];

const times = arg.split(":");
const minutes = Number(times[1]) + 45;

if (minutes>=60 && times[0]>=23) {
  console.log(String(times[0]-23));
  console.log(String(minutes-60));
} else if (minutes<=60){
  console.log(times[0]);
  console.log(String(minutes));
} else {
  console.log(String(Number(times[0])+1));
  console.log(String(minutes-60));
}
