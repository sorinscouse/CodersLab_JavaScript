<img alt="Logo" src="http://coderslab.pl/svg/logo-coderslab.svg" width="400">

# Navigating the DOM tree

> Write the answers in appropriate files unless the instructions tell you otherwise.
Remember to separate exercises with comments, and write legible, well-formatted code.

## Exercises done with the lecturer

### Searching the DOM  (~ 7min - 12min)

Find and save the following elements in variables:
1. Element with ```first``` **class** -> its first child -> its third child.
2. Element with ```second``` **id** -> its parent -> its fourth child.
3. Element with a ```data-ex``` **attribute** set to ```third``` -> its grandparent -> its last child -> its first child -> its middle child (to get the middle element, divide the number of children by two and round down).
4. **Div** with ```forth``` **class** -> its parent -> its first child being the ```article``` tag -> its second child being the ```<p>``` tag.

All those elements have the ```data-answer``` attribute set to the number of corresponding exercise.

### Hiding/displaying elements  (~ 10min - 15min)

There are several buttons in the file (in the form of styled links). After any of those buttons is clicked &ndash; an element that is right underneath it should disappear (if it was visible) or appear (if it was hidden).
Your answer must apply the following guidelines:
1. One event must operate all buttons.
2. The next element must be searched depending on the location of ```this```.
3. The code must work properly and not generate errors (remember to check if the next element does not equal ```null```).

-------------------------------------------------------------------------------

## Exercises to do on your own

### Exercise 1 (~ 10min - 15min)

There are several buttons in the file (in the form of styled links). After any of those buttons is clicked, its parent should change its background color (to a random color).
Your answer must apply the following guidelines:
1. One event must operate all buttons.
2. The parent must be searched depending on the location of ```this```.
3. Background color must be random.

**Hint:**
Use the following code to get a random color:
```JavaScript
var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
```

### Exercise 2 (~ 10min - 15min)

There are three lists in the file (each embedded in a ```div``` element). After hovering over a ```div```, the background colors of elements of its list should change accordingly:
1. The first list element will have a red background.
2. The last list element will have a blue background.
3. The rest of the elements will have a green background.

Your answer must apply the following guidelines:
1. One event must operate all divs.
2. List elements must be searched depending on the location of ```this```.
