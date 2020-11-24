<img alt="Logo" src="http://coderslab.pl/svg/logo-coderslab.svg" width="400">

# JavaScript &ndash; workshop
# Slider

## The Task
Your task is to create a simple slider. The instructions are divided into sections. Remember to follow them strictly and do the work section after section. Do not forget to commit the finished code!

### Section 1
Read the HTML and CSS code prepared for this task. Usually, an appropriately styled list of images is used as a slider.
The list usually has the following properties:

1. It has no styles defined.
2. It has width and height suitable for displaying one image.
3. All images have the same width and height.
4. All images but one are not visible.

Add ```slider``` class in an appropriate place in the HTML code.

### Section 2
Prepare the **app.js** file so you can work in it.
Then, find the following elements and save them in variables:

1. ```next``` button.
2. ```prev``` button.
3. All elements of the list (save them in an array).

Add a numeric variable that will represent the index of the currently visible image (at the beginning, it will be the first image &ndash; the variable will show **0** index).

Display the variables in the console to verify if they contain the right data.

### Section 3
After adding the ```slider``` class, all our images disappeared. Add ```visible``` class to the zero element of the list. Use appropriate variables:
* an array with elements of the list,
* a variable that determines the visible element.
When entering the page, the first image should be visible to the user.

### Section 4
Add events on mouse click to buttons. At first, they will only write information about mouse click in the console.

### Section 5
Do the following in the event responsible for displaying the next image:

1. Delete ```visible``` class in the currently visible image.
2. Increase value of the variable that contains currently visible image index by one.
3. Add ```visible``` class to the image that should become visible at this time.
Use appropriate variables (array with list elements, and the variable that determines the visible element).

## Section 6
Follow the steps from section 5 to configure the event responsible for displaying the previous image.

## Section 7
Check how your page works. Can you see any problems related to the slider? If so, describe them.

## Section 8
Doing the previous section, you should notice that multiple use of either prev or next button makes the images completely disappear from the page. This is caused by the variable that determines the index of visible image at some point takes an incorrect value (less than zero or more than the number of elements in our table).
How can we fix this? Add an **if** in the events that will check if the index is within its scope. If not, the application should the correct value:
* for a negative number -> the last element,
* for a number that is equal to or greater than the number of elements -> **0**.
