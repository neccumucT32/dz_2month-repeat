// capitalizeString("ЕВГЕНИЙ") -> "Евгений"; capitalizeString("иВАНОВ") -> "Иванов"

function capitalizeString(str) {
  const firstLetter = str.charAt(0).toUpperCase();
  const secondLetter = str.slice(1).toLowerCase();
  return firstLetter + secondLetter;
}
console.log(capitalizeString("ЕВГЕНИЙ"));
console.log(capitalizeString("ИВАНОВ"));

// evenOddSum([50,60,60,45,71]) -> [170, 116]

function evenOddSum(array) {
  let evenSum = 0;
  let oddSum = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      evenSum += array[i];
    } else {
      oddSum += array[i];
    }
  }
  return [evenSum, oddSum];
}
console.log(evenOddSum([50, 60, 60, 45, 71]));
