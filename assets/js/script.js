// Assignment code here

//declaring arrays for characters
var charLowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var charUpperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var charNumeric = ["0","1","2","3","4","5","6","7","8","9"];
var charSpecial = ["@","%","+","/","!","#","$","^","?",":","(",")","}","{","[","]","`","-","_","."];
var alphabetLength = 26;
var numberLength = 10;
var specialLength = 20;

var lowercaseOrNo = function(){
  var promptLowerCase = window.prompt('Would you like lowercase characters? Enter "YES" or "NO" to choose.');

  debugger;
  if (promptLowerCase === "" || promptLowerCase === null){
    window.alert("You need to provide a valid answer! Please try again.");
    // use return to call it again and stop the rest of this function from running
    return lowercaseOrNo();
  }

  promptLowerCase = promptLowerCase.toLowerCase();

  if (promptLowerCase === "yes"){
    var confirmLowerCase =  window.confirm("Are you sure you'd lowercase characters?");

    if (confirmLowerCase) {
      return true;
    } 
  } else if (promptLowerCase === "no"){
    var confirmLowerCase =  window.confirm("Are you sure you don't want lowercase characters?");

    if (confirmLowerCase){
      return false;
    }
  } else
  window.alert("You need to provide a valid answer! Please try again.");
  return lowercaseOrNo();
}

var uppercaseOrNo = function(){
  var promptUpperCase = window.prompt('Would you like uppercase characters? Enter "YES" or "NO" to choose.');

  if (promptUpperCase === "" || promptUpperCase === null){
    window.alert("You need to provide a valid answer! Please try again.");
    // use return to call it again and stop the rest of this function from running
    return uppercaseOrNo();
  }

  promptUpperCase = promptUpperCase.toLowerCase();

  if (promptUpperCase === "yes"){
    var confirmUpperCase =  window.confirm("Are you sure you'd uppercase characters?");

    if (confirmUpperCase) {
      return true;
    } 
  } else if (promptUpperCase === "no"){
    var confirmUpperCase =  window.confirm("Are you sure you don't want uppercase characters?");

    if (confirmUpperCase){
      return false;
    }
  } else
  window.alert("You need to provide a valid answer! Please try again.");
  return lowercaseOrNo();
}


var numericOrNo = function(){
  var promptNumeric = window.prompt('Would you like numeric characters? Enter "YES" or "NO" to choose.');

  if (promptNumeric === "" || promptNumeric === null){
    window.alert("You need to provide a valid answer! Please try again.");
    // use return to call it again and stop the rest of this function from running
    return numericOrNo();
  }

  promptNumeric = promptNumeric.toLowerCase();

  if (promptNumeric === "yes"){
    var confirmNumeric =  window.confirm("Are you sure you'd numeric characters?");

    if (confirmNumeric) {
      return true;
    } 
  } else if (promptNumeric === "no"){
    var confirmNumeric =  window.confirm("Are you sure you don't want numeric characters?");

    if (confirmNumeric){
      return false;
    }
  } else
  window.alert("You need to provide a valid answer! Please try again.");
  return numericOrNo();
}

var specialOrNo = function(){
  var promptSpecial = window.prompt('Would you like special characters? Enter "YES" or "NO" to choose.');

  if (promptSpecial === "" || promptSpecial === null){
    window.alert("You need to provide a valid answer! Please try again.");
    // use return to call it again and stop the rest of this function from running
    return specialOrNo();
  }

  promptSpecial = promptSpecial.toLowerCase();

  if (promptSpecial === "yes"){
    var confirmSpecial =  window.confirm("Are you sure you'd special characters?");
    debugger;

    if (confirmSpecial) {
      return true;
    } 
  } else if (promptSpecial === "no"){
    var confirmSpecial =  window.confirm("Are you sure you don't want special characters?");

    if (confirmSpecial){
      return false;
    }
  } else
  window.alert("You need to provide a valid answer! Please try again.");
  return specialOrNo();
}

