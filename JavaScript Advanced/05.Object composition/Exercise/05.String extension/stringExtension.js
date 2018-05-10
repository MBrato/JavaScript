function solution(){
  String.prototype.ensureStart = function(str){
    if(!this.includes(str, 0)){
      return str += this;
    }
    return this;
  }
  String.prototype.ensureEnd = function(str){
    if(!this.endsWith(str)){
      return this.concat(str);
    }
    return this;
  }
  String.isEmpty = function(str){
    if(str === ''){
      return true;
    }
    return false;
  }
  String.prototype.truncate = function(n){
    if(this.length < n){
      return this;
    } else if(this.length > n && this.includes(' ')){
      let substr = this.substr(0, n);
      substr = substr.slice(0, substr.lastIndexOf(' '));
      return substr += '...';
    } else if(!this.includes(' ') && n >= 4){
      let substr = this.substr(0, n - 3)
      return  substr += '...';
    } else if(n < 4){
      let periods = '.';
      return periods.repeat(n);
    }
  }
  String.format = function(str, ...args) {
    let data = [].slice.call(args);

    if (!data[1]) {
      str = str.replace('{0}', data[0]);
      str = str.replace('{1}', '');
      return str;
    }
    for (let i = 0; i < data.length; i += 1) {
      str = str.replace(`{${i}}`, data[i]);
    }
    return str;
  }


let str = 'my string';
str = str.ensureStart('my');
console.log(str);
str = str.ensureStart('hello ');
console.log(str);
str = str.truncate(16);
console.log(str);
str = str.truncate(14);
console.log(str);
str = str.truncate(8);
console.log(str);
str = str.truncate(4);
console.log(str);
str = str.truncate(2);
console.log(str);
str = String.format('The {0} {1} fox', 'quick', 'brown');
console.log(str);
str = String.format('jumps {0} {1}', 'dog');
console.log(str);
}

solution();
