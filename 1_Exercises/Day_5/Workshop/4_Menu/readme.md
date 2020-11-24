<img alt="Logo" src="http://coderslab.pl/svg/logo-coderslab.svg" width="400">

# JavaScript &ndash; workshop
# Menu

Write a simple drop down menu. Usually, it is created in a list (where the submenu is in nested lists).
Our menu has two levels (you can easily add more levels in the same way that the first one will be added).

The instructions are divided into sections. Remember to follow them strictly and do the work section after section.
Do not forget to commit the finished code!

## Section 1
Read the HTML and CSS code prepared for this task. The menu will display correctly when you add an appropriate **class** to the appropriate element.  

## Section 2
Prepare the **app.js** file so you can work in it.

Then, find the list elements and save them in variables. Save all the elements of the main list (the visible ones). For now, leave out the elements of nested lists (the hidden ones). Remember to store the elements in an array.

Display the variables in the console to verify if they contain the right data.

## Section 3
Add two events: ```mouseover``` and ```mouseout``` to each list element (stored in a variable). Make them write something in the console to check if the events work correctly.

## Section 4
Modify the events so that they search for a sub-list of the element you have hovered over with the mouse (the nested **ul** element).

## Section 5
Modify the events so that the message from section 3 was displayed only if the sub-list exists (the returned element is not ```null```).

## Section 6
Modify the ```mouseover``` event. Instead of displaying a message in the console, it will display the hidden sub-list. If you do not know how to do it, check the CSS code and find out how the list becomes hidden in the first place - that will give you a hint.

## Section 7
Modify the ```mouseout``` event. Instead of displaying a message in the console, it will hide the sub-list again.

## Section 8
Check how your page works. Can you see any problems? If so, describe them.
