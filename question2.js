const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
/*
Create a function that simulates a student midterm exam grading system. The function will take in a student's name and their exam score.

- If the student's score is 86 or above, display "Excellent! [Student Name] has an A."
- If the score is between 72 and 85, display "Great job! [Student Name] has a B."
- If the score is between 60 and 72, display "Good effort! [Student Name] has a C."
- If the score is between 50 and 60, display "Needs improvement. [Student Name] has a D."
- If the score is below 50, display "Fail. [Student Name] has a F."

CHALLENGE (SAVE FOR LAST):
- If the student's score is within 2 points of the next grade bracket, display "Almost there! [Student Name] is close to a [next grade]."
  -For example, 48 would give you "Almost there! [Student Name] is close to a D."
- If the student's score is within 2 points of the previous grade bracket, display "Work Hard! [Student Name] is almost falling to [previous grade]."
  -For example, 52 would give you "Work Hard! [Student Name] is almost falling to F."
*/

//determine a proper function name and parameter variable name
//ScoreChecker for grades
function ScoreChecker(paramscore, paramname){
  let name= paramname
  if(paramscore >= 86){ 
    console.log('Congrats! '+name+' got an A!')//user got above 86
  }else if (paramscore < 86 && paramscore >=75){
    console.log("Great job! "+name+" got a B.")//user got between 86 - 75
  }else if (paramscore < 75 && paramscore >= 60){
    console.log("Good effort! "+name+" got a C.")//user got between 74 - 60
  }else if(paramscore <60 && paramscore >= 50){
    console.log("Needs improvement. "+name+" got a D.")//user got between 59 - 50
  }else if (paramscore <50){
    console.log("Fail. "+name+" got an F.")//user got below 50
  }
  //write your code here
}

function StartApp(){
  readline.question("What's your name?", name => {
    readline.question('Please provide your exam score percentage?', score => {  
        //ask name, then what the grade was
      ScoreChecker(Number(score));//takes in the number grade
      //call your function here.

      // readline.close();
      if(score !== "quit"){
        StartApp();
      } else {
        readline.close();
      }
    });
  });
}

StartApp();
//gather user name and number grade to determine what their letter grade is
//based on number inputted, user will recieve corresponding letter grade