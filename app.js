const currentDay = new Date().getDay();
console.log(currentDay);
let currentDayWorld = "";
switch (currentDay) {
  case 0:
    currentDayWorld = "კვირა";
    break;
  case 1:
    currentDayWorld = "ორშაბათი";
    break;
  case 2:
    currentDayWorld = "სამშაბათი";
    break;
  case 3:
    currentDayWorld = "ოთხშაბათი";
    break;
  case 4:
    currentDayWorld = "ხუთშაბათი";
    break;
  case 5:
    currentDayWorld = "პარასკევი";
    break;
  case 6:
    currentDayWorld = "შაბათი";

  default:
    break;
}

console.log(currentDayWorld);

for (let k = 0; k < 100; k++) {
  console.log(k, "for");
}

let t = 0;
while (t < 50) {
  console.log(t, "while");
  t++;
}

let y = 0;

do {
  console.log(y, "do while");
  y++;
} while (y < 150);

let myArr = [];
for (let h = 3; h < 1000; h++) {
  myArr.push(h * h);
}
console.log(myArr);
