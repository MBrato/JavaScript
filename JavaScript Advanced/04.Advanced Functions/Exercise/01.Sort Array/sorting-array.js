function sortArray(arr, orderType){
  if(orderType === 'asc'){
    return arr.sort((a, b) => { return a - b});
  } if(orderType === 'desc'){
    return arr.sort((a, b) => {return b - a});
  }
}

console.log(sortArray([14, 7, 17, 6, 8], 'asc'));
