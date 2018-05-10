function getSortedList(){
  return {
    internalArr: [],
    add: function(element){
      this.internalArr.push(element);
      this.size++;
      this.sort();
    },
    remove: function(index){
      if(index >= 0 && index < this.internalArr.length){
        this.internalArr.splice(index, 1);
        this.size--;
      }
    },
    get: function(index){
      if(index >= 0 && index < this.internalArr.length){
        return this.internalArr[index];
      }
    },
    size: 0,
    toString: function(){
      return this.internalArr.join(' ');
    },
    sort: function(){
      this.internalArr = this.internalArr.sort((a, b) => a - b);
    }
  }
}

let sortedList = getSortedList();

console.log(`Size: ${sortedList.size}`);
sortedList.add(2);
sortedList.add(-1);
sortedList.add(100);
sortedList.add(-54);

console.log(sortedList.toString());
console.log(`Size: ${sortedList.size}`);

sortedList.remove(2);
console.log(sortedList.toString());
sortedList.remove(0);
console.log(sortedList.toString());

console.log(sortedList.get(0));
console.log(`Size: ${sortedList.size}`);
