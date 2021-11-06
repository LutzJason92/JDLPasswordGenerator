// // Assignment Code
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;
// }
// //create generatePassword function

// //prompt user for legnth
// //error handling 

// // errror handeling - did they gen a valid number

// //prompt user for legnth
// //promt to confirm all characterslection

//need a way to pull characters from data structure.
                  //   0    1     2
var upperCaseChars = ["A", "M", "Q"];
var lowerCaseChars = ["s", "y", "r"]
var numbers = [2, 4, 6]
var specChars = ["#", "$", "&"]
// How do i randomly choose these characters from arrays
// Grab value via index 
// how do i use math.random to choose random value
var randomNumb = Math.floor(Math.random() * upperCaseChars.length)
var randomChoice = upperCaseChars[randomNumb]
console.log(randomChoice)

var pwGenerated = []
 // push items to array method
 // concat array variables
// for loop for password elements

//length of array vai .length
//var randomNumb = Math.random[length - 1]



//PW Prompt Chain
function startQuest(){
    var pwLength = prompt("How long of a password?(between 8-128 characters");
    if (pwLength >= 128){
      alert("Password must be less than 128 characters.");
      return null
    }
    else if (pwLength <= 8){
      alert("Password must be between greater than 8 characters.");
    }
    else {
      alert("Sweet " + pwLength + " characters. Just a few more questions.")};

    var wantsSpecChar = confirm("Do you want to include special Characters?"); 

    var wantsUppers = confirm("Do you want to include uppercase letters?");
//True/False uppercase
      
    var wantsLowers = confirm("Do you want to include lowercase letters?");
//True/False lowercase    
        

        //!!!!!!end of prompts!!!!!!!
      }
var userOptions = {
  needsSpecChar: wantsSpecChar,
  needsUpperChars: wantsUppers,
  needsLowerChars: wantsLowers
      }



console.log(userOptions)






//value Generating Functions  
  function getRandomLower(){
  return String.fromCharCode(Math.floor(Math.random() * 26)+97);
}

function getRandomUpper(){
  return String.fromCharCode(Math.floor(Math.random() * 26)+65);
}

function getRandomNumber(){
  return String.fromCharCode(Math.floor(Math.random() * 10)+48);
}

function getRandomSymbol(){
  var symbols = "!'#$%&()*+-.<>/";
  return symbols[Math.floor(Math.random() * symbols.length)];
}

 
// //index1
// console.log(getRandomSymbol())
// //index2
// console.log(getRandomUpper())
// //index3
// console.log(randomLower)
// //index4
// console.log(getRandomLower())
