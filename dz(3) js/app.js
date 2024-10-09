// 1.

let cars = ["Honda", "Audi", "BMW", "KIA", "Fiat", "Reno"];

for (i = 0; i < cars.length; i++) {
  let flag;
  if (cars[i] === "Honda") {
    flag = "🇯🇵";
  } else if (cars[i] === "Audi") {
    flag = "🇩🇪";
  } else if (cars[i] === "BMW") {
    flag = "🇩🇪";
  } else if (cars[i] === "KIA") {
    flag = "🇰🇷";
  } else if (cars[i] === "Fiat") {
    flag = "🇮🇹";
  } else if (cars[i] === "Reno") {
    flag = "🇫🇷";
  } else {
    flag = " ";
  }
  console.log(cars[i] + " => " + flag);
}

for (let i = 0; i < cars.length; i++) {
  let flag;

  switch (cars[i]) {
    case "Honda":
      flag = "🇯🇵";
      break;

    case "Audi":
    case "BMW":
      flag = "🇩🇪";
      break;

    case "KIA":
      flag = "🇰🇷";
      break;

    case "Fiat":
      flag = "🇮🇹";
      break;

    case "Reno":
      flag = "🇫🇷";
      break;
    default:
      flag = " ";
  }
  console.log(cars[i] + " => " + flag);
}

// 2;

// let TotalPoints = [40, 55, 22, 89, 14, 78, 56, 47, 59];

// for (let i = 0; i < TotalPoints.length; i++) {
//   let points = TotalPoints[i];
//   let grade;
//   if (points <= 20) {
//     grade = 1;
//   } else if (points <= 40) {
//     grade = 2;
//   } else if (points <= 60) {
//     grade = 3;
//   } else if (points <= 80) {
//     grade = 4;
//   } else if (points <= 100) {
//     grade = 5;
//   }
//   console.log(points + " => " + grade);
// }

// 3;

// let cardNumbers = [
//   "46782346",
//   "45781218",
//   "79874568",
//   "12157845",
//   "36151845",
//   "41250895",
//   "41201961",
// ];

// let visaCount = 0;

// for (let i = 0; i < cardNumbers.length; i++) {
//   switch (cardNumbers[i][0]) {
//     case "4":
//       visaCount++;
//       break;
//     default:
//       break;
//   }
// }

// let totalCount = cardNumbers.length;

// console.log("Карт VISA " + visaCount + " из " + totalCount);
