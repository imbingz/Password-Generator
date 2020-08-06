// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  // generateAnother();
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



function generatePassword() {
  // Create a variable that holds users input for password length 
  var userLength = "";
  // Create a while-loop that will keep prompting the users if the users input is not a number between 8 and 128 
  while (isNaN(parseInt(userLength, 10)) || parseInt(userLength, 10) < 8 || parseInt(userLength, 10) > 128) {
    userLength = prompt("Please enter a number as your password length. The number must be between 8 and 128, inclusive.");
  }
  //  Create a variables for each users preference
  var answerNumber = confirm("Would you like numbers in your password?");
  var answerUpper = confirm("Would you like uppercase letters in your password?");
  var answerLower = confirm("Would you like lowercase letters in your password?");
  var answerSymbol = confirm("Would you like symbols in your password?");
  // Create a while loop to prompt the users the same questions if users did not choose any character preference
  while (!answerNumber && !answerUpper && !answerLower && !answerSymbol) {
    console.log("2nd while loop");
    alert("You must choose at least a numer, an uppercase letter, a lowercase letter or a symbol. Please try again!");
    answerNumber = confirm("Would you like numbers in your password?");
    answerUpper = confirm("Would you like uppercase letters in your password?");
    answerLower = confirm("Would you like lowercase letters in your password?");
    answerSymbol = confirm("Would you like symbols in your password?");
  }
  // Create a variable that holds the preference characters
  var allChar = "";
  // If users answer yes to any of these preference, add that preference characters to allChar variable
  if (answerNumber) {
    var number = "0123456789";
    allChar += number;
  }
  if (answerUpper) {
    var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    allChar += uppercase;
  }
  if (answerLower) {
    var lowercase = "abcdefghijklmnopqrstuvwxyz";
    allChar += lowercase;
  }
  if (answerSymbol) {
    var symbol = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';
    allChar += symbol;
  }
  // create a variable that holds the sum of characters selected randomly 
  var passwordChar = "";
  // Create a for-loop to randomly select the char for the same number of times as the password length chosen by user
  for (var i = 0; i < parseInt(userLength); i++) {
  // Create a variable that holds the random number created via random method within allChar
    var char = Math.floor(Math.random() * allChar.length);
  // Add each random character to passwordChar 
    passwordChar += allChar[char]; 
  }
  return passwordChar;
}
