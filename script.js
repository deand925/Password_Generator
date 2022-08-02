// Array of special characters to be included in password
let specialCharacter = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.']
// Array of uppercase characters to be included in password
let upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
// Array of lowercase characters to be included in password
let lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
// Array of numeric characters to be included in password
let numeric = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
// create an array to store answer to questions


// start of generatePassword function //
function generatePassword(){
    let gatherContent = [];
    console.log(gatherContent)
    // asking for the length of password //
    let passwordLength = parseInt(prompt('How many characters do you want your password to be?'));
    // checking password minimum requirements //
    if(passwordLength<8 || passwordLength>128){
        alert('Password must be between 8 and 128 characters');
        return null;
    }

    // asking what the user wants in there password //
    let hasSpecialCharacters = confirm('Do you want special characters?')
    let hasUpperCase = confirm('Do you want uppercase letters?');
    let hasLowerCase = confirm('Do you want lowercase letters?');
    let hasNumbers = confirm('Do you want numbers?')

    // checking password minimum requirements //
    if(!hasSpecialCharacters && !hasUpperCase && !hasLowerCase && !hasNumbers){
        alert('Password does not meet minimun requirements')
        return null;
    }

    // adding user response to the gathercontent array //
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
    console.log(gatherContent)
    let results = []
    // start of for loop //
    for(let i = 0; i < passwordLength; i++){
        // creating random number to number/letters/characters for password //
        let randomIndex = Math.floor(Math.random() * gatherContent.length)
        let randomContent = gatherContent[randomIndex];
        results.push(randomContent);
    }
    // end of for loop //
    return results.join("");
}
// end of generatePassword function //



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