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

// user click
// writePassword ()
// criteria 
  // lenth 8-128 | num | uppercase, lowercase letters | sympols

// prompt("") - for the length - it is a string, needs to convert back to number - make sure they enter actually numbers not string or cancel- NaN  - .isNaN( ) | confirm ( ) - for boolean answer
//  condition check with while loop for validated answer (if not in the criteria, keep prompting)
// gnerate random numbers for the length of the password chosen by the user