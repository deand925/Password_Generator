// Array of special characters to be included in password
let specialCharacter = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.']
// Array of uppercase characters to be included in password
let upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
// Array of lowercase characters to be included in password
let lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
// Array of numeric characters to be included in password
let numeric = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
// create an array to store answer to questions
let gatherContent = [];


function generatePassword(){
    let passwordLength = parseInt(prompt('How many characters do you want your password to be?'));
    if(passwordLength<8 || passwordLength>120){
        alert('Password must be between 8 and 120 characters');
        return null;
    }

    let hasSpecialCharacters = confirm('Do you want special characters?')
    let hasUpperCase = confirm('Do you want uppercase letters?');
    let hasLowerCase = confirm('Do you want lowercase letters?');
    let hasNumbers = confirm('Do you want numbers?')

    if(!hasSpecialCharacters && !hasUpperCase && !hasLowerCase && !hasNumbers){
        alert('Password does not meet minimun requirements')
        return null;
    }
    if(hasSpecialCharacters){
        gatherContent = gatherContent.concat(specialCharacter)
    }
    if(hasUpperCase){
        gatherContent = gatherContent.concat(upperCase)
    }
    if(hasLowerCase){
        gatherContent = gatherContent.concat(lowerCase)
    }
    if(hasNumbers){
        gatherContent = gatherContent.concat(numeric)
    }

    let results = []
    for(let i = 0; i < passwordLength; i++){
        let randomIndex = Math.floor(Math.random() * gatherContent.length)
        let randomContent = gatherContent[randomIndex];
        results.push(randomContent);
    }
    return results.join("");
}




// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    // generatePassword = the result of results.join("")
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    // changing from text to 
    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);