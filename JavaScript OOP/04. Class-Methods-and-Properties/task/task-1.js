'use strict';

class ListNode {
    constructor(value) {
        this._data = value;
        this._next = null;
    }
    set data(newData){
    	this._data = newData
    }
    get data(){
    	return this._data;
    }
    set next(value){
    	this._next = value;
    }
    get next(){
    	return this._next;
    }
}

class LinkedList {
    constructor() {
    	this._length = 0;
    	this._head = null;
    }
    get head(){
    	return this._head;
    }
    set head(value){
    	return this._head = value;
    }
    get length(){
    	this._length = this.getLength();
        return this._length;
    }
    get first() {
        let firstEl = this.at(0);
        return firstEl;
    }
    get last() {
        let lastEl = this.at(this.length - 1);
        return lastEl;
    }

    getElementAtIndex(index){
    	let currentEl = this.head,
    		counter = 0;

    	while(counter < index && currentEl){
    		currentEl = currentEl.next;
    		counter += 1;
    	}

    	return currentEl;
    }

    getLength(){
    	let current,
    		counter = 1;

    	if(this.head){
    		current = this.head;
    	} else {
    		return 0;
    	}

    	while(current.next){
    		current = current.next;
    		counter += 1;
    	}
    	return counter;
    }

    append(...data){
		let current;

        for (let item of data) {
            let newNode = new ListNode(item);

            if (this.head === null) {
                this.head = newNode;
            } else {
                current = this.head;

                while (current.next) {
                    current = current.next;
                }
                current.next = newNode;
            }
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
        }
        current.next = firstItem;

        return this;
    }

	insert(index, ...data) {
		let prevItem = this.getElementAtIndex(index - 1),
			nextItem = this.getElementAtIndex(index),
			current = prevItem;

			if(index - 1 < 0 || this.length < 0){
				this.prepend(...data);
			} else {
				data.forEach(function(item, i) {
				let node = new ListNode(item);
	
				current.next = node;
				current = current.next;
			});

			current.next = nextItem;
			}	

		return this;
	}

	at(index, value){
		let current = this.getElementAtIndex(index);

		if(typeof value === 'undefined'){
			return current.data;
		} else {
			current.data = value;
			return this;
		}
	}

	removeAt(index){
		let removeEl = this.getElementAtIndex(index),
			prevEl = this.getElementAtIndex(index - 1);

		if(this.length < 1){
			return;
		}
		if(index === 0){
			this.head = removeEl.next;
		} else {
			prevEl.next = removeEl.next;
		}

		return removeEl.data;
	}

	toArray(){
		let arr = [],
			current = this.head;
		
		for(let i = 0; i < this.length; i += 1){
			arr.push(current.data);
			current = current.next;
		}

		return arr;
	}

	toString() {
		let data = this.toArray(),
			result =  data.join(' -> ');

		return result;
	}

	* [Symbol.iterator]() {
		let current = this.head;

		while (current) {
			yield current.data;
			current = current.next;
		}
	}
}

module.exports = LinkedList;