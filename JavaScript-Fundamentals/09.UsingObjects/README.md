Homework: Using Objects
==================================

###  1. Planar coordinates
* Write functions for working with shapes in standard Planar coordinate system.
  * Points are represented by coordinates
  * Lines are represented by two points, marking their beginning and ending You will be given three line segments. Calculate their length.
  * Check if the line segments can form a triangle.
* Input: The input will consist of an array containing twelve values
    * Line 1, Point 1 X
    * Line 1, Point 1 Y
    * Line 1, Point 2 X
    * Line 1, Point 2 Y
    * Line 2, Point 1 X
    * ...
* Output: The output should be consisted of four lines
  * Three lines showing the length of each line segment
    * Use 2 digits of precision
  * Fourth line should be one of:
    * Triangle can be formed
    * Triangle can't be formed

###  2. Remove elements
* Write a function that removes all elements with a given value. Attach it to the array type. Read about prototype and how to attach methods.
* var arr = [1,2,1,4,1,3,4,1,111,3,2,1,'1'];
* arr.remove(1); // arr = [2,4,3,4,111,3,2,'1'];
* You will be given an array of strings. Remove all occurrences of the first element in the array in itself.
* Input: The input will consist of an array of strings
* Output: The output should be the array with some elements removed
  * Each string should be on a separate line

###  3. Deep copy
* Write a function that makes a deep copy of an object. The function should work for both primitive and reference types.

### 4. Has property
* Write a function that checks if a given object contains a given property.
* var obj  = …;
* var hasProp = hasProperty(obj, 'length');

### 5. Youngest person
* Write a function that finds the youngest person in a given array of people and prints his/hers full name. Each person has properties firstname, lastname and age.
* Example:
  * var people = [
  { firstname: 'Gosho', lastname: 'Petrov', age: 32 },
  { firstname: 'Bay', lastname: 'Ivan', age: 81 },
  { firstname: 'John', lastname: 'Doe', age: 42 }
  ];
* Input:
  * The input will consist of an array containing 3 * N values
    * N is the number of people
    * Values represent firstname, lastname, age, ...
* Output:
  * The output should be consisted of one line
    * The full name of the youngest person

### 6. Group people
* Write a function that groups an array of people by age. The function must return an associative array, with keys - the groups, and values - arrays with people in this groups Use function overloading (i.e. just one function)
