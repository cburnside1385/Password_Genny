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

 
    if (!Lower && !Upper && !Number && !Special) {
        userSelections = alert("Please make all selections!");

    } else if (Lower && Upper && Number && Special) {
        userSelections = lowers.concat(uppers, numbers, special);
       
    }
    
    else if (Lower && Upper && Number) {
        userSelections = lowers.concat(uppers, numbers);
    }
    else if (Lower && Upper && Special) {
        userSelections = lowers.concat(uppers, special);
      
    }
    else if (Lower && Number && Special) {
        userSelections = lowers.concat(numbers, special);
       
    }
    else if (Upper && Number && Special) {
        userSelections = uppers.concat(numbers, special);
      
    }
    
    else if (Lower && Upper) {
        userSelections = lowers.concat(uppers);
        
    }
    else if (Lower && Number) {
        userSelections = lowers.concat(numbers);
     
    }
    else if (Lower && Special) {
        userSelections = lowers.concat(special);
       
    }
    else if (Upper && Number) {
        userSelections = uppers.concat(numbers);
        
    }
    else if (Upper && Special) {
        userSelections = uppers.concat(special);
       
    }
    else if (Number && Special) {
        userSelections = numbers.concat(special);
       
    }
   
    else if (Lower) {
        userSelections = lowers;
       
    }
    else if (Upper) {
        userSelections = blankUpper.concat(uppers);
       
    }
    else if (Number) {
        userSelections = numbers;
       
    }
    else if (Special) {
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