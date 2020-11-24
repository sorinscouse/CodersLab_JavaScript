<img alt="Logo" src="http://coderslab.pl/svg/logo-coderslab.svg" width="400">

# Inputs and Forms

> Write the answers in appropriate files unless the instructions tell you otherwise.
Remember to separate exercises with comments, and write legible, well-formatted code.

## Exercise done with the lecturer

### Form validation  (~ 10min - 15min)

Remember! In this exercise, the text in ```error-message``` and ```success-message``` must be the exactly same as in the instruction.

There is a form on the page that links to the following address: ```http://api.coderslab.pl/showpost.php```.
Validate the form so that it can be submitted only if the following conditions are met:

1. Email contains a @ sign.
    - If the condition is not met, show **Email must contain the @ sign** in the ```error-message``` field,
2. Name is longer than 6 characters.
    - If the condition is not met, show **Your name is too short** in the ```error-message```field,
3. Surname is longer than 6 characters.
    - If the condition is not met, show **Your surname is too short** in the ```error-message``` field,
4. Password and repeated password are the same and neither of the fields is empty.
    - If the condition is not met, show **Passwords do not match or are empty** in the ```error-message``` field,
5. Checkbox must be checked.
    - If the condition is not met, show **You must accept the terms** in the ```error-message``` field.

Note how the data are presented on the final page (how their names are correlated with the HTML code). Try to change the ```name``` attributes and see how the sent data change (for example, check what happens if two inputs have the same name).
This is very important as this is the way the application communicates with back-end.

-------------------------------------------------------------------------------

## Exercises to do on your own

### Exercise 1 (~ 5min - 10min)

There is an order form on the page with a section related to invoice.
Write JavaScript code that will make that section visible only when the checkbox labeled "Send me an invoice" is checked.

### Exercise 2 (~ 10min - 15min)

There is a select element on the page along with three images.
Each of the images is connected to one choice in the select. Write JavaScript code that makes only the one selected image visible.

### Exercise 3  (~ 20min - 25min)

There is a table with results of local football championships on the page.
Below, you can see a form filled and submitted by coaches after each match.
Write JavaScript code that will validate the form after appropriate teams are selected. Check if:
1. Two different teams are selected,
2. The number of scored goals is not a negative number.

If the form is valid, information about the score of the match should appear in the table as the next table row.

### Exercise 4 (~ 20min - 25min)
Credit card validation.

In this exercise you will validate credit card numbers typed into the form on the page in real time (after each digit is typed).
The name of the card should be placed in an element with ```type``` id. If validity of the card can be verified, it should be shown after an appropriate number of numeric characters is typed (you can make the input border green etc.).

##### How to recognize card type:
1. Visa numbers start with 4.
1. Mastercard numbers start with 5.
1. American Express numbers start with 3. The next digit must be either 4 or 7.

##### Card validation rules:
1. Visa numbers are 13 up to 16 digits long.
1. Mastercard numbers are exactly 16 digits long.
1. American Express numbers are exactly 15 digits long.

Card validation rules were simplified for the purpose of this exercise (you should not use them in your real projects).
If you want to know the real principles of credit card validation, you can read about it here:
https://en.wikipedia.org/wiki/Bank_card_number
https://en.wikipedia.org/wiki/Luhn_algorithm
