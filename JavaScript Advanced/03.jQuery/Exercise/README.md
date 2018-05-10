Exercises: jQuery, DOM and Events
==================================

### 1. Increment Counter
* You are tasked with creating a piece of HTML dynamically using JavaScript and appending it to a given element using
a passed in selector.
  * Your function will receive a string value representing a selector (for example ""#wrapper" or ".root"), all elements created should be appended to the selector.
  * The HTML you create should contain 4 elements:
      * <textarea\> with class="counter", value="0" and the disabled attribute.
      * <button\> with class="btn", id="incrementBtn" and text "Increment".
      * <button\> with class="btn", id="addBtn" and text "Add".
      * Unordered list <ul\> with class="results".
  * When the [Increment] is clicked the value of the textarea should go up by one (if it was 0 it should become 1 e.t.c.). When the [Add] is clicked a new list item (<li\>) with text equal to the current value of the textarea should be added to the unordered list.

### 2. Timer
* You will be given an HTML file, containing the markup of a timer with spans for seconds, minutes and hours and buttons to [Start] and [Pause] the timer. Your task is to create a JavaScript application that starts the timer whenever the [Start] button is pressed and pauses it when the [Pause] button is pressed.
  * Constraints:
    * The initial value of the timer must always be 00:00:00

### 3. Book Generator
* Create a function that accepts a selector, a title, an author and an ISBN and uses them to create the HTML code for a book and inserts it into the selector.
  * Your function will receive 4 parameters - a string value representing a selector (for example "#wrapper" or ".root"), a string value representing the title of the book, a string value representing the author of the book and a number representing the ISBN of the book. After the book is created it should be attached to the passed in selector.
  * The number in the Id of the containing div should be incremented by one for each successive book created (i.e. first book should have id = "book1", second id = "book2" and so on…). The title, author and ISBN should be paragraphs with a class equal to their respective role - class="title" for the title paragraph, class="author" for the author paragraph and class="isbn" for the ISBN paragraph. A book should also contain 2 buttons – [Select] and [Deselect], when the [Select] button is pressed the border of the div element should be set to "2px solid blue". When the [Deselect] button is pressed it should be set to "none".

### 4. Form Validation
* You are given the task to write validation for the fields of a simple form.
  * You are provided a skeleton containing the necessary files for your program. The validations should be as follows:
  	 * The username needs to be between 3 and 20 symbols inclusively and only letters and numbers are allowed.
     * The password and confirm-password must be between 5 and 15 inclusively symbols and only word characters are allowed (letters, numbers and _ ).
     * The inputs of the password and confirm-password field must match.
     * The email field must contain the “@” symbol and at least one "."(dot) after it.
      If the "Is company?" checkbox is checked, the CompanyInfo fieldset should become visible and the Company Number field must also be validated, if it isn’t checked the Company fieldset should have the style "display: none;" and the value of the Company Number field shouldn’t matter.
      * The Company Number field must be a number between 1000 and 9999.
  * Every field with an incorrect value when the [Submit] button is pressed should have the following style applied border-color: red;, alternatively if it’s correct it should have style border: none;. If there are required fields with an incorrect value when the [Submit] button is pressed, the div with id="valid" should become hidden ("display: none;"), alternatively if all fields are correct the div should become visible.
  * Constraints:
    * You are NOT allowed to change the HTML or CSS files provided.

### 5. DOM Search
* Write a JS function that generates a form for managing a list of items and inserts it in an HTML document by given selector (e.g. by div id).
  * Your function will receive two arguments – the first is a selector to an HTML element, the second is a Boolean value, indicating whether the search function is case-sensitive. If set to true, searches are case sensitive, if set to false, or not set, searches ignore casing.
  * The user must be able to:
    * Add a new item with specified string content.
    * Delete an existing element.
    * Search for all elements containing a given string.
  * Each of the controls must be in a separate div. Place the add controls inside a div with a class add-controls, and provide a label with the text “Enter text:”, an empty input field and an anchor with the class button applied to it. The anchor acts as an add button and when the user presses it, a new item must be added to the list, using the string in the input field as its name.
  * Place the search controls inside a div with a class search-controls, and provide a label with the text "Search:" and an empty input field. When the user starts typing, the list of items should display only the items that contain the given string. The search is case-sensitive only if specified with an argument. When nothing is entered, the list will contain all elements.
  * Place the result controls inside a div with a class result-controls and in a list of class items-list. Each element has the class list-item. When the list is filtered with a search, all elements that need to be left out must be applied a style of display:none;. Don’t forget to remove the style after the search string is removed!
  * Every element is composed of an anchor with inner text "X" functioning as a delete button and its name wrapped in a <strong\> tag. The anchor has the class button. When the button is clicked, the element is deleted from the list.

### 6. * Calendar
* Write a program that generates a monthly calendar by given date. It should be formatted as an HTML table with a caption for the month and year and headings for each column for the days of the week. The current date must be highlighted with a different style than the rest of the table cells.
    * Requirements:
      * Current month and year are listed in a <caption\> element with the month displayed as a full capitalized name and the year with all digits;
      * The first row contains headings for the days of the week, shortened to 3 letters: Mon, Tue, Wed, etc.;
      * Each week is a complete row – pad the week with empty cells (empty string as cell content) if the month doesn’t start on a Monday or end on a Sunday;
      * The table should contain only as many rows as needed – some months may need 6 weeks, others just 5.

### 7. ** Wiki Parser
* You are tasked by Wikipedia to write a JS program that parses text according to their internal markup in the browser. Your program will receive a selector to a paragraph of text and has to scan it for special symbol combinations that denote specific style for the text that is enclosed in them. For instance, text surrounded by double single quotes (''text'') must be displayed in italics. Look bellow for a full list of features.
  * Markup:
    * The following symbols must be recognized and parsed:
      * ''text'' becomes <i\>text</i\> (two single quotes)
      * '''text''' becomes <b\>text</b\> (three single quotes)
      * =text=, ==text== and ===text=== become <h1\>text</h1\>, <h2\>text</h2\> and <h3\>text</h3\>
      * [[link]] becomes an anchor to /wiki/link with the same text, <a href="/wiki/link"\>link</a\>
      * [[link|Text]] becomes an anchor to /wiki/link with the argument after the pipe as text, <a href="/wiki/link"\>Text</a\>
    * Note all resulting hyperlinks are relative to /wiki
  * Constraints
    * There will be no overlapping markup, i.e. there won’t be bold text inside a heading or a link
    * All hyperlinks will only consist of valid characters
