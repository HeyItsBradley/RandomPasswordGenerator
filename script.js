// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCase = prompt('Do you want to use lowercase?');
var upperCase = prompt("Do you want to use uppercase>");
var numerica = prompt('Do you want to use numbers?');
var specialChars = prompt('Do you want to use special characters?')

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
