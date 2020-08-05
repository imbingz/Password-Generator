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
  validateInput();
  addChar();
  randomPassword();
  return passwordChar;
}

// Create a variable that holds users input for password length 
var userLength = "";
// Create a function to validate the users input 
function validateInput() {
  // Prompt users to choose their passwords length
    prompt("Please enter a number as your password length. The number must be between 8 and 128, inclusive.")
  // Create a while-loop that will keep prompting the users if the users input is not a number between 8 and 128 
    while (isNaN(parseInt(userLength, 10)) || parseInt(userLength, 10) < 8 || parseInt(userLength, 10) > 128) {
    userLength = prompt("Please enter a number as your password length. The number must be between 8 and 128, inclusive.");
  }
}

// Create a variable that will holds the preference characters
var allChar = "";
// Create a function that will collect/add-up all characters of user preference 
function addChar() {
  //  Create a variables for each users preference
  var answerNumber = confirm("Would you like numbers in your password?");
  var answerUpper = confirm("Would you like uppercase letters in your password?");
  var answerLower = confirm("Would you like lowercase letters in your password?");
  var answerSymbol = confirm("Would you like symbols in your password?");
  // If users answer yes to any of these preference, add that preference characters to allChar variable; otherwise, alert users a message and prompt these questions again
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
  
  else {
    alert("You must choose at least a numer, an uppercase letter, a lowercase letter or a symbol. Please try again!");
    addChar();
  }
  return allChar
}

// create a variable that holds the sum of characters selected randomly 
var passwordChar = "";
// Create a function that will generate the password randomly 
function randomPassword() {
  // Create a for-loop to randomly select the char for the same number of times as the password length chosen by user
  for (var i = 0; i < parseInt(userLength); i++) {
  // Create a variable that holds the random number created via random method within allChar
    var char = Math.floor(Math.random() * allChar.length);
  // Add each random char to passwordChar 
    passwordChar += allChar[char]; 
  }
  return passwordChar
}