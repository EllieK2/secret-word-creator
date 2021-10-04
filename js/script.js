// Assignment Code
var generateBtn = document.querySelector('#generate');

function generatePassword() {
  console.log ("hello world")

  // Arranged the criteria
const lowercaseArray = ["a", "b","c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; 
const uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]; 
const numberArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
const specialCharacterArray = ["!","#", "$", "%", "&", "'", "(", ")", "*", "+",",", "-", ".","/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "'", "{", "|", "}", "~"]
// Ask the user for the password (gathering an information) // prompt and confirm  
// password length 8< 128
// lowercase, uppercase, numbers, special characters,
const numCharacter = prompt ("How many character numbers would you like between 8 and 128?");
const numbers = confirm ("Would you like numbers in your password?");
const uppercase = confirm ("Would you like uppercase characters in your password?"); 
const lowercase = confirm ("Would you like lowercase characters in your password?");
const characters = confirm ("Would you like special characters in your password?");
 
const generatePassword = function() {
  const userChoice = window.prompt('Enter lowercaseCharacter');
  if (!userChoice)
  return

  const userChoice = window.prompt('Enter uppercaseCharacter');
  if (!userChoice)
  return

  const userChoice = window.prompt('Enter numberCharacter');
  if (!userChoice)
  return

  const userChoice = window.prompt('Enter specialCharacter');
  if (!userChoice)
  return
}
// Get random index from array of options 
const index= Math.floor(Math.random() * PushSubscriptionOptions.length);
const userChoice = options [index];


}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
 