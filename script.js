var generateBtn = document.querySelector("#generate");


var Upper;
var Number;
var Special;
var userSelections;
var passwordLength;
var Lower;


//letter array//
var lowers = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


var MakeitUpper = function (x) {
    return x.toUpperCase();
};
uppers = lowers.map(MakeitUpper);


//number array//
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var special = ["!", "#", "$", "%", "&"];


function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}


generateBtn.addEventListener("click", writePassword);


function generatePassword() {
    
    passwordLength = prompt("How many characters would you like your password to be? Choose between 8 and 128 characters");
    console.log("Password length " + passwordLength);

    if (!passwordLength) {
        alert("Required!");

    } else if (passwordLength < 8 || passwordLength > 128) {
        passwordLength = prompt("You must choose a Password length between 8 and 128 characters!");
        console.log("Password length " + passwordLength);

    } else {
        Lower = confirm("Will your password contain lower case letters?");
        Special = confirm("Will your password contain special characters?");
        Number = confirm("Will your password contain numbers?");
        Upper = confirm("Will your password contain upper case letters?");
    };

 
    if (!confirmLower && !confirmUpper && !confirmNumber && !confirmSpecial) {
        userSelections = alert("Please make all selections!");

    } else if (confirmLower && confirmUpper && confirmNumber && confirmSpecial) {
        userSelections = lowers.concat(uppers, numbers, special);
       
    }
    
    else if (confirmLower && confirmUpper && confirmNumber) {
        userSelections = lowers.concat(uppers, numbers);
    }
    else if (confirmLower && confirmUpper && confirmSpecial) {
        userSelections = lowers.concat(uppers, special);
      
    }
    else if (confirmLower && confirmNumber && confirmSpecial) {
        userSelections = lowers.concat(numbers, special);
       
    }
    else if (confirmUpper && confirmNumber && confirmSpecial) {
        userSelections = uppers.concat(numbers, special);
      
    }
    
    else if (confirmLower && confirmUpper) {
        userSelections = lowers.concat(uppers);
        
    }
    else if (confirmLower && confirmNumber) {
        userSelections = lowers.concat(numbers);
     
    }
    else if (confirmLower && confirmSpecial) {
        userSelections = lowers.concat(special);
       
    }
    else if (confirmUpper && confirmNumber) {
        userSelections = uppers.concat(numbers);
        
    }
    else if (confirmUpper && confirmSpecial) {
        userSelections = uppers.concat(special);
       
    }
    else if (confirmNumber && confirmSpecial) {
        userSelections = numbers.concat(special);
       
    }
   
    else if (confirmLower) {
        userSelections = lowers;
       
    }
    else if (confirmUpper) {
        userSelections = blankUpper.concat(uppers);
       
    }
    else if (confirmNumber) {
        userSelections = numbers;
       
    }
    else if (confirmSpecial) {
        userSelections = special;
        
    };


    var passwordBlank = [];


    for (var i = 0; i < passwordLength; i++) {
        var selections = userSelections[Math.floor(Math.random() * userSelections.length)];
        passwordBlank.push(selections);
        console.log(selections);
    }

     
    var password = passwordBlank.join("");
    console.log("Your Pasword is: " + password);
    return password;

}