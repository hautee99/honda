function map(arr, callbackFn) {
  if (!Array.isArray(arr) || typeof callbackFn !== "function") return undefined;
  let newArray = [];
  for (i = 0; i < arr.length; i++) {
    let elenment = arr[i];
    let number = callbackFn(elenment);
    newArray.push(number);
  }
  return newArray;
}
function callbackFn(x) {
  return x + 1;
}

console.log(map([2, 5, 6], callbackFn));

function map(arr, callbackFn) {
  if (!Array.isArray(arr) || typeof callbackFn !== "function") return undefined;
  let newArray = [];
  for (i = 0; i < arr.length; i++) {
    let elenment = arr[i];
    let number = callbackFn(elenment);
    newArray.push(number);
  }
  return newArray;
}

console.log(map([2, 5, 9], (x) => x + 1));
