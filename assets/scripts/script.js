// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  // Create a variable that holds users input for password length 
  var userLength = "";
  // Create a while-loop that will keep prompting the users if the users input is not a number between 8 and 128 
  while (isNaN(parseInt(userLength, 10)) || parseInt(userLength, 10) < 8 || parseInt(userLength, 10) > 128) {
    userLength = prompt("Please enter a number as your password length. The number must be between 8 and 128, inclusive.");

    console.log(userLength);
  }
}

// Create a function that will add all the randomly chosen characters 

function addChar() {
  console.log("addChar is running");
  //  Create variables that will hold users preference for their passwords
  var answerNumber = confirm("Would you like numbers in your password?");
  var answerUpper = confirm("Would you like uppercase letters in your password?");
  var answerLower = confirm("Would you like lowercase letters in your password?");
  var answerSymbol = confirm("Would you like symbols in your password?");

  // Create a variable that will holds the preference characters 
  var allChar = "";
  // If users answer yes to any of these preference, add that preference characters to allChar variable 
  if (answerNumber) {
    var number = "0123456789";
    allChar += number
  }

  if (answerUpper) {
    var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    allChar += uppercase
  }

  if (answerLower) {
    var lowercase = "abcdefghijklmnopqrstuvwxyz";
    allChar += lowercase 
  }

  if (answerSymbol) {
    var symbol = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';
    allChar += symbol
  }
  console.log(allChar);
  console.log(allChar.length);
  return allChar
}

addChar()
