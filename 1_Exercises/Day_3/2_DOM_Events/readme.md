<img alt="Logo" src="http://coderslab.pl/svg/logo-coderslab.svg" width="400">

# Events

> Write the answers in appropriate files unless the instructions tell you otherwise.
Remember to separate exercises with comments, and write legible, well-formatted code.

## Exercise done with the lecturer

### Events  (~ 7min - 12min)
Run the exerciseLecturer.html page. There are two elements on the page with the classes ```parent``` and ```children```.
Create an event that will show the ```children``` element after hovering over the ```parent``` element. Note that display: none is set for the ```children``` element in CSS.
Create a second event that will hide the ```children``` element back after the mouse is moved away from the elements.
Remember to not hide all the elements at once.

### Events, this, passing the parameters  (~ 7min - 12min)
Modify the previous exercise so that the ```children``` element is hidden with the use of ```hideChildrenElement()``` function. Use your knowledge about ```this```.

Create a function inside the event function. Use the construction below:

```JavaScript
parent.addEventListener("eventName", function() {

    function hideChildrenElement(){

    }
})
```
-------------------------------------------------------------------------------

## Exercises to do on your own

### Exercise 1 (~ 10min - 15min)

Run the page prepared for exercise 1. In the console, check it for errors. Then:
  1. Move the ```<script>``` tag to the ```<head>``` section. Check what has changed in the way the script works. Try to explain it.
  2. Create a ```DOMContentLoaded``` event for the ```document```  element and move the code inside this event. Did it improve the situation?
  3. Again, move the ```<script>``` tag to the end of the file &ndash; is there any difference?
Write your observations in ```js/exercise01.js```.

### Exercise 2 (~ 5min - 7min)

Run the page prepared for exercise 2. There is a button on the page. Link an event to it so that after it is clicked, the console will show the message: "Hurray! It works!".

### Exercise 3 (~ 5min - 10min)

Run the page prepared for exercise 3. There are three buttons and three counters on the page (```span``` elements with ```counter``` class). Write an event for each button so that clicking it will increase the value of the assigned counter by one.

### Exercise 4  (~ 5min - 10min)

Run the page prepared for exercise 4. There are three buttons and one counter on the page. Write one event for all buttons that will increase the value of the counter by one if any of the buttons is clicked.

### Exercise 5  (~ 10min - 15min)

Run the page prepared for exercise 5. There are three```div``` elements on the page. Write **one** event for all of them that will change the background color only in the clicked **div**. Use the keyword ```this```.

**Hint**:
Use the following code to obtain a random color:
```JavaScript
var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
```

### Exercise 6  (~ 10min - 15min)

Run the page prepared for exercise 6. There is one **div** element on the page. Write an event for it that will display the position of the mouse cursor when it is above that element.
Show both global cursor position (the distance from the upper left corner of the window) and local position (the distance from the upper left corner of the element).

### Exercise 7  (~ 10min - 15min)

Run the page prepared for exercise 7. There are nested elements on the page with events written for each of them. Use the ```stopPropagation``` and ```stopImmediatePropagation```methods in a way that:
  1. Events for the first and second element are fired, but the event for the third one is NOT fired.
  2. All events for the fourth element are fired along with the first event for the fifth element.

### Exercise 8 (~ 10min - 15min)

Run the page prepared for exercise 8.
There are two elements on the page that show the size of the window. Write an event for the ```window``` that will make the elements show correct values, even after the window is rescaled.

### Exercise 9 (10 - 15min)

Run the page prepared for exercise 9. Inspect the code and read the comments.
Concentrate on each line of the code. Consider the following situation:
You need to use the element with ```b``` id inside the ```innerFuncOne``` function in order to change its color.
How will you do it? Place your answer in a comment.
