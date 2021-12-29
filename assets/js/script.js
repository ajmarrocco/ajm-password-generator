// Assignment code here
var generatePassword = function(){
  //ask employee legnth of characters they want
  var passwordLength = window.prompt("Please select length of password.  Must be at least 8 characters and no more than 128 characters.  Please write the numerical value of the characters you want.  Ex: 15.");

  //validate answer
  if (passwordLength >= 8 && passwordLength <= 128)
  window.alert("Proceed");
  else{
    window.alert("The numerical character of characters you entered is incorrect.  Please enter again");
    generatePassword();
  }

  console.log(passwordLength);

  var confirmLowercase = window.confirm("Would you like to include lowercase characters?")

  if (confirmLowercase){
    window.alert("Password will include lowercase characters");
  }else {
    window.alert("Password will not include lowercase characters");
  }
  
  var confirmUpperCase = window.confirm("Would you like to include uppercase characters?")

  if (confirmUpperCase){
    window.alert("Password will include uppercase characters");
  }else {
    window.alert("Password will not include uppercase characters");
  }

  var confirmNumeric = window.confirm("Would you like to include numeric characters?")

  if (confirmNumeric){
    window.alert("Password will include numeric characters");
  }else {
    window.alert("Password will not include numeric characters");
  }

  var confirmSpecial = window.confirm("Would you like to include special characters? Ex: @, #, $.")

  if (confirmSpecial){
    window.alert("Password will include special characters");
  } else {
    window.alert("Password will not include special characters");
  }

  var confirmCriteria = window.confirm("Are you satisfied with the criteria you selected?")
  if (confirmCriteria){
    window.alert("Proceed");
  } else {
    generatePassword();
  }

  console.log(confirmSpecial);
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
