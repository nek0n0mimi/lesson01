// 1から50までの数字を表示する。ただし3と3の倍数のときだけWOWと表示する

for (let i=1; i<=50; i++) {
  (i % 3 == 0 | String(i).includes("3"))?console.log("WOW"):console.log(String(i));
}
