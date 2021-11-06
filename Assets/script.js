
// Variable Declarations
var upperCaseChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J","K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var lowerCaseChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
            // 0                          10
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
              //  0
var specChars = ["#", "$", "!", "@", "&", "*", "^", 
        //  10
"%", "?", "="];

//Random selctions
//uppers
var randomUpper = Math.floor(Math.random() * upperCaseChars.length)
var randomUppChoice = upperCaseChars[randomUpper]
console.log(randomUppChoice)

//lowers
var randomLower = Math.floor(Math.random() * lowerCaseChars.length)
var randomLowChoice = lowerCaseChars[randomLower]
console.log(randomLowChoice)

//numbers
var randomNumb = Math.floor(Math.random() * numbers.length)
var randomNumChoice = numbers[randomNumb]
console.log(randomNumChoice)

//specChars
var randomSpec = Math.floor(Math.random() * specChars.length)
var randomSpecChoice = specChars[randomSpec]
console.log(randomSpecChoice)

var randomGenerated = [
    "randomUppChoice", + "randomLowChoice", + "randomNumChoice", + "randomSpecChoice" ];

console.log(randomGenerated)

//PW Prompt Chain
function startPrompts(){
  //length
    var pwLength = prompt("How long of a password?(between 8-128 characters");
    if (pwLength >= 128){
      alert("Password must be less than 128 characters.");
    } else if (pwLength <= 8){
      alert("Password must be between greater than 8 characters.");
    } else { 
      alert("Sweet " + pwLength + " characters. Just a few more questions.")};  
    
  
      //Special Characters
    var wantsSpecChar = confirm("Do you want to include special Characters?");
      if (wantsSpecChar === true){
        alert("Okay, we'll include Special Characters");
      } else { (wantsSpecChar != true)
        alert("Okay, we wont include special characters but Passwords are more secure with Special Characters.")};
        
   
        //Uppercase 
    var wantsUppers = confirm("Do you want to include uppercase letters?");
    if (wantsUppers === true){
      alert("Okay, we will include Uppercase letters.");
    } else { (wantsUppers === false)
      alert("Okay, we wont include Uppercase letters, but Passwords are more secure with a combination of Upper and Lowercase characters.")};
  
  
      //Lowercase
    var wantsLowers = confirm("Do you want to include lowercase letters?");
    if (wantsLowers === true){
      alert("Okay, we will include Lowercase letters.");
    } else {(wantsLowers === false)
      alert("Okay, we wont include Lowercase letters, but Passwords are more secure with a combination of Upper and Lowercase characters.")};
    
    
      //Numbers
    var wantsNumbers = confirm("Do you want to include numbers?");
    if (wantsNumbers === true){
      alert("Okay, we will include Numbers.");
    } else {(wantsNumbers === false)
      alert("Okay, we wont include numbers, but Passwords are more secure with a combination of numbers, letters, and special characters.")}

    }

