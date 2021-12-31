// Assignment code here

//declaring arrays for characters
var charLowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var charUpperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var charNumeric = ["0","1","2","3","4","5","6","7","8","9"];
var charSpecial = ["@","%","+","/","!","#","$","^","?",":","(",")","}","{","[","]","`","-","_","."];
var alphabetLength = 26;
var numberLength = 10;
var specialLength = 20;

var generatePassword = function(){
  //ask employee legnth of characters they want
  var passwordLength = window.prompt("Please select length of password.  Must be at least 8 characters and no more than 128 characters.  Please write the numerical value of the characters you want.  Ex: 15.");

  passwordLength = parseInt(passwordLength);

  //validate answer is between 8 and 128 charcters
  if (passwordLength >= 8 && passwordLength <= 128){
  window.alert("You have chosen " + passwordLength + " characters.  Proceed");
  } else {
    // if not prompt user and have them enter another value
    window.alert("The number of characters you entered is incorrect.  Please enter again");
    generatePassword();
  }

  // Declare lowercase variable and ask user if they want lowercase characters in password
  // debugger;
  var confirmLowerCase = window.confirm("Would you like to include lowercase characters?");

  if (confirmLowerCase){
    //if  user wants lowercase, set confirmLowerCase to array
    window.alert("Password will include lowercase characters");
    var confirmLowerCase = charLowerCase;
  } else {
    // prompt user that there will be no lowercase characters
    window.alert("Password will not include lowercase characters");
  }
  
  // Declare upperercase variable and ask user if they want uppercase characters in password
  var confirmUpperCase = window.confirm("Would you like to include uppercase characters?")

  if (confirmUpperCase){
    //if  user wants uppercase, set confirmUpperCase to array
    window.alert("Password will include uppercase characters");
    var confirmUpperCase = charUpperCase;
  }else {
    // prompt user that there will be no uppercase characters
    window.alert("Password will not include uppercase characters");
  }

  // Declare numeric variable and ask user if they want numeric characters in password
  var confirmNumeric = window.confirm("Would you like to include numeric characters?")

  if (confirmNumeric){
    //if  user wants numeric, set confirmNumeric to array
    window.alert("Password will include numeric characters");
    var confirmNumeric = charNumeric;
  }else {
    // prompt user that there will be no numeric characters
    window.alert("Password will not include numeric characters");
  }

  // Declare special variable and ask user if they want special characters in password
  var confirmSpecial = window.confirm("Would you like to include special characters? Ex: @, #, $.")

  if (confirmSpecial){
    //if  user wants special, set confirmNSpecial to array
    window.alert("Password will include special characters");
    var confirmSpecial = charSpecial;
  } else {
    // prompt user that there will be no special characters
    window.alert("Password will not include special characters");
  }

  // ask user to confirm if they are content with the criteria
  // var confirmCriteria = window.confirm("Are you satisfied with the criteria you selected?")
  // console.log(confirmCriteria);
  console.log(confirmLowerCase === charLowerCase || confirmUpperCase === charUpperCase || confirmNumeric === charNumeric || confirmSpecial == charSpecial);
  
  if (confirmLowerCase === charLowerCase || confirmUpperCase === charUpperCase || confirmNumeric === charNumeric || confirmSpecial == charSpecial){
    window.alert("Proceed");
    return true;
  } else {
    window.alert("You're password does not meet criteria. Please select again");
    generatePassword();
  }
  // if (confirmCriteria && (confirmLowerCase === charLowerCase || confirmUpperCase === charUpperCase || confirmNumeric === charNumeric || confirmSpecial == charSpecial)){
  //   // 
  //   debugger;
  //   window.alert("Proceed");
  // } else  {
  //   debugger;
  //   window.alert("You're password does not meet criteria. Please select again");
  // } 

  var passw = '';

  var verifyChar = function(){
    
    for(let i = 0; i < passwordLength; i++){
      
      // declare character variable and set it to a random value
      // debugger;
      var character = Math.random();
      // console.log(character);//to be deleted

      if (character > 0.75){
        characterChoice = confirmLowerCase;
        if (charLowerCase === characterChoice){
          x = Math.floor(Math.random()*alphabetLength);
        } else {
          // debugger;
          verifyChar();
        }
      } else if (character < 0.75 && character > 0.5){
        characterChoice = confirmUpperCase;
        if (charUpperCase === characterChoice){
          x = Math.floor(Math.random()*alphabetLength);
        } else {
          // debugger;
          verifyChar();
        }
      } else if (character < 0.5 && character > 0.25){
        characterChoice = confirmNumeric;
        if (charNumeric === characterChoice){
          x = Math.floor(Math.random()*numberLength);
        } else {
          // debugger;
          verifyChar();
        }
      } else{
        characterChoice = confirmSpecial;
        if (charSpecial === characterChoice){
          x = Math.floor(Math.random()*specialLength);
        }else {
          // debugger;
          verifyChar();
        }
      }
        //adds each choice to the array pass
    debugger;
    passw = passw + characterChoice[x];
    console.log(passw);
    }
    return passw;
  }

  verifyChar();

  //joins all the characters of passw to a single string pas
  
  // debugger;
  window.alert("Your new password is: " + passw);

  var charConfirmation = window.confirm("Are you satisfied with your password?");
  switch (charConfirmation){
    case true: 
      window.alert("Thank you!")
      console.log(passwordLength);
      debugger;
      console.log(passw);
      debugger;
      return passw;
      break;
      debugger;    
    case false:
      generatePassword();
      break;
  }
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
