<img alt="Logo" src="http://coderslab.pl/svg/logo-coderslab.svg" width="400">

# Arrays &ndash; exercises

> Write your answers in the **app.js** file, unless the instructions tell you otherwise.
Remember to separate exercises with comments, and write legible, well-formatted code.

## Exercise done with the lecturer

### Find difference  (~ 10min - 15min)

Write a ```distFromAvarage``` function that will take only one parameter &ndash; an array. The function should return an array that will hold the difference between the number from a given cell and the average value of the array.
E.g.

```JavaScript
distFromAvarage([1,2,3,4,5,6,7]) => [3,2,1,0,1,2,3] (average of the input array is 4)
distFromAvarage([1,1,1,1]) => [0,0,0,0] (average of the input array is 1)
distFromAvarage([2,8,3,7]) => [3,3,2,2] (average of the input array is 5)
```
------------------------------------------------------------------------------------------------------------
## Exercises to do on your own

### Exercise 1 (~ 5min - 10 min)

List your favorite fruit in an array. Then:
1. Write the first fruit in the console.
2. Write the last fruit in the console (use the ```length``` attribute).
3. Write all the fruit in a loop (use the ```length```attribute).

### Exercise 2 (~ 5min - 10 min)

Take a look at **exercise02.js** &ndash; there is an example of a function that creates an array of numbers. Unfortunately, it does not work properly. Find the error and fix it, so that the function works good.

### Exercise 3 (~ 5min - 10 min)

Write a function named ```printTable(array)``` that will take only one parameter &ndash; an array. Then ,using a **for** loop, iterate (go) through every element and write each of them in the console.

### Exercise 4 (~ 10min - 15 min)

Write a ```multiply(array)``` function that will take only one parameter &ndash; an array. The function should multiply all numbers from this table (using a **for** loop) and return the result.

```JavaScript
multiply([1,2,3,4,5,6,7]) => 5040
multiply([1,1,1,1]) =>
multiply([2,8,3,7]) => 336
```

### Exercise 5 (~ 10min - 15 min)

Write a function named ```getEvenAvarage``` that will take only one parameter &ndash; an array. The function should return the average value of **even** numbers in the array. To simplify things, we can assume that the table holds numbers only. If there are no even numbers, the function should return null.

```JavaScript
getEvenAvarage([1,2,3,4,5,6,7]) => 4
getEvenAvarage([1,1,1,1]) => null
getEvenAvarage([2,8,3,7,4]) => 4.666
```

### Exercise 6  (~ 15min - 20 min)

Write a ```sortArray``` function that will take only one parameter &ndash; an array of integers. The function should return the array with its elements sorted in ascending order. You can use array methods in this exercise.

```JavaScript
sortArray([145,11,3,64,4,6,10]) => [3,4,6,10,11,64,145]
```

### Exercise 7  (~ 15min - 20 min)

Write a function named ```addArrays``` that will take two parameters &ndash; two arrays of integers. The function should return an array holding the result of adding elements of the two arrays with the same index. If both arrays have different lengths,
Funkcja ta ma zwracać również tablicę, która będzie wynikiem dodawania każdego elementu o tym samym indeksie. Jeżeli, tablice nie są równe, the excess elements will be rewritten to a new table.

```JavaScript
addArrays([4,0,1,3,4], [1,9,6,7,8,17]) => [5,9,7,10,12,17]
addArrays([8,3,22], [1,3,2]) => [9,6,24]
addArrays([2,3,1,5,3,5], [3,1,76,1]) => [5,4,77,6,3,5]
```
