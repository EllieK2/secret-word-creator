console.log('hello')

const generateBtn = document.querySelector('generate');
console.log('generate password')

function generatePassword() {

const lowerCase = ["a", "b","c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; 
const upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]; 
const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const specialCharacters = ["!","#", "$", "%", "&", "'", "(", ")", "*", "+",",", "-", ".","/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "'", "{", "|", "}", "~"];

function questions () {
const isValid = false; 
do {

var length = prompt ("Choose password length between 8 and 128");
var askNumbers = confirm ("Would you like to include numbers in your password?");
var askUpperCase = confirm ("Would you like to include uppercase characters in your password?"); 
var askLowerCase = confirm ("Would you like lowercase characters in your password?");
var askSpecialCharacters = confirm ("Would you like special characters in your password?");

var responses = {
    length: length,
    askNumbers: askNumbers,
    askLowerCase: askLowerCase,
    askUpperCase: askUpperCase, 
    askSpecialCharacters: askSpecialCharacters, 
}





// Write password to the #password input
///function writePassword() {
   /// var password = generatePassword();
    ///var passwordText = document.querySelector('#password');
  
    ///passwordText.value = password;
  ///}
  
  // Add event listener to generate button
  ///generateBtn.addEventListener('click', writePassword);
  
