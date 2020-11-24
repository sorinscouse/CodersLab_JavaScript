<img alt="Logo" src="http://coderslab.pl/svg/logo-coderslab.svg" width="400">

# JavaScript &ndash; workshop
## Gallery

Write a simple gallery. Clicking a miniature image should result in opening it in full screen mode.
This will be done by adding a new element when the miniature image is clicked.
The instructions are divided into sections. Remember to follow them strictly and do the work section after section.
Do not forget to commit the finished code!

## Section 1
Read the HTML and CSS code prepared for this task. Usually, an appropriately styled list of images is used as a gallery.
The list usually has the following properties:

1. It has no styles defined.
2. It has width and height suitable for displaying one image.
3. All images have the same width and height.
4. All images are visible.

Add ```gallery``` class in an appropriate place in the HTML code.

## Section 2
Prepare the **app.js** file so you can work in it.
Then, find the following elements and save them in variables:

1. All elements of the list (save them in an array).
2. ```body``` **tag** (we will need it to add an element that will display in full screen).

Display the variables in the console to verify if they contain the right data.

## Section 3
Add an event on mouse click to each image. For now, it can write "Working correctly" in the console.

## Section 4
Modify the event in such a way that it writes the URL address of clicked image in the console. Use ```this```.

## Section 5
Note that at the beginning of **app.js** there is a comment containing HTML code fragment. This is a model of an element that should be added to the page.

Analyze it, then modify the abovementioned event for the images so that the it creates such elements and adds them to the ```body``` **tag**.
Remember to replace the link to the image with real ones.

## Section 6
Clicking a miniature image should result in the display of a bigger version of it along with a button. You must now create an event that will react to the button being clicked. Its aim will be to delete the newly created item from the DOM tree.

## Section 7
Check how your page works. Can you see any problems? If so, describe them.
