 <img alt="Logo" src="http://coderslab.pl/svg/logo-coderslab.svg" width="400">

# Constructor function &ndash; exercises

> Write your answers in the **app.js** file, unless the instructions tell you otherwise.
Remember to separate exercises with comments, and write legible, well-formatted code.

## Exercise done with the lecturer

### Różne koszyki dla różnych klientów (~ 10min - 15min)

Create a ```Basket``` constructor in ```app.js```. Based on it, create an object with the following fields:
* products - an array with all the products
* sum - amount to pay for all the purchased products

Add the following methods to the prototype of the constructor:
* ```addProduct(name, price)```that will take the name of the product and its proce as parameters. Pass the price as a number, and the name as a string. Place the data as an object in this.products array.
* ```showBasket()``` that will show all the products from the basket with their price and the amount to pay.

Call example:

```JavaScript
var aliceBasket = new Basket();
aliceBasket.addProduct("tomato",10);
aliceBasket.addProduct("watermelon",40);
aliceBasket.showBasket();

var bruceBasket = new Basket();
bruceBasket.addProduct("rice", 10);
bruceBasket.addProduct("mun mushroom",50);
bruceBasket.addProduct("tofu",20);
bruceBasket.showBasket();
```

-------------------------------------------------------------------------------

## Exercises to do on your own

### Exercise 1 (~ 10min - 15 min)

In **exercise01.js** there is an example of a robot constructor. It expects you only to give a name for a robot.
Methods have been added to the prototype of the function.
Create several robots and check if you can find any mistakes in the code.
Do not be afraid to check in the console how the individual robots and the constructor look.

### Exercise 2 (~ 15min - 20min)

Create a ```Calculator``` constructor for future objects. The constructor should not take any data. Every newly created object should have an empty array that will store the history of operations.
Next, add the following methods using prototype:
  1. ```add(num1, num2)``` &ndash; will add two variables and return the result. In the operation history, it will save a statement: "added ```num1``` to ```num2``` got ```result```" (of course, with variables inserted in the right places).
  2. ```multiply(num1, num2)``` &ndash; will multiply two variables and return the result. In the operation history, it will save a statement: "multiplied ```num1``` with ```num2``` got ```result```" (with variables inserted in the right places).  
  3. ```subtract(num1, num2)``` &ndash; will subtract two variables and return the result. In the operation history, it will save a statement: "subtracted ```num1``` from ```num2``` got ```result```" (with variables inserted in the right places).  
  4. ```divide(num1, num2)``` &ndash; will divide two variables and return the result. In the operation history, it will save a statement: "divided ```num1``` by ```num2``` got ```result```" (with variables inserted in the right places).  
  5. ```printOperations()``` &ndash; will write all operations history.
  6. ```clearoperations()``` &ndash; will deletele the entire history of operations.

**Remember to use ```this```.**
