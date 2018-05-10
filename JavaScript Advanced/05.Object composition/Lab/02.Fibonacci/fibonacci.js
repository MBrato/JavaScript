function solve(n) {
  let fibonacci = (function solution(){
    let f1 = 0;
    let f2 = 1;

    return function fibonacci() {
      let f3 = f1 + f2;
      [f1, f2] = [f2, f3];
      console.log(f1);
    }
  })();

  for(let i = 0; i < n; i += 1){
    fibonacci();
  }
}

solve(5);
