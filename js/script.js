// Assignment Code
var generateBtn = document.querySelector('#generate');

function generatePassword() {
  console.log("hej click on the button")
  // PLEASE ADD ALL YOUR CODE HERE

var lowercaseArray = ["a", "b","c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; 
var uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]; 
var numberArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
var specialCharacterArray = ["!","#", "$", "%", "&", "'", "(", ")", "*", "+",",", "-", ".","/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "'", "{", "|", "}", "~"]
// Ask the user for the password (gathering an information) 

// Generate a password (taking the information gathered and using it to generate a password)

// Return (generated password)
return "Generated password will go here"
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
 