function findMaxNumber(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return undefined;
  //   v1

  //   let numberMax = arr[0];
  //   for (let i = 0; i < arr.length; i++) {
  //     if (numberMax < arr[i]) {
  //       numberMax = arr[i];
  //     }
  //   }
  //   return numberMax;

  //   v2
  //   return arr.reduce((numberMax, number) => {
  //     if (number > numberMax) return number;
  //     return numberMax;
  //   });

  //   v3
  return arr.reduce((numberMax, number) =>
    number > numberMax ? number : numberMax
  );
}
console.log(findMaxNumber([8, 20, 16]));

function findStringMax(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return undefined;
  //   v1
  //   let stringMax = arr[0];
  //   for (let i = 0; i < arr.length; i++) {
  //     if (stringMax.length < arr[i].length) {
  //       stringMax = arr[i];
  //     }
  //   }
  //   return stringMax;

  //   v2
  //   return arr.reduce((stringMax, stringIndex) => {
  //     if (stringIndex.length > stringMax.length) return stringIndex;
  //     return stringMax;
  //   });

  // v3
  return arr.reduce((stringMax, stringIndex) =>
    stringIndex > stringMax ? stringIndex : stringMax
  );
}
console.log(findStringMax(["ok", "oke3eeeee", "imfine"]));
