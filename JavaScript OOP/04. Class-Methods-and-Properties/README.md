# Linked list
- Implement a **linked list** using **ES6 classes**. Use two classes - `LinkedList` and `listNode`. Look at the hints at the bottom of the description. Your class implementation should:

### Getters
- have a getter `first` - return the value of the first node in the list
- have a getter `last` - return the value of the last node in the list
- have a getter `length` for the length of the linked list

### Methods
- provide a method `append(el1, el2, el3...)` that adds the provided elements to the end of the list
    - should enable chaining

- provide a method `prepend(el1, el2, el3...)` that adds the provided elements to the beggining of the list
    - should enable chaining

- provide a method `insert(index, el1, el2, el3...)` for inserting values at the specified index
    - should enable chaining

- provide a method `at(index[, value])` for indexing
    - when passed an **index**, it should return the element at that **index**
    - when passed an **index** and a **value**, should change the value of the element at that index

- provide a method `removeAt(index)` that removes an element at a given index
    - should return the removed element

- your class should be **iterable with a for-of loop**
    - you must use `Symbol.iterator`

- provide a `toArray()` method, that converts the linked list to an array

- provide method `toString()`, which should return a string representation of the linked list - the values of the elements, separated by **' -> '**
