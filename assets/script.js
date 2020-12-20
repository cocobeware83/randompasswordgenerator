// Assignment code here
document.querySelector("#generate").addEventListener("click",writePassword);

// character arrays for password 'complications'
var alphabetLOWER = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphabetUPPER = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialCharacters = ["~","!", "@","#","$","%","^","&","*","(",")","-","+","=","[","]","{","}","/","<", ">","?",];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var confirmLength = [];
var confirmLowerCase;
var confirmUpperCase;
var confirmSpecialCharacters;
var confirmNumbers;

// initial alert window to choose length of password 
function generatePassword() {
  var confirmLength = (prompt("Hi! Your Password can contain between 8 - 128 characters.  Please input your preference in the form of a number."));

//confirms that you have made a between 8 & 128 characters alerts you if you have made an incorrect choice and allows you to retry 
while(confirmLength <= 7 || confirmLength >= 129) {
  alert("You have to choose a number between 8 & 128");
  var confirmLength = (prompt("Hi! Your Password can contain between 8 - 128 characters.  Please input your preference in the form of a number."));
  } 

// prompts user to select preferences, can choose to include uppercase, lowercase, special characters and numbers 1-9
var confirmUpperCase = confirm("Select 'OK' if you would like to include UPPERCASE letters in your password, select 'cancel' if not.");
var confirmLowerCase = confirm("Select 'OK' if you would like to include LOWERCASE letters in your password, select 'cancel' if not.");
var confirmSpecialCharacters = confirm("Select 'OK' if you would like to include SPECIAL CHARACTERS in your password, select 'cancel' if not.");
var confirmNumbers = confirm("Select 'OK' if you would like to include NUMBERS 1-9 in your password, select 'cancel' if not.");    

  //if user fails to select at least ONE parameter i.e chooses cancel every time, the prompts will loop back and allow them to try again
  while(confirmUpperCase === false && confirmLowerCase === false && confirmSpecialCharacters === false && confirmNumbers === false) 
  {
    alert("Hey wait!! Please choose at least ONE parameter");
    var confirmUpperCase = confirm("Select OK if you would like to include UPPERCASE letters in your password, select cancel if not.");
    var confirmLowerCase = confirm("Select OK if you would like to include LOWERCASE letters in your password, select cancel if not.")
    var confirmSpecialCharacters = confirm("Select OK if you would like to include SPECIAL CHARACTERS in your password, select cancel if not.");   
    var confirmNumbers = confirm("Select OK if you would like to include NUMBERS 1-9 in your password, select cancel if not.");
} 

//concats for different variations of criteria selection
var passwordCharacters = []
    if (confirmUpperCase) {
      passwordCharacters = passwordCharacters.concat(alphabetUPPER)
    }
    if (confirmLowerCase) {
      passwordCharacters = passwordCharacters.concat(alphabetLOWER)
    }
    if (confirmSpecialCharacters) {
      passwordCharacters = passwordCharacters.concat(specialCharacters)
    }
    if (confirmNumbers) {
      passwordCharacters = passwordCharacters.concat(numbers)
    }
    


// Write password to the #password input
  var randomPassword = []
  for (var i = 0; i < confirmLength; i++) {
  randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
}
  return randomPassword;
}
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

