function generatePassword(){

//These arrays will house the different characters that can be used
var upperCaseArr =['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var lowerCaseArr =['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var specialArr =['!', '@', '#', '$', '*', '%'] 
var numberArr =['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
//this var checks is the selected char is within range and if its not return error
var wantedChar = prompt("How many characters would you like to use? Must be between 8-128 characters")
if (wantedChar < 8 || wantedChar >= 128){
  alert('Entered Value must be between 8 and 128!!!')
  return "Error not within accepted character length";
}

//These variables will select the users choises
var lowerCase = confirm('Do you want to use lowercase?');
var upperCase = confirm("Do you want to use uppercase?");
var numerica = confirm('Do you want to use numbers?');
var specialChars = confirm('Do you want to use special characters?')

if(!lowerCase && !upperCase && !numerica && !specialChars){
  alert('You must select OK one atleast of the character types')
  return "Press button and try again"
}
//This will set selected characts to a blank array
var selectedChar =[];

console.log("This is the ammount of characters that the user wants: " + wantedChar);

// //True or false for different passwords types
if (upperCase){
  selectedChar = selectedChar.concat(upperCaseArr);  
}
if (lowerCase){
  selectedChar = selectedChar.concat(lowerCaseArr);  
}
if (specialChars){
  selectedChar = selectedChar.concat(specialArr);
} 
if (numerica){
  selectedChar = selectedChar.concat(numberArr);
}
//After user has selected the types of characters programs, all selected characters will now be concatinated into a single array
//This shows the characts they wanted
console.log("This will show the whole list of avaiable characters depending on user selection: "+ selectedChar)
    

//Final password randomizer

//this sets a var finalPass to an empty array
var finalPass = [];

//    
for (var i=0; i<=wantedChar; i++){
   randomNum = Math.floor(Math.random() * selectedChar.length);
   finalPass = finalPass.concat(selectedChar[randomNum]);
  }
  console.log("final password is: " +finalPass); 

  //Joins array       this makes it so that nothing is seperating the characters
  finalPass = finalPass.join('');
  //this will set the final password to the website
  return finalPass;
}  

//Assignment code
var generateBtn = document.querySelector("#generate");
      
 // Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password"); 
  
  passwordText.value = password;
  }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
