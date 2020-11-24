 <img alt="Logo" src="http://coderslab.pl/svg/logo-coderslab.svg" width="400">

# Objects &ndash; exercises

> Write your answers in the **app.js** file, unless the instructions tell you otherwise.
Remember to separate exercises with comments, and write legible, well-formatted code.

## Exercise done with the lecturer

### Country object (~ 5min - 7min)

Create a country object and add the following properties to it:

* capital - string,
* population - number,
* president - string,
* primeMinisters - string array.

Write all the propreties in the console.

### timeMachine object (~ 5min - 7min)

Create a timeMachine object and add the following properties to it:

* shape - string,
* model - string,
* run(date, place) - a method that lets us travel in time. ```date``` parameter is a date we want to travel to , and ```place``` is the place we want to go to. Both parameters are strings.

Write all the properties in the console and initiate the run  method.

-------------------------------------------------------------------------------

## Exercises to do on your own

### Exercise 1 (~ 5min - 7min)

Create a book object. Add the following properties to it:

1. title,
2. author,
3. numberOfPages.

Write these properties in the console.


### Exercise 2 (~ 5min - 7min)

Create a person object. Add the following properties and a method to it:

1. name,
2. age,
3. sayHello() - will write the string: "hello".

Write these properties in the console and call the method.


### Exercise 3 (~ 5min - 7min)

    Create an object that will store your favorite cooking recipe.The object should have the following properties: ```title``` (string), ```servings``` (number), and ```ingredients``` (string table). Add the ```ingredients``` field outside the body of the object. Write all the information in the console.


### Exercise 4 (~ 5min - 10min)

Copy the code below to the ```app.js``` file:

```JavaScript
var spoon = {
    isExist: true
}

var fork = spoon;
fork.isExist  = false;

```
Then, check if the spoon exists.
