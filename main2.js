function checkIfAllEven(arr) {
  if (!Array.isArray(arr)) return false;
  let isValid = true;
  for (let i = 0; i < arr.length; i++) {
    let number = arr[i];
    if (number % 2 !== 0) {
      return false;
    }
  }
  return isValid;
}
console.log(checkIfAllEven([2, 4, 6]));
