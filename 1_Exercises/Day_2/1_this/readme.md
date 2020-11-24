 <img alt="Logo" src="http://coderslab.pl/svg/logo-coderslab.svg" width="400">

# This &ndash; exercises

> Write your answers in the **app.js** file, unless the instructions tell you otherwise.
Remember to separate exercises with comments, and write legible, well-formatted code.

## Exercise done with the lecturer

### Car (~ 10min - 15 min)

Create a ```car``` object, add given properties and methods to it.

#### Properties:
1. brand,
2. color,
3. numberOfKilometers (**0** at the beginning).

#### Methods:
1. ```printCarinfo()``` &ndash; should write the information on the car (color, brand, and the number of traveled kilometers).
2. ```drive(km)``` &ndash; should add a given value to the kilometers traveled by the car so far. Use the keyword ```this``` to relate to the object within the method.

```JavaScript
car.printCarinfo(); => "Black Mercedes, 0km"
car.drive(20);
car.printCarinfo(); => "Black mercedes, 20km"
```


-------------------------------------------------------------------------------

## Exercises to do on your own

### Exercise 1 (~ 7min - 10min)

Add an array with a list of maintenance dates (in strings) to the ```car``` object from the previous exercise. Add this new property **outside the body of the object**.

Add the following methods as well:
 1. a method adding an element to the array,
 2. a method returning all the maintenance dates of the car.

Use the keyword ```this``` to relate to the object within the method.


### Exercise 2 (~ 7min - 10min)

Analyze the code in ```exercise02.js```.

There is a ```calculator``` object that has one method: ```save(newA,newB)```. The purpose of that method is to save two numbers for this object under properties: a and b.

Add methods: ```sum``` and ```multiply``` so that they return the sum or the product of the numbers from the ```save``` method respectively.

### Exercise 3 (~ 7min - 10min)

Create a ```stairs``` object in ```app.js```.

It should have a ```step``` field with the initial value of 0.

Add the following methods to the object as well:
* ```up()``` that will increase the step by 1 (modify the step field)
* ```down()```, that will decrease the step by 1 (modify the step field)
* ```printStep()``` that shows the step we are on.

Call example:

```JavaScript
stairs.up();
stairs.up();
stairs.up();
stairs.down();
stairs.printStep() // 2
```
