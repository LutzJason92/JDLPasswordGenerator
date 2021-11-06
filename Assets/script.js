
// // Variable Declarations
// var upperCaseChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J","K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// var lowerCaseChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//             // 0                          10
// var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
//               //  0
// var specChars = ["#", "$", "!", "@", "&", "*", "^", 
//         //  10
// "%", "?", "="];
// var password = " ";
// var randomNumber = " ";

// //Random selctions
// //uppers
// var randomUpper = Math.floor(Math.random() * upperCaseChars.length)
// var randomNumber = upperCaseChars[randomUpper]
// console.log(randomNumber)

// //lowers
// var randomLower = Math.floor(Math.random() * lowerCaseChars.length)
// var randomNumber = lowerCaseChars[randomLower]
// console.log(randomNumber)

// //numbers
// var randomNumb = Math.floor(Math.random() * numbers.length)
// var randomNumber = numbers[randomNumb]
// console.log(randomNumber)

// //specChars
// var randomSpec = Math.floor(Math.random() * specChars.length)
// var randomNumber = specChars[randomSpec]
// console.log(randomNumber)

// var randomArray = [

//    randomLower , +  //0
//    randomNumb , +   //1
//    randomNumb , +   //2
//    randomSpec ];    //3

//    console.log(randomArray)







//PW Prompt Chain
function startPrompts(){


// Variable Declarations
var upperCaseChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J","K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var lowerCaseChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
            // 0                          10
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
              //  0
var specChars = ["#", "$", "!", "@", "&", "*", "^", 
        //  10
"%", "?", "="];
var password = " ";
var randomNumber = " ";

//Random selctions
//uppers
var randomUpper = Math.floor(Math.random() * upperCaseChars.length)
var randomNumber = upperCaseChars[randomUpper]
console.log(randomNumber)

//lowers
var randomLower = Math.floor(Math.random() * lowerCaseChars.length)
var randomNumber = lowerCaseChars[randomLower]
console.log(randomNumber)

//numbers
var randomNumb = Math.floor(Math.random() * numbers.length)
var randomNumber = numbers[randomNumb]
console.log(randomNumber)

//specChars
var randomSpec = Math.floor(Math.random() * specChars.length)
var randomNumber = specChars[randomSpec]
console.log(randomNumber)

//length
    var pwLength = prompt("How long of a password?(between 8-128 characters");
    if (pwLength <= 128 && pwLength >= 8){
      console.log(pwLength)
       alert("Sweet " + pwLength + " characters. Just a few more questions.")};
        if (pwLength >= 128 || pwLength <= 8) {
       alert("Password must be between 8 and 128 characters.")}
       
       ;
        
    
  
      //Special Characters
    var wantsSpecChar = confirm("Do you want to include special Characters?");
      if (wantsSpecChar === true){
        alert("Okay, we will include Special Characters");
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
    } else {(wantsNumbers === false);
      alert("Okay, we wont include numbers, but Passwords are more secure with a combination of numbers, letters, and special characters.")}
      
      
      for ( var i = 0; i < pwLength; i++ ) {
        password += randomNumber[Math.floor(Math.random() * randomNumber.length)];
      
        console.log(password)
      }
      
      }
      
function generatePassword(){
    var password = startPrompts()
    var passwordText = document.getElementById("#password");  
    passwordText.value = password;

}
document.getElementById("generate").addEventListener('click', startPrompts);
// }
// console.log(passwordChoices)






    
