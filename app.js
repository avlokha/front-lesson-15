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
