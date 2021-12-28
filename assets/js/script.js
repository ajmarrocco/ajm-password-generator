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
