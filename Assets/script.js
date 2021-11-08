var generateBtn = document.getElementById('#generate');

//PW Prompt Chain
function startPrompts(){

// Variable Declarations

var upperCaseChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J","K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var lowerCaseChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
            // 0                          10
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
              //  0
var specChars = ["#", "$", "!", "@", "&", "*", "^", "%", "?", "="];
var password = "";
var randomNumber = "";

//Random selctions

//uppers
var randomUpper = Math.floor(Math.random() * upperCaseChars.length)
// var randomNumber = upperCaseChars[randomUpper]
console.log(randomNumber)

//lowers
var randomLower = Math.floor(Math.random() * lowerCaseChars.length)
// var randomNumber = lowerCaseChars[randomLower]
console.log(randomNumber)

//numbers
var randomNumb = Math.floor(Math.random() * numbers.length)
// var randomNumber = numbers[randomNumb]
console.log(randomNumber)

//specChars
var randomSpec = Math.floor(Math.random() * specChars.length)
// var randomNumber = specChars[randomSpec]
console.log(randomNumber)

//length
    var pwLength = prompt("How long of a password?(between 8-128 characters");
    if (pwLength <= 128 && pwLength >= 8){
      console.log(pwLength)
       alert("Sweet " + pwLength + " characters. Just a few more questions.")};
        if (pwLength >= 128 || pwLength <= 8) {
       alert("Password must be between 8 and 128 characters.")};
  
       //Special Characters
    var wantsSpecChar = confirm("Do you want to include special Characters?");
      if (wantsSpecChar === true){
        alert("Okay, we will include Special Characters");
      } else { (wantsSpecChar != true)
        alert("Okay, we wont include special characters but Passwords are more secure with Special Characters.")};
    
       if (wantsSpecChar){
         randomNumber += specChars

         console.log(randomNumber)
       } 
   
  //Uppercase 
    var wantsUppers = confirm("Do you want to include uppercase letters?");
    if (wantsUppers === true){
      alert("Okay, we will include Uppercase letters.");
    } else { (wantsUppers === false)
      alert("Okay, we wont include Uppercase letters, but Passwords are more secure with a combination of Upper and Lowercase characters.")};

      if (wantsUppers){
        randomNumber += upperCaseChars
      } 
  
  //Lowercase
    var wantsLowers = confirm("Do you want to include lowercase letters?");
    if (wantsLowers === true){
      alert("Okay, we will include Lowercase letters.");
    } else {(wantsLowers === false)
      alert("Okay, we wont include Lowercase letters, but Passwords are more secure with a combination of Upper and Lowercase characters.")};

      if (wantsLowers){
        randomNumber +=lowerCaseChars
      } 
    
    
      //Numbers
    var wantsNumbers = confirm("Do you want to include numbers?");
    if (wantsNumbers === true){
      alert("Okay, we will include Numbers.");
    } else {(wantsNumbers === false);
      alert("Okay, we wont include numbers, but Passwords are more secure with a combination of numbers, letters, and special characters.")}

      if (wantsNumbers){
        randomNumber += numbers
      } 

      if (!wantsLowers && !wantsUppers && !wantsSpecChar && !wantsNumbers){
        alert("We need more to work with. Select at least one option and a length between 8-128 characters.")
      }

      
      for ( var i = 0; i < pwLength; i++ ) {
        password += randomNumber[Math.floor(Math.random() * randomNumber.length)];
        
        }
        return password;
        
} 

      
function generatePassword(){
    var password = startPrompts()
    var passwordText = document.getElementById("password")
    passwordText.value = password;  
    
 
}
document.getElementById("generate").addEventListener('click', generatePassword);





    
