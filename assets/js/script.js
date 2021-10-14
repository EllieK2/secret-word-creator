const lowerCase = ["a", "b","c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; 
const upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]; 
const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const specialCharacters = ["!","#", "$", "%", "&", "'", "(", ")", "*", "+",",", "-", ".","/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "'", "{", "|", "}", "~"];

//define variables
///const numberSelection = false; 
///const upperSelection = false; 
///const lowerSelection = false; 
///const specialCharacterSelection = false; 

const generateBtn = document.querySelector('#generate');
console.log('generate password'); 

function  generatePassword() {

const length = getPasswordLength ()
const askNumbers = confirm ("Would you like to include numbers in your password?");
const askUpperCase = confirm ("Would you like to include uppercase characters in your password?"); 
const askLowerCase = confirm ("Would you like lowercase characters in your password?");
const askSpecialCharacters = confirm ("Would you like special characters in your password?");

}
// function to define criteria selected for the password
function acceptanceCriteria () {

const passwordOptions = {}
const length = getPasswordLength ()
const askNumbers = confirm ("Would you like to include numbers in your password?");
const askUpperCase = confirm ("Would you like to include uppercase characters in your password?"); 
const askLowerCase = confirm ("Would you like lowercase characters in your password?");
const askSpecialCharacters = confirm ("Would you like special characters in your password?");
passwordOptions.length = length 
return passwordOptions 
};

//function to define a password length  
function getPasswordLength () {
  const length = prompt ("Choose password length between 8 and 128");
  return length; 
  
};

////broken code I dont seem to get this working from that point 

//define character types to use for the password 
//if (confirmLength) {
//if (confirm ("Would you like to include numbers in your password?") === true) {
 // numberCase = true
 // }

//if (confirm ("Would you like to include uppercase characters in your password?") === true) {
 // upperCase = true
//}

//if (confirm ("Would you like lowercase characters in your password?") === true) {
 // lowerCase = true
//}
//if (confirm ("Would you like special characters in your password?") === true) { 
 // specialCharacterSelectionCase = true 
//}

// Write password to the #password input
function writePassword() {
var password = generatePassword();
var passwordText = document.querySelector('#password');
  
passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);