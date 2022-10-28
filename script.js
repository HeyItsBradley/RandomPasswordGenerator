
//These arrays will house the different characters that can be used
var upperCaseArr =['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

var lowerCaseArr =['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

var specialArr =['!', '@', '#', '$', '*', '%'] 

var numberArr =['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']


//These variables will select the users choises
var wantedChar = prompt("How many characters would you like to use? Must be between 8-128 characters")
var lowerCase = confirm('Do you want to use lowercase?');
var upperCase = confirm("Do you want to use uppercase?");
var numerica = confirm('Do you want to use numbers?');
var specialChars = confirm('Do you want to use special characters?')

var wantedChar=[]

//True or false for different passwords types
if (upperCase){
  wantedChar = wantedChar.concat(upperCaseArr);
}
if (lowerCase){
  wantedChar = wantedChar.concat(lowerCaseArr);
}
if (specialChars){
  wantedChar = wantedChar.concat(specialArr);
}
if (numerica){
  wantedChar = wantedChar.concat(numberArr);
}

//Final password randomizer
var finalPass = [];

for (var i=0; i<lengthInput; i++){
  random
}

//Assignment code
var generateBtn = document.querySelector("#generate");
password="hello"
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
