const lowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const upperCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const specialCharacters = [
  "!",
  "#",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "[",
  "]",
  "^",
  "_",
  "'",
  "{",
  "|",
  "}",
  "~",
];

const generateBtn = document.querySelector("#generate");
console.log("generate password");

function generatePassword() {
  const passwordOptions = acceptanceCriteria();
  console.log(passwordOptions);

  const passwordCollection = []; 

  const password = [];

  if (!passwordOptions.askNumbers && !passwordOptions.askUpperCases && !passwordOptions.askLowerCases && !passwordOptions.askSpecialCharacters) {
    alert("Please select one of the options")
    
    return; 
  }
  if (passwordOptions.askNumbers) {
    passwordCollection.push (...numbers)
  }

  if (passwordOptions.askUpperCases) {
    passwordCollection.push (...upperCase)
  }

  if (passwordOptions.askLowerCase) {
    passwordCollection.push (...lowerCase)
  }

  if (passwordOptions.askSpecialCharacters) {
    passwordCollection.push (...specialCharacters)
  }
  console.log(passwordCollection)

  for (let i = 0; i < passwordOptions.length; i++) {
    const value = randomIndex (passwordCollection)
    password.push (value)
  }
  console.log(password)
   return password.join ("") 
}

  function randomIndex (arr) {
    const index = Math.floor(Math.random () *arr.length) 
    return arr [index]
  }

// function to define criteria selected for the password
function acceptanceCriteria() {
  const passwordOptions = {};
  const length = getPasswordLength();
  if (length < 8 || length > 128 || !length) {
    alert("Choose password length between 8 and 128");

    return;
  } else {
    const askNumbers = getNumbers();
    const askUpperCase = getUpperCase();
    const askLowerCase = getLowerCase();
    const askSpecialCharacters = getSpecialCharacters();
    passwordOptions.length = length;

    passwordOptions.askNumbers = askNumbers;

    passwordOptions.askUpperCases = askUpperCase;

    passwordOptions.askLowerCase = askLowerCase;

    passwordOptions.askSpecialCharacters = askSpecialCharacters;

    return passwordOptions;
  }
}

//function to define a password length
function getPasswordLength() {
  const length = parseInt (prompt("Choose password length between 8 and 128"))
  return length;
}

function getNumbers() {
  const askNumbers = confirm(
    "Would you like to include numbers in your password?"
  );
  return askNumbers;
}

function getUpperCase() {
  const askUpperCase = confirm(
    "Would you like to include uppercase characters in your password?"
  );
  return askUpperCase;
}

function getLowerCase() {
  const askLowerCase = confirm(
    "Would you like lowercase characters in your password?"
  );
  return askLowerCase;
}

function getSpecialCharacters() {
  const askSpecialCharacters = confirm(
    "Would you like special characters in your password?"
  );
  return askSpecialCharacters;
}

// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
