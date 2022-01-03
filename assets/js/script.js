// Assignment code here

//declaring arrays for characters
var charLowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var charUpperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var charNumeric = ["0","1","2","3","4","5","6","7","8","9"];
var charSpecial = ["@","%","+","/","!","#","$","^","?",":","(",")","}","{","[","]","`","-","_","."];
// declaring variables for number of characters in each array
var alphabetLength = 26; //for both uppercase and lowercase
var numberLength = 10;
var specialLength = 20;

var generatePassword = function(){
  //ask employee legnth of characters they want
  var passwordLength = window.prompt("Please select length of password.  Must be at least 8 characters and no more than 128 characters.  Please write the numerical value of the characters you want.  Ex: 15");

  // Converting string to integer
  passwordLength = parseInt(passwordLength);

  //validate answer is between 8 and 128 charcters
  if (passwordLength >= 8 && passwordLength <= 128){
    //shows user the amount of characters they chose
  window.alert("You have chosen " + passwordLength + " characters.  Proceed");
  } else {
    // if not prompt user and have make them click generate button again
    window.alert("The number of characters you entered is incorrect.  Please click 'Generate Password' button again.");
    return; 
  }

  // Declare lowercase variable and ask user if they want lowercase characters in password
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

  //confirms that at least one character type has been chosen by verifying that the confirmation equals the array/
  if (confirmLowerCase === charLowerCase || confirmUpperCase === charUpperCase || confirmNumeric === charNumeric || confirmSpecial == charSpecial){
    window.alert("Proceed");
  } else {
    //if there are no character types than the user will be returned to the generate password button
    window.alert("You have not chosen any character types. Please click 'Generate Password' button again");
    return;
  }

  // creates empty array for password
  var formingPassword = [];

  //for loop that goes randomizes password indexes for the length of the password
  for(let i = 0; i < passwordLength; i++){
    // declaring verifyChar() function  
    var verifyChar = function(){

      // declaring the variable character to a random number between 0 and 1
        var character = Math.random();
      
        //if character is greater than 0.75, set the character choice equal to the array declared in the confirmation
        if (character > 0.75){
          characterChoice = confirmLowerCase;
          //determines if the characterChoice variable is null or the same as the array charLowerCase declared in the beginning
          if (charLowerCase === characterChoice){
            //multiples math random by number of alphabet and sets it equal to x
            x = Math.floor(Math.random()*alphabetLength);
          } else {
            //they are not equal so it runs function again to find something that will be equal
            verifyChar();
          }
          //if character is less than 0.75 and greater than 0.5, set the character choice equal to the array declared in the confirmation
        } else if (character < 0.75 && character > 0.5){
          characterChoice = confirmUpperCase;
          //determines if the characterChoice variable is null or the same as the array charUpperCase declared in the beginning
          if (charUpperCase === characterChoice){
            //multiples math random by number of alphabet and sets it equal to x
            x = Math.floor(Math.random()*alphabetLength);
          } else {
            //they are not equal so it runs function again to find something that will be equal
            verifyChar();
          }
          //if character is less than 0.5 and greater than 0.25, set the character choice equal to the array declared in the confirmation
        } else if (character < 0.5 && character > 0.25){
          characterChoice = confirmNumeric;
          //determines if the characterChoice variable is null or the same as the array charNumeric declared in the beginning
          if (charNumeric === characterChoice){
            //multiples math random by number of alphabet and sets it equal to x
            x = Math.floor(Math.random()*numberLength);
          } else {
            //they are not equal so it runs function again to find something that will be equal
            verifyChar();
          }
        } else{
          //if character is less than 0.25, set the character choice equal to the array declared in the confirmation
          characterChoice = confirmSpecial;
          //determines if the characterChoice variable is null or the same as the array charNumeric declared in the beginning
          if (charSpecial === characterChoice){
            //multiples math random by number of alphabet and sets it equal to x
            x = Math.floor(Math.random()*specialLength);
          }else {
            //they are not equal so it runs function again to find something that will be equal
            verifyChar();
          }
        }

      }
  
    // calls verifyChar() function
    verifyChar();
  
    //adds each choice to the array passw
    formingPassword.push(characterChoice[x]);
  }

    //joins all the characters to a single string and sets equal to a new variable
    var newPassword = formingPassword.join(''); 
  
    //alerts user of their new password
    window.alert("Your new password is: " + newPassword);
  
    // asks user if they like the new password
    var charConfirmation = window.confirm("Are you satisfied with your password?");
    //verifies if charConfirmation is true
    switch (charConfirmation){
      //Thanks the user and returns the password to the text box on page
      case true: 
        window.alert("Thank you!")
        return newPassword;
        break;
          
      case false:
        //Apologies to the user and tells them to click Generate Password button again
        window.alert("Sorry! Please click 'Generate Password' button again.")
        return;
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
