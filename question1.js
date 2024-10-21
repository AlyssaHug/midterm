const { type } = require('os');
const { text } = require('stream/consumers');

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
/*
Create a function that simulates a simple password checking system. The function will take in a password and a user's input as parameters. It will then compare the user's input to the password.

- If the user's input matches the password exactly, display "Access Granted!"
- If the user's input does not match, display "Access Denied!"
- If the user's input is "forgot", display "Here is a hint"
- If the user's input is "reset", display "Let's reset your account"

CHALLENGE (SAVE FOR LATER)
- if the password set is "forgot" or "reset", and the user's input matches the password exactly. Aside from Access Granted, also display, "This password you set should not be used because it glitches the system".
- the password set needs to be 5 characters or more, if it is below 5 characters, display "Password is inadequate"
*/

//Password guessing game
//determine a proper function name and parameter variable name
function PasswordGame(paramguess, parampassword){
let forgot = "forgot"
let reset = "reset"
//if guess is "forgot"
  if(paramguess === forgot && paramguess !== parampassword){
    console.log("Here's a hint")
  }//if guess is "reset"
  else if (paramguess === reset && paramguess !== parampassword){
    console.log("Let's reset your password!")
  }  //if guess doesn't match answer
else if (paramguess !== parampassword && paramguess !== reset && paramguess !== forgot){
  console.log("Wrong, try again!")//guessed incorrectly
}else if (paramguess === paramanswer){
  console.log("Access granted!")//guessed correctly
}
  //write your code herere
}

//CHALLENGE FUNCTION


function StartApp(){
  readline.question('What would you like the password to be?', parampassword => {
    readline.question("Now guess, what's the password?", paramguess => {
      PasswordGame(paramguess);
        
      //call your function here.

      // readline.close();
      if(paramguess === "quit"){
        readline.close();
      }else {
        StartApp();
      }
    });
  });
}

StartApp();
//question: what would you like the password to be?
//then ask other user: guess what the password is set to
//if forgotten, give a hint
//if reset, then ask to reset account
