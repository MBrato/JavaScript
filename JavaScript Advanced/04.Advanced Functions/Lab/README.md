Lab: Advanced Functions
==================================

### 1. Aggregates
* Write a JS program that uses a reducer function to display information about an input array.
  * Input: You will receive an array of numeric values.
  * Output: The output should be the printed on the console. Display the sum of all elements in the array, the value of the
smallest, the value of the biggest, the product of all elements and a string of all elements joined together.

### 2. Currency Format
* Write a higher-order JS function that fixes some of the parameters of another function. Your program will receive a
function that takes 4 parameters and returns a formatted string (a monetary value with currency symbol). Your task
is to return another function that only takes one parameter and returns the same formatted string.
  * Set the following parameters to fixed values:
    * separator: ","
    * symbol: "$"
    * symbolFirst: true
  * The final parameter value is the one that the returned function will receive.
  * Input: You will receive a function parameter.
  * Output: You need to return a function that takes one parameter – value.

### 3. Command Processor
* Write a JS program that keeps a string inside it’s context and can execute different commands that modify or
output the string on the console.
append(str) – add str to the end of the internal string
removeStart(n) – remove the first n characters from the string, n is an integer
removeEnd(n) – remove the last n characters from the string, n is an integer
print – output the stored string to the console
  * Input: You will receive an array of strings. Each element is a command that may be a single word or contain an argument,
separated by space.
* Output: Whenever you receive the command print, output should be the printed on the console. Any other operations are
carried onto the internal storage of the function.

### 4. Max Element
* Write a JS program that takes an array of numeric elements as input and returns the largest element of the array.
  * Input: You will receive an array of numbers.
  * Output: The output should be the return value of your function. It represents the largest element of the array.

### 5. Next Article
* Write a JS program that sequentially displays articles on a web page when the user clicks a button. You will receive
an array of strings that will initialize the program. You need to return a function that keeps the initial array in its
closure and every time it’s called, it takes the first element from the array and displays it on the web page, inside a
div with ID "content". If there are no more elements left, your function should do nothing.
  * Input: You will receive and array of strings.
  * Output: Return a function that displays the array elements on the web page.
