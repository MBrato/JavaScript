function subsum(arr, startIndex, endIndex){
  if(!Array.isArray(arr)){
    return NaN;
  }
  if(endIndex >= arr.length){
    endIndex =  arr.length - 1;
  }
  if(startIndex < 0){
    startIndex = 0;
  }
  let sum = 0;
  for(let i = startIndex; i <= endIndex; i += 1){
    sum += +arr[i];
  }
  return sum;
}
console.log(subsum([10, 20, 30, 40, 50], 1, 20)); //140
console.log(subsum(['10', '20', '30', '50'], 1, 2)); //50
console.log(subsum([10, 20, 30, 40, 50], -1, 2)); //60
console.log(subsum([10, 20, 30, 40, 50], 1, 2)); //50
console.log(subsum('Sofia', 1, 2)); //NaN
console.log(subsum({}, 1, 2)); //NaN
