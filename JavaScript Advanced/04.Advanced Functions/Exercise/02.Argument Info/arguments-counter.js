function result(){
  let argumentTypes = {};
  let sortedArr = [];

  for(let i = 0; i < arguments.length; i+=1){
    let argVal = arguments[i];
    console.log(`${typeof argVal}: ${argVal}`);

    if(!argumentTypes.hasOwnProperty(typeof argVal)){
      argumentTypes[typeof argVal] = 0;
    }
    argumentTypes[typeof argVal]++;
  }
  for(let argType in argumentTypes){
    if(argumentTypes.hasOwnProperty(argType)){
      let element = argumentTypes[argType];
      sortedArr.push([argType, element]);
    }
  }
  sortedArr = sortedArr.sort((a, b) => {return b[1] - a[1]});

  for(let i = 0; i < sortedArr.length; i += 1){
    let element = sortedArr[i];
    let argType = element[0];
    let argumentCount = element[1];

    console.log(`${argType} = ${argumentCount}`);
  }
}

result('cat', 42, function(){console.log('Hello world!');})
