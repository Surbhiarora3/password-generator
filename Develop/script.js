function generatePassword(){
  
var num = prompt("Choose password length from 8 to 128 character");
console.log(num);
var userSelection=prompt("Select character types to include in the password, Choose 1 for Numbers , 2 for Alphabets , 3 for Lower Case(Upper case is default),4 for Alphanumeric")

var numbers=[0,1,2,3,4,5,6,7,8,9];
var alphabets=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var alphabetsLower=['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var specialsymbol = ['!','@','#','$','%','^','&','*','-','+','='];

switch(userSelection)
{
  case '1':
  //console.log(numbers);
  return (PassString(numbers,num));
    break;
    
    case '2':
      console.log(alphabets);
      return (PassString(alphabets,num)).join("");;

    break;

    case '3':
      console.log(alphabetsLower);
     return (PassString(alphabetsLower,num)).join("");;

      break;

      case '4':
        console.log(specialsymbol);
        var op=specialsymbol.concat(alphabets,numbers);
      return  (PassString(op,num)).join("");
       
        break;

    

  
}
// console.log(alphabetsLower);

//  console.log(new Date().getDay());


  //return "password"
}

function PassString(userSelection,num)
{
  var passString=[];
//console.log(parseInt(num));
var a=parseInt(num);
//console.log(a);
  // for(let i=0; i>=a; i++)
  // {
  // //  console.log("Sumit Says ",userSelection.length);
  //   var ranNum=Math.floor(Math.random() * userSelection.length);
  //   console.log("Test",userSelection[4]);
  //   passString.push(userSelection[ranNum]);
    
  // }

  for (let i = 0; i < a; i++)
  {
  //  console.log("Sumit Says ",userSelection.length);
    var ranNum=Math.floor(Math.random() * userSelection.length);
    console.log("Test",userSelection[4]);
    passString.push(userSelection[ranNum]);
    
  }
console.log(passString);
return passString;

}




// var get = document.querySelector();





// Assignment Code, DO NOT EDIT ANTHING  BELOW THIS LINE
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
