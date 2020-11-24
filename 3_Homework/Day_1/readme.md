# JavaScript - Homework
> Write the code in appropriate files according to exercise descriptions.

**VERY IMPORTANT - Your homework is checked using an automated system. In order for the answers to be considered correct, the pages MUST display the same messages as in the exercise description, and function and method names MUST be exactly the same as given in the exercises.**

## Day 1
> Do exercises 1-3 in the app.js file

### Exercise 1
Write ```getNumber``` function that will take two parameters &ndash; a number and an array. The function should return boolean value: true or false depending on whether the passed number is an element of the passed array, or not.

```JavaScript
getNumber(2, [33, 54, 2, 1, 4, 100]) => true
getNumber(5, [33, 54, 2, 1, 4, 100] ) => false
```

### Exercise 2
Write a function named ```addTheSameNumbers``` that will take two parameters &ndash; a number and an array. The function should return the sum of all array elements that are equal to the number passed as the first function parameter. If the number does not appear in the array at all, return null.

```JavaScript
addTheSameNumbers(7, [4, 7, 24, 7, 0, 10]) => 14
addTheSameNumbers(9, [33, 54, 2, 1, 9, 100] ) => 9
addTheSameNumbers(0, [33, 0, 2, 0, 9, 0] ) => 0
addTheSameNumbers(43, [6, 0, 2, 2, 3, 46] ) => null
```

### Exercise 3
In the file ```planets.js``` there is an array of objects named ```planets```. There are 8 planets of the Solar System in it, along with the number of moons they have. Write a ```sortPlanet(planets)``` function that will **return** a new array with the number of moons sorted in descending order (starting with Jupiter, and ending with Venus).

### Additional exercises - for volunteers
> Do all additional exercises in the app.js file

#### Exercise 1 ( * )
Write a function named ```factors``` that will take one parameter &ndash; a number greater than **0**. The function should return an array with all divisors of the number (in descending order). If the number is less than or equal to **0**, the function should return an empty array.

```JavaScript
factors(2) => [2, 1]
factors(54) => [54, 27, 18, 9, 6, 3, 2, 1]
factors(-4) => []
```

#### Exercise 2 ( * )
Write a ```getMissingElement``` function that will accept one parameter &ndash; an array containing integers in ascending order. The function should return the first missing integer (in other words, the place where the values of array elements increase by 2 instead of 1). If there are no missing integers in the array, the function should return ```null```.

```JavaScript
getMissingElement([1,2,3,4,5,6,7]) => null
getMissingElement([6,7,8,10,11,12,13,14,15]) => 9
getMissingElement([-4,-3,-2,0,1,2,3,4]) => -1
```

#### Exercise 3 ( * )
Write a ```getLastNumbers``` function that will take two parameters &ndash; an integer and an array. The function should return a new array containing as many last elements of the passed array as the value of the first parameter (the number) states. If there is no first parameter or it is not an integer, the function should return an empty array.

```JavaScript
getLastNumbers(2, [1,2,3,4,5,6,7]) => [6, 7]
getLastNumbers(4, [6,7,8,10,11,12,13,14,15]) => [12, 13, 14, 15]
getLastNumbers([-4,-3,-2,0,1,2,3,4]) => []
getLastNumbers('ala', [-4,-3,-2,0,1,2,3,4]) => []
```
