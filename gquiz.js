const chalk = require('chalk');
 

console.log(chalk.green.bold("welcome"));
var readLineSync = require("readline-sync");
var score=0
var username= readLineSync.question("your name? ")
console.log("welcome "+username+" to the F.R.I.N.D.S quiz!!")
console.log("RULES:  Dont use capital letters while answering")
function play(question,answer){
  userAnswer = readLineSync.question(question)
  if(userAnswer == answer){
    score++
    console.log("correct")
    
  }
  else {score--
  console.log("incorrect!!")
  console.log("correct answer is "+ currentquestion.answer)
  }
  console.log("your score is:"+score)
  if (!readLineSync.keyInYN('Do you want to play more?')) {
  // Key that is not `Y` was pressed.
  process.exit();
  }
  
}
var questions=[{question:"what was the name of Ross's girlfriend from London ? ",answer:"emily"},
{question:"what was monica's profession? ",
answer:"chef"},
{question:"what was the name for that coffe place where they used to hang out? ",
answer:"the central perk"}]
for(var i=0;i<questions.length;i++)
{
  currentquestion=questions[i];
  play(currentquestion.question,currentquestion.answer)
}