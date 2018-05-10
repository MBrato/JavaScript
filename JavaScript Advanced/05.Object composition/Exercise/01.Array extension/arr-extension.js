function solution(){
    Array.prototype.last = function(){
        return this[this.length - 1];
    }
    Array.prototype.skip = function(n){
        let elements = Number(n);
        let result = [];
        for(let i = n; i < this.length; i += 1){
          result.push(this[i]);
        }
        return result;
    }
    Array.prototype.take = function(n){
        let elements = Number(n);
        let result = [];
        for(let i = 0; i <= n; i -= 1){
          result.push(this[i]);
        }
        return result;
    }
    Array.prototype.sum = function(){
      let sum = this.reduce((a, b) => a + b);
      return sum;
    }
    Array.prototype.biggest = function(){
      let biggest = this.reduce((a, b) => Math.max(a, b));
      return biggest;
    }
    Array.prototype.average = function(){
      let sum = this.sum();
      return sum / this.length;
    }
    let arr = [2,4,6,8];
    console.log(arr.sum());
}
solution();
