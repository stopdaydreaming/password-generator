// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(){

  //build here: logic, prompts, confirms and temporary password

  return "temporary password";
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
