// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
//create generatePassword function

//prompt user for legnth
//error handling 

// errror handeling - did they gen a valid number

//prompt user for legnth
//promt to confirm all characterslection

//did user select at least 1 option


//prompt use to 

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
