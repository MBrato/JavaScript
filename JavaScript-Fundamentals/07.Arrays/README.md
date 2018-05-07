Homework: Arrays
==================================

###  1. Allocate array
* Write a program that allocates array of N integers, initializes each element by its index multiplied by 5 and the prints the obtained array on the console.
* Input: On the only line you will receive the number N
* Output: Print the obtained array on the console.
  * Each number should be on a new line

###  2. Lexicographically compare
* Write a program that compares two char arrays lexicographically (letter by letter).
* Input:
  * On the first line you will receive the first char array as a string
  * On the second line you will receive the second char array as a string
* Output:
  * Print < if the first array is lexicographically smaller
  * Print > if the second array is lexicographically smaller
  * Print = if the arrays are equal

###  3. Maximal sequence
* Write a program that finds the length of the maximal sequence of equal elements in an array of N integers.
* Input:
  * On the first line you will receive the number N
  * On the next N lines the numbers of the array will be given
* Output: Print the length of the maximal sequence

###  4. Maximal increasing sequence
* Write a program that finds the length of the maximal increasing sequence in an array of N integers.
* Input:
  * On the first line you will receive the number N
  * On the next N lines the numbers of the array will be given
* Output: Print the length of the maximal increasing sequence

###  5. Selection sort
* Sorting an array means to arrange its elements in increasing order. Write a program to sort an array. Use the Selection sort algorithm: Find the smallest element, move it at the first position, find the smallest from the rest, move it at the second position, etc.
* Input:
  * On the first line you will receive the number N
  * On the next N lines the numbers of the array will be given
* Output: Print the sorted array
  * Each number should be on a new line

###  6. Frequent number
* Write a program that finds the most frequent number in an array of N elements.
* Input:
  * On the first line you will receive the number N
  * On the next N lines the numbers of the array will be given
* Output: Print the most frequent number and how many time it is repeated
  * Output should be REPEATING_NUMBER (REPEATED_TIMES times)  

###  7. Binary search
* Write a program that finds the index of given element X in a sorted array of N integers by using the Binary search algorithm.
* Input:
  * On the first line you will receive the number N
  * On the next N lines the numbers of the array will be given
  * On the last line you will receive the number X
* Output: Print the index where X is in the array
  * If there is more than one occurence print the first one
  * If there are no occurences print -1

###  8. Subset with sum S
* We are given an array of integers and a number S. Write a program to find if there exists a subset of the elements of the array that has a sum S.
* Sample tests:
  * input array: 2, 1, 2, 4, 3, 5, 2, 6
  * S: 14 	
  * result: yes

###  9. Permutations of set
* Write a program that reads a number N and generates and prints all the permutations of the numbers [1 … N].
* Sample tests:
  * N: 3
  * result:
    * {1, 2, 3}
    * {1, 3, 2}
    * {2, 1, 3}
    * {2, 3, 1}
    * {3, 1, 2}
    * {3, 2, 1}

###  10. Prime numbers
* Write a program that finds all prime numbers in the range [1 ... N]. Use the Sieve of Eratosthenes algorithm. The program should print the biggest prime number which is <= N.
* Input: On the first line you will receive the number N
* Output: Print the biggest prime number which is <= N

###  11. Find sum in array
* Write a program that finds in given array of integers a sequence of given sum S (if present).
* Sample tests:
  * array: 4, 3, 1, 4, 2, 5, 8
  * S: 11
  * result: 4, 2, 5

### 12. Longest increasing subsequence.js
* There is an array of integers. Find the longest increasing subsequence (LIS).
If several such exist, print the leftmost.
