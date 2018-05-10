class ListNode {
    constructor(value) {
        this._data = value;
        this._next = null;
    }
    set data(newData){
    	return this._data = newData
    }
    get data(){
    	return this._data;
    }
    set next(value){
    	return this._next = value;
    }
    get next(){
    	return this._next;
    }
}

class LinkedList {
    constructor() {
    	this._length = 0;
    	this._head = null;
        this._currentItem;
    }
    get head(){
    	return this._head;
    }
    set head(value){
    	return this._head = value;
    }
    get length(){
    	return this._length;
    }
    set length(value){
    	return this._length = value;
    }
    get current(){
        return this._current;
    }
    set current(value){
        return this._current = value;
    }

    append(...data){
        for (let item of data) {
            let newNode = new ListNode(item),
                current;

            if (this.head === null) {
                this.head = newNode;
            } else {
                current = this.head;

                while (current.next) {
                    current = current.next;
                }
                current.next = newNode;
            }
            this.length += 1;
            
        }
        return this;
    }
    prepend(...data) {
        let firstItem = this.head,
            current;

        for (let i = 0, len = data.length; i < len; i += 1) {
            let node = new ListNode(data[i]);

            if (i === 0) {
                this.head = node;
                current = this.head;
            } else {
                current.next = node; 
                current = current.next;
            }
            this.length += 1;
        }
        current.next = firstItem;
        return this;
    }

    toString() {
        for (var property in this) {
            if (this.hasOwnProperty(property)) {
                console.log(JSON.stringify(property) + ' : ' + JSON.stringify(this[property]));
                console.log(String(property) + ' <- : -> ' + String(this[property]));
            }
        }
        return this;
    }

    getHead() {
        return console.log(JSON.stringify(this.head));

    }
    iterate(obj, parent_node) {
    parent_node = parent_node || '';
    for (var property in obj) {
        if (obj.hasOwnProperty(property)) {
            var node = parent_node + "/" + property;
            if(obj[property] instanceof Array) {
                console.log('array: ' + node + ":" + obj[property]);
                iterate(obj[property],node);
            } else if(obj[property] instanceof Object){
                console.log('Object: ' + node + ":" + obj[property]);
                iterate(obj[property],node);
            }
            else {
                console.log(node + ":" + obj[property]);
            }
        }
    }
}
}

let newList = new LinkedList();
newList.append(1,3,5);
newList.prepend(12, 888, 378);
console.log('!!!---------------HEAD--------------------!!!')
newList.getHead();
newList.toString();

/*Object.keys(newList).forEach(function(prop) {
  return console.log(prop + ' -> ' + newList[prop]);
});
let a = Object.values(newList);
for(let p of a){
    console.log(p);
}
Object.keys(current).forEach(function(prop) {
  return console.log(prop + ' --1-1-> ' + JSON.stringify(current[prop]));
});
*/
//console.log("---0---" + JSON.stringify(current.next));
//newList.toString();
//Object.keys(list2).map(e => console.log(`key=${e}  value=${list2[e]}`));