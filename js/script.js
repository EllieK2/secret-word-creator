// Assignment Code
var generateBtn = document.querySelector('#generate');

function generatePassword() {
  // PLEASE ADD ALL YOUR CODE HERE
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
 