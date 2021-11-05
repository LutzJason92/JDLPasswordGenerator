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

// //did user select at least 1 option


// //prompt use to 

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);






//     var userAdjective = prompt("Please provide an Adjective");
//     alert (userAdjective);


function startQuest(){
    var pwLength = prompt("How long of a password?(between 8-128 characters");
    if (pwLength >= 128){
      alert("Password must be less than 128 characters.");
    }
    else if (pwLength <= 8){
      alert("Password must be between greater than 8 characters.");
    }
    else {
      alert("Sweet " + pwLength + " characters. Just a few more questions.");
//Password length      
      console.log(pwLength)
    }
   
    if (confirm("Do you want to include special Characters?")){
//True/False Special Characters      
      console.log(true);
    } else { 
      console.log(false)
    }
    if (confirm("Do you want to include uppercase letters?")){
//True/False uppercase      
      console.log(true);
    } else { 
      console.log(false)
    }
    if (confirm("Do you want to include lowercase letters?")){
//True/False lowercase      
            console.log(true);
          } else { 
            console.log(false)
          }
       
      
      
    
  
  }
  




























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


console.log(getRandomSymbol())
console.log(getRandomUpper())
console.log(getRandomNumber())
console.log(getRandomLower())
