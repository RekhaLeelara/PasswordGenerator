// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword() {

  //Declaring local variable
  var userInput = false;
  var arrInputcount = 0;
  var upperCaseInput = "";
  var lowerCaseInput = "";
  var specialChars = "";
  var strAllInputs = "";
  var userInput2 = false;
  var result = "";
  var question1 = false;
  var question2 = false;
  var question3 = false;
  var question4=false;

  //storing the data to generate random texts
  var arrData = {
    upperCasechar: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowerCasechar: "abcdefghijklmnopqrstuvwxyz",
    numericChar: "1234567890",
    specialChars: "!@#$%^&*()_+="
  }

  while (!userInput) {

    //Prompting user to enter number of characters to generate password
    var passLen = prompt("Please enter the length of at least 8 characters and no more than 128 characters")

    //displaying alert if invalid input entered for length of chars
    if ((passLen < 8) || (passLen > 128)) {
      alert("Invalid input. Please enter the length of at least 8 characters and no more than 128 characters");
      userInput = false;
    }
    else {
      userInput = true;

      while (!userInput2) {
        question1=window.confirm("Do you want to include uppercase characters");

        //If question1=Ok then save the respective data string to temp variable
        if (question1) {
          upperCaseInput = "Yes";
          strAllInputs = arrData.upperCasechar;
          result = result+arrData.upperCasechar.charAt(Math.floor(Math.random() * 
          arrData.upperCasechar.length));
          passLen--;
        }

        //If question2=Ok then save the respective data string to temp variable
        question2=window.confirm("Do you want to include lowercase characters");
        if (question2) {
          lowerCaseInput = "Yes";
          strAllInputs = strAllInputs + arrData.lowerCasechar;
          result = result+arrData.lowerCasechar.charAt(Math.floor(Math.random() * 
          arrData.lowerCasechar.length));
          passLen--;
        }

        //If question3=Ok then save the respective data string to temp variable
        question3=window.confirm("Do you want to include numeric digits");
        if (question3) {
          numericInput = "Yes";
          strAllInputs = strAllInputs + arrData.numericChar;
          result = result+arrData.numericChar.charAt(Math.floor(Math.random() * 
          arrData.numericChar.length));
          passLen--;
        }

        //If question4=Ok then save the respective data string to temp variable
        question4=window.confirm("Do you want to include special characters");
        if (question4) {
          numericInput = "Yes";
          strAllInputs = strAllInputs + arrData.specialChars;
          result = result+arrData.specialChars.charAt(Math.floor(Math.random() * 
          arrData.specialChars.length));
          passLen--;
        }

        //If user dont choose atleast one char type, display alert 
        if (strAllInputs==="") {
          alert("Atleast select one input type should be selected. Please try again");
          userInput2 = false
        }

        else {
          userInput2 = true;
          for (var i = 0; i < passLen; i++) {
            result += strAllInputs.charAt(Math.floor(Math.random() * 
            strAllInputs.length));
          }
          return result;
        }
      }
    }
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);