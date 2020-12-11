// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page

// Assignment Code
var generateBtn = document.querySelector("#generate");
// copy password to clipboard 
var copyPswd = document.getElementById("copy-pswd");
copyPswd.style.display = "none";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
  copyPswd.style.display = "block";
}

function generatePassword(){

  //build here: logic, prompts, confirms and temporary password
  var generatePassword = "";

  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericChars = "0123456789";
  var specialChars = "!@#$%^&*()+={}[]?<>";

  var reqCharString = "";

  var passwordLength = prompt("how any characters would you like in your password? must be between 8-128 characters?");

  while(passwordLength < 8 || passwordLength >128) {
    passwordLength = prompt("the password must be between 8-128 characters");
  }

  // confirm lowercase
  var includeLowerCase = confirm("do you want to include lowercase characters?");
  if(includeLowerCase){
    reqCharString = reqCharString.concat(lowerCase);
  }

  // confirm uppercase
  var includeUpperCase = confirm("do you want to include uppercase characters?");
  if(includeUpperCase){
    reqCharString = reqCharString.concat(upperCase);
  }

  // confirm number
  var includeNumeric = confirm("do you want to include numeric characters?");
  if(includeNumeric){
    reqCharString = reqCharString.concat(numericChars);
  }

    // confirm special characters
    var includeSpecialChars = confirm("do you want to include special chars characters?");
    if(includeSpecialChars){
      reqCharString = reqCharString.concat(specialChars);
    }

  for(var i = 0; i < passwordLength; i++){
    var rand = Math.floor(Math.random() * reqCharString.length);
    generatePassword = generatePassword.concat(reqCharString.charAt(rand));

  }
  return generatePassword;
}

function copyPassword(){
  password.select();
  document.execCommand("Copy");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

copyPswd.addEventListener("click", copyPassword);