var readLineSync = require("readline-sync");
var score=0
var username= readLineSync.question("your name? ")
console.log("welcome "+username+" to the quiz!!")
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
var questions=[{question:"Capital of India? ",answer:"delhi"},
{question:"India's National Bird?? ",
answer:"peacock"},
{question:"India's national animal?? ",
answer:"tiger"}]
for(var i=0;i<questions.length;i++)
{
  currentquestion=questions[i];
  play(currentquestion.question,currentquestion.answer)
}