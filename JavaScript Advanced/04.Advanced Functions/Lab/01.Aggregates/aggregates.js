function aggregates(arr) {
  function reduce(arr, func) {
    let result = arr[0];
    for (let nextEl of arr.slice(1)) {
      result = func(result, nextEl);
    }
    return result;
  }
  console.log('Sum = ' + reduce(arr, (a, b) => +a + +b));
  console.log('Min = ' + reduce(arr, (a, b) => (+a > +b) ? b : a));
  console.log('Max = ' + reduce(arr, (a, b) => (+a > +b) ? a : b));
  console.log('Product = ' + reduce(arr, (a, b) => +a * +b));
  console.log('Join = ' + reduce(arr, (a, b) => a + b));

}

let arr = ['5', '-3', '20', '7','0.5'];
aggregates(arr);
