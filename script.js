// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  // var password = generatePassword();
  var passwordText = document.querySelector('#password');
  passwordText.value = password;

  // var passwordText = document.querySelector("#password");

  // passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var characters = {
  "upperCase": ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
  "lowerCase": ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  "num": ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  "symbol": ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?", "~"]
}

var userLength;
var confirmUpper = false;
var confirmLower = false;
var confirmNum = false;
var confirmSymbol = false;

function generatePassword() {
  userLength = parseInt(prompt('How many length of characters for the password? Type number:'))
let password = '';
  for (let i = 0; i < userLength; i ++) {
    let rand = Math.floor(Math.random()* choices.length);
    password += choices[rand];
  };
  return password;
}


// var confirmUpper = confirm('Do you want uppercase letters in you password?');
// var confirmLower = confirm('Do you want lowercase letters in your password?');
// var confirmNum = confirm('Do you want a number in your password?');
// var confirmSymbol = confirm('Do you want a symbol in your password?');

while (confirmUpper === false && confirmLower === false && confirmNum === false && confirmSymbol === false) {
  alert('You must select at least one character type');
  confirmUpper = confirm('Do you want uppercase letters in you password?');
  confirmLower = confirm('Do you want lowercase letters in your password?');
  confirmNum = confirm('Do you want a number in your password?');
  confirmSymbol = confirm('Do you want a symbol in your password?');

}

var choices = [];


if (confirmUpper === true) {
  choices = choices.concat(characters.upperCase);
}

if (confirmLower === true) {
  choices = choices.concat(characters.lowerCase);
}

if (confirmNum === true) {
  choices = choices.concat(characters.num);
}
if (confirmSymbol === true) {
  choices = choices.concat(characters.symbol);
}


// var randomPassword = '';