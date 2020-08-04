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
 
}

// Create a variable that holds users input for password length 
var userLength = "";
// Create a while-loop that will keep prompting the users if the users input is not a number between 8 and 128 
while (isNaN(parseInt(userLength, 10)) || parseInt(userLength, 10) < 8 || parseInt(userLength, 10) > 128) {
  userLength = prompt("Please enter a number as your password length. The number must be between 8 and 128, inclusive.");

  console.log(userLength);
}