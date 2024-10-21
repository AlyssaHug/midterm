const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
/*
Create a function that simulates a lunch money management system for students. The function will take in a student's name, the amount of lunch money they currently have, the lunch item name, and the cost of their lunch.

- If the student has enough money to buy lunch, display "[student name] purchased [lunch item] purchased!"
- If the student does not have enough money, display "[student name] does not have sufficient funds to buy [lunch item]!"

CHALLENGE (SAVE FOR LAST):
- Show the remaining balance if the student has enough money to buy lunch
  - "[student name] purchased [lunch item] purchased! Remaining Balance [balance]"

- Show the amount of money still needed balance if the student does not have enough money
  - "[student name] does not have sufficient funds to buy [lunch item]! Needs [amount] more."
  
- If the student's remaining balance is less than $5, display "Warning: Low balance!"
- If the student's remaining balance is exactly $0, display "Balance depleted! Please add more funds."

*/

//determine a proper function name and parameter variable name
//LunchMoneyChecker that compares how much money you have to what an item costs
//compare to see if you have enough money
function LunchMoneyChecker( paramname, parammoney, paramitem, paramcost){
if(parammoney >= paramcost){ 
  console.log("Yay! " +paramname+' purchased '+paramitem+".");//user has enough money for their item
}else if (parammoney < paramcost){
  console.log("Sorry, "+paramname+" doesn't have enough money to buy "+paramitem+".")//user doesn't have enough money for their item
}
}

function StartApp(){
  readline.question('What is your name?', paramname => {// User's name
    readline.question('How much money do you have today?', parammoney => {//how much money user has to spend
      readline.question('What are you wanting to buy?', paramitem => {//what user wants to buy
        readline.question('How much does it cost?', paramcost => {//how much item costs
            LunchMoneyChecker(Number(parammoney));
            LunchMoneyChecker(Number(paramcost));
    
          if(paramcost === "quit"){
            readline.close();
          } else {
            StartApp();
          }
        })
      })
    });
  });
}

StartApp();
//Ask user for name, balance, item of interest, and cost of item
//based on user input, it will let them know if they have enough money for their item of choice