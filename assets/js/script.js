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

  var confirmLowerCase = window.confirm("Would you like to include lowercase characters?")

  if (confirmLowerCase){
    window.alert("Password will include lowercase characters");
    confirmLowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  }else {
    window.alert("Password will not include lowercase characters");
  }
  
  var confirmUpperCase = window.confirm("Would you like to include uppercase characters?")

  if (confirmUpperCase){
    window.alert("Password will include uppercase characters");
    confirmUpperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  }else {
    window.alert("Password will not include uppercase characters");
  }

  var confirmNumeric = window.confirm("Would you like to include numeric characters?")

  if (confirmNumeric){
    window.alert("Password will include numeric characters");
    confirmNumeric = ["0","1","2","3","4","5","6","7","8","9"];
  }else {
    window.alert("Password will not include numeric characters");
  }

  var confirmSpecial = window.confirm("Would you like to include special characters? Ex: @, #, $.")

  if (confirmSpecial){
    window.alert("Password will include special characters");
    confirmSpecial = ["@","%","+","/","!","#","$","^","?",":","(",")","}","{","[","]","`","-","_","."];
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

  var alphabetLength = 26;
  var numberLength = 10;
  var specialLength = 20;

  for(let i = 1; i <= passwordLength; i++){
    console.log(i);
  }

  for(let i = 0; i < alphabetLength; i++){
    console.log(confirmLowerCase[i]);
  }

  for(let i = 0; i < alphabetLength; i++){
    console.log(confirmUpperCase[i]);
  }

  for(let i = 0; i < numberLength; i++){
    console.log(confirmNumeric[i]);
  }

  for(let i = 0; i < specialLength; i++){
    console.log(confirmSpecial[i]);
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
