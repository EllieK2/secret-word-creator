// Assignment Code
var generateBtn = document.querySelector('#generate');

function generatePassword() {
  console.log ("hello world")

  // Arranged the criteria
var lowercaseArray = ["a", "b","c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; 
var uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]; 
var numberArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
var specialCharacterArray = ["!","#", "$", "%", "&", "'", "(", ")", "*", "+",",", "-", ".","/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "'", "{", "|", "}", "~"]
// Ask the user for the password (gathering an information) // prompt and confirm  
// password length 8< 128
// lowercase, uppercase, numbers, special characters,
var numCharacter = prompt ("How many number of characters you would like between 8 and 128?")
var numbers = confirm ("Would you like numbers in your password?")
var uppercase = confirm ("Would you like Uppercase characters in your password?") 
var lowercase = confirm ("Would you like Lowercase characters in your password")
var characters = confirm ("Would you like special characters in your password?")
return 
// Generate a password (use loop) 

// Return (generated password based on criteria)

// Display the password on the page

}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
 