Homework: Methods
==================================

###  1. Say Hello
* Write a method that asks the user for his name and prints Hello, <name>!. Write a program to test this method.
* Input: On the first line you will receive a name
* Output: Print Hello, <name>!
* Sample tests:
  * Input: Peter
  * Output: Hello, Peter!

### 2. Get largest number
* Write a method GetMax() with two parameters that returns the larger of two integers. Write a program that reads 3 integers from the console and prints the largest of them using the method GetMax().
* Input: On the first line you will receive 3 integers separated by spaces
* Output: Print the largest of them
* Sample tests:
  * 1)  
    * Input: 8 3 6
    * Output: 8
  * 2)
    * Input: 7 19 19
    * Output: 19

### 3. English digit
* Write a method that returns the last digit of given integer as an English word. Write a program that reads a number and prints the result of the method.
* Input: On the first line you will receive a number
* Output: Print the last digit of the number as an English word
* Sample tests:
  * Input: 42
  * Output: two

### 4. Appearance count
* Write a method that counts how many times given number appears in a given array. Write a test program to check if the method is working correctly.
* Input:
  * On the first line you will receive a number N - the size of the array
  * On the second line you will receive N numbers separated by spaces - the numbers in the array
  * On the third line you will receive a number X
* Output: Print how many times the number X appears in the array
* Constraints:
  * 1 <= N <= 1024
* Sample tests:
  * Input:
    * 8
    * 28 6 21 6 -7856 73 73 -56
    * 73
  * Output: 2

### 5. Larger than neighbours
* Write a method that checks if the element at given position in given array of integers is larger than its two neighbours (when such exist). Write program that reads an array of numbers and prints how many of them are larger than their neighbours.
* Input:
  * On the first line you will receive the number N - the size of the array
  * On the second line you will receive N numbers separated by spaces - the array
* Output: Print how many numbers in the array are larger than their neighbours
* Constraints:
  * 1 <= N <= 1024
* Sample tests:
  * Input:
    * 6
    * -26 -25 -28 31 2 27
  * Output: 2

### 6. First larger than neighbours
* Write a method that returns the index of the first element in array that is larger than its neighbours, or -1, if there is no such element.
* Input:
  * On the first line you will receive the number N - the size of the array
  * On the second line you will receive N numbers sepated by spaces - the array
* Output: Print the index of the first element that is larger than its neighbours or -1 if none are
* Constraints:
  * 1 <= N <= 1024
* Sample tests:
  * Input:
    * 6
    * -26 -25 -28 31 2 27
  * Output: 1

### 7. Sorting array
* Write a method that returns the maximal element in a portion of array of integers starting at given index. Using it write another method that sorts an array in ascending / descending order. Write a program that sorts a given array.
* Input:
  * On the first line you will receive the number N - the size of the array
  * On the second line you will receive N numbers separated by spaces - the array
* Output:
  * Print the sorted array
    * Elements must be separated by spaces
* Constraints:
  * 1 <= N <= 1024
* Sample tests:
  * 1)
    * Input:
      * 6
      * 3 4 1 5 2 6
    * Output: 1 2 3 4 5 6
  * 2)
    * Input:
      * 10
      * 36 10 1 34 28 38 31 27 30 20
    * Output: 1 10 20 27 28 30 31 34 36 38
