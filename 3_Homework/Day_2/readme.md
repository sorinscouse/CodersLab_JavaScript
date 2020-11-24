# JavaScript - Homework
> Write the code in appropriate files according to exercise descriptions.

**VERY IMPORTANT - Your homework is checked using an automated system. In order for the answers to be considered correct, the pages MUST display the same messages as in the exercise description, and function and method names MUST be exactly the same as given in the exercises.**

## Day 2

#### Exercise 1

In ```app.js``` create a ```Tree``` function using a constructor. Give it one property: ```type``` that will store the type of the tree.
Now, based on the  Tree constructor create 2-3 instances (objects) that will be different trees.

Add a  ```bloom()``` method to the prototype of the constructor that will return the text: "I am blooming".


#### Exercise 2

> Do exercise 2 in the searchDom.js file


The HTML file for this exercise is **searchDom.html**, and the JS file is **searchDom.js**.

 - Create an appropriate function for each point and name it according to the instructions below.

 * **1. Getting information from the data attribute:**
    - find an element with a ```menu``` **id**,
    - create a ```getDataInfo(element)``` function and pass it the element you found as a parameter,
    - create a new array within the function and fill it with values extracted from the data-info attribute of each **li** element. Note that **li** elements are the children of the element with ```menu``` id,
    - return the new array.

* **2. Searching for element by id:**
    - find an element with a ```main-contener``` **id**.
    - create a ```getElementClass(element)``` function and pass it the found element as a parameter,
    - return an array containing class names of this element.

* **3. Searching for element by class:**
    - find an element with a ```pink-color``` **class**,
    - create a ```getElementText(element)``` function and pass it the found element as a parameter,
    - return the text contained in this element.

* **4. Searching for element by class:**
    - find elements with an ```images``` **class**,
    - create a ```getElementAlt(element)``` function and pass it found elements as a parameter,
    - create an array within the function and fill it with values extracted from the alt property of each image. Get these attributes from the elements passed as parameters.

* **5. Searching for element by class:**
    - find elements with a ```my-link``` **class**,
    - create a ```getElementHref(element)``` function and pass it found elements as a parameter,
    - create an array within the function and fill it with values extracted from the href property of each link. Get these attributes from the elements passed as parameters.