debugger;

var criteriaOrNo = function() {
  var confirmCriteria = window.confirm("Are you satisfied with the criteria you selected?");
  if (confirmCriteria){
    return true;
  } else
  return false;
}


var generatePassword = function(){
  //ask employee legnth of characters they want
  var passwordLength = window.prompt("Please select length of password.  Must be at least 8 characters and no more than 128 characters.  Please write the numerical value of the characters you want.  Ex: 15.");

  //validate answer is between 8 and 128 charcters
  if (passwordLength >= 8 && passwordLength <= 128)
  window.alert("You have chosen " + passwordLength + " characters.  Proceed");
  else{
    // if not prompt user and have them enter another value
    window.alert("The number of characters you entered is incorrect.  Please enter again");
    generatePassword();
  }

  // Declare lowercase variable and ask user if they want lowercase characters in password
  debugger;

  if (lowercaseOrNo()){
    //if  user wants lowercase, set confirmLowerCase to array
    var charLC = charLowerCase;
  } 
  debugger;
  // Declare upperercase variable and ask user if they want uppercase characters in password


  if (uppercaseOrNo()){
    //if  user wants uppercase, set confirmUpperCase to array
    var charUC = charUpperCase;
  }

  debugger;
  // Declare numeric variable and ask user if they want numeric characters in password

  if (numericOrNo()){
    //if  user wants numeric, set confirmNumeric to array
    var charN = charNumeric;
  } 

  // Declare special variable and ask user if they want special characters in password

  debugger;

  if (specialOrNo()){
    //if  user wants special, set confirmNSpecial to array
    var charS = charSpecial;
  } 
  
  debugger;

  var confirmLowerCase = lowercaseOrNo();
  console.log(confirmLowerCase);
  debugger;
  var confirmUpperCase = uppercaseOrNo();
  var confirmNumeric = numericOrNo();
  var confirmSpecial = specialOrNo();
  var confirmCriteria = criteriaOrNo();

  console.log(confirmCriteria);
  debugger;

  // ask user to confirm if they are content with the criteria
  if (confirmCriteria === false){
    // 
    window.alert("You are not satisfied with your crtieria.  Please select again");    
    generatePassword();  
        
  } else if (confirmLowerCase === false && confirmUpperCase === false && confirmNumeric === false && confirmSpecial === false) {
    window.alert("You have not selected any character types.  Please select again");
    generatePassword();

  } else {
    // proceed with code
    window.alert("Proceed");
    
  } 

  var passw = [];

  for(let i = 0; i < passwordLength; i++){

    var verifyChar = function(){
      
      // declare character variable and set it to a random value
      var character = Math.random();
      // console.log(character);//to be deleted

      if (character > 0.75){
        characterChoice = charLC;
        if (charLowerCase === characterChoice){
          x = Math.floor(Math.random()*alphabetLength);
        } else {
          verifyChar();
        }
      } else if (character < 0.75 && character > 0.5){
        characterChoice = charUC;
        if (charUpperCase === characterChoice){
          x = Math.floor(Math.random()*alphabetLength);
        } else {
          verifyChar();
        }
      } else if (character < 0.5 && character > 0.25){
        characterChoice = charN;
        if (charNumeric === characterChoice){
          x = Math.floor(Math.random()*numberLength);
        } else {
          verifyChar();
        }
      } else{
        characterChoice = charS;
        if (charSpecial === characterChoice){
          x = Math.floor(Math.random()*specialLength);
        }else {
          verifyChar();
        }
      }
    }

  verifyChar();

  //adds each choice to the array passw
  passw.push(characterChoice[x]);
  }

  //joins all the characters of passw to a single string pas
  var pas = passw.join('');

  // debugger;
  window.alert("Your new password is: " + pas);

  var charConfirmation = window.confirm("Are you satisfied with your password?");
  if (charConfirmation){
    window.alert("Thank you!")
    return pas;
  } else{
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
