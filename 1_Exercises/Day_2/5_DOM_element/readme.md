<img alt="Logo" src="http://coderslab.pl/svg/logo-coderslab.svg" width="400">

# Using DOM elements

> Write your answers in the **app.js** file, unless the instructions tell you otherwise.
Remember to separate exercises with comments, and write legible, well-formatted code.

**Do not modify the HTML code unless the instructions say otherwise.**

## Exercise done with the lecturer

### Data attribute  (~ 7min - 12min)

* Create a ```getDatasInfo(elements)``` function and pass it ```links``` variable as a parameter (remember that it is a pseudoarray)
* create a new array in the function and fill it with values from the **data** atttribute of each li element
* return that array.

-------------------------------------------------------------------------------

## Exercises to do on your own

### Exercise 1 (~ 10min - 15min)
Analyze HTML and JavaScript code. In **app.js** there are several variables that store the found DOM elements.

Write all the variables in the console. Check which of them are pseudo-arrays.
Iterate through pseudo-arrays (using e.g. the **for** loop). Write tag name and class of each element.

### Exercise 2 (~ 10min - 15min)
In the console, write the ```innerText``` value for all elements of the ```blocks``` variable. Then, set the ```innerText``` value to "New value of a div with blocks class".

### Exercise 3 (~ 10min - 15min)

* Find an element with ```superFooter``` **class** on the page.
* Create a ```getId(element)``` function and pass it the found element as parameter.
* Extract the id of the element and return it.

### Exercise 4 (~ 10min - 15min)

* Create a function called ```getTags(elements)``` that will take ```childElements``` variable as a parameter (remember that it is a pseudo-array).
* Create a new array in the function and fill it with tag names extracted from the elements of ```childElements```.
* Return the new array.


### Exercise 5 (~ 5min - 10min)

* Write a ```getClassInfo(element)``` function that will take a ```banner``` variable as parameter.
* Return an array with a list of classes taken from the function's parameter.
