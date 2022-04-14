function firstEvenNumber(numberList) {
  if (!Array.isArray(numberList)) return undefined;
  let evenFirst;
  for (let i = 0; i < numberList.length; i++) {
    let number = numberList[i];
    if (number % 2 === 0) {
      evenFirst = number;
      break;
    }
  }
  return evenFirst;
}
console.log(firstEvenNumber([1, 2, 3]));
// v2
function firstEvenNumber(numberList, callbackFn) {
  if (!Array.isArray(numberList)) return undefined;

  for (let i = 0; i < numberList.length; i++) {
    let number = numberList[i];
    if (callbackFn(number)) {
      return number;
    }
  }
  return undefined;
}
function isEven(number) {
  return number % 2 === 0;
}
console.log(firstEvenNumber([1, 4, 3], isEven));

// v3
function firstEvenNumber(numberList, callbackFn) {
  if (!Array.isArray(numberList)) return undefined;

  for (let i = 0; i < numberList.length; i++) {
    let number = numberList[i];
    if (callbackFn(number)) {
      return number;
    }
  }
  return undefined;
}

console.log(firstEvenNumber([6, 4, 3], (x) => x % 2 === 0));
