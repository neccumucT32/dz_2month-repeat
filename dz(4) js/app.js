// capitalizeString("ЕВГЕНИЙ") -> "Евгений"; capitalizeString("иВАНОВ") -> "Иванов"
function capitalizeString(str) {
  const firstLetter = str.charAt(0).toUpperCase();
  const secondLetter = str.slice(1).toLowerCase();
  return firstLetter + secondLetter;
}
console.log(capitalizeString("ЕВГЕНИЙ"));
console.log(capitalizeString("ИВАНОВ"));

// evenOddSum([50,60,60,45,71]) -> [170, 116]
function evenOddSum(arrive) {
  let evenSum = 0;
  let oddSum = 0;

  for (let i = 0; i < arrive.length; i++) {
    if (arrive[i] % 2 === 0) {
      evenSum += arrive[i];
    } else {
      oddSum += arrive[i];
    }
  }
  return [evenSum, oddSum];
}
console.log(evenOddSum([50, 60, 60, 45, 71]));
