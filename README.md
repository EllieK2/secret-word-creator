## secret-word-creator
JavaScript Password Generator Activity 

## Task 
Create a random password based on user-selected criteria
Purpose: to run in a browser and feature dynamically updated HTML and CSS powered by JavaScript code 
Application should adapt to multiple screen sizes 

### Objectives 
use if and if-else statements
difference between equality (==) and strict equality (===) 
use array methods 
explain functions and their usage in JavaScript 
difference between function declaration and function expression 
recognize if the variable is locally or globally scoped 
use key word var to declare a variable 

#### Focus
appropriate file structure 
amended scr attribute on HTML to get the script.js
criteria (prompt, confirm, alert)

Steps

Declare a function generatePassword

Declare const for lowercase                  abcdefghijklmnopqrstuvwxyz
Declare const for uppercase                  ABCDEFGHIJKLMNOPQRSTUVWXYZ
Declare const for numeric                    1234567890
Declare const for specialCharacters         "!"#$%&'()*+,-./:;<=>?@[]^_`{|}~"

Choose password length? (prompt)
User can choose length >= 8 and less than 128 (what type of data is stored here)
check if you can convert the text from user to integer
validate if in range else display an alert message and break


Do you want to include lowercase characters? (confirm) What type of data will this store
User can select Yes or No (true/false)
no validation here

Do you want to include uppercase characters? (confirm)
User can select Yes or No (true/false)
no validation here

Do you want to include numeric characters? (confirm)
User can select Yes or No (true/false)
no validation here


Do you want to include special characters? (confirm)
User can select Yes or No (true/false)
no validation here


Before proceeding check if all at least one confirm is YES
validate if all false then display alert message and break

