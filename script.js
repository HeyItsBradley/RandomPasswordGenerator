//When the button is clicked, this function will run
function generatePassword() {
  //these arrays will house the available characters in different arrays
  upperCaseArray = [
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
  lowerCaseArray = [
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
  numbersArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  specialCharArray = ["!", "@", "#", "$", "*", "%"];
  //this prompt will the teh value of the number the user enters

  var usersWantedCharAmmount = prompt(
    "How long would you like the password to be?(Must be between 8 and 128 characters"
  );
  console.log(
    "The user wants their pass word to be this length: " +
      usersWantedCharAmmount
  );
  //if the user does not enter a valid number, they will be alereted and the function will end.
  if (usersWantedCharAmmount < 8 || usersWantedCharAmmount > 128) {
    alert(
      "entered value is not permited, please press the button to try again!"
    );
    return;
  }
  //if we get throught the first question, it will then ask 4 more questions that will store true or false values for what type of characters the user would like to use
  var wantsUpperCase = confirm("Would you like to use upper case characters?");
  var wantsLowerCase = confirm("Would you like to use lower case characters?");
  var wantsNumbers = confirm("Would you like to use Numbers?");
  var wantsSpecialChars = confirm("Would you like to use special characters?");
  //if the user selected false for all of these then they will be alerted and the entire function will end
  if (
    !wantsUpperCase &&
    !wantsLowerCase &&
    !wantsNumbers &&
    !wantsSpecialChars
  ) {
    alert(
      "You must pick atleast one form of chractres, please press the button and try again!"
    );
    return;
  }
  //If we get past that we will make an empty array that will later store all the possible characters that the user selects to be True
  usersSelectedChars = [];
  //Then if the previous confirms are true, the character arrays will be added toe the usersSelectedChars array that we just made.

  if (wantsUpperCase) {
    usersSelectedChars = usersSelectedChars.concat(upperCaseArray);
  }
  if (wantsLowerCase) {
    usersSelectedChars = usersSelectedChars.concat(lowerCaseArray);
  }
  if (wantsNumbers) {
    usersSelectedChars = usersSelectedChars.concat(numbersArray);
  }
  if (wantsSpecialChars) {
    usersSelectedChars = usersSelectedChars.concat(specialCharArray);
  }
  //one we finish adding all the characters to the usersSelectedChar, the array will contain all possible characters that the user selected
  console.log(usersSelectedChars);
  //then we make another empty array that will eventually contain our final password
  var finalPass = [];
  //we make a foor loop that will itterate for as many time untill it reached the users desired password length
  //inside the loop we make a new var that picks a random number based on the length of the users selected character array

  for (i = 0; i < usersWantedCharAmmount; i++) {
    var randomChar = Math.floor(Math.random() * usersSelectedChars.length);
    finalPass = finalPass.concat(usersSelectedChars[randomChar]);
  }
  //this makes the final pass have nothing inbetween characters and make it one string
  finalPass = finalPass.join("");
  
  //this will end the function and the final value of the function will be the Password
  return(finalPass);
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
