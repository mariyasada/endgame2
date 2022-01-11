var readlineSync = require("readline-sync");
var chalk= require("chalk");

var score =0;
var userName = readlineSync.question("what is your Name?");
console.log(chalk.magenta("welcome!  " + userName + "   to DO YOU KNOW MARIYA?"));

// converting function to Es6  function play => const play=()=>
const play=(question,answer)=>
{
  var userAnswer = readlineSync.question(question);
  if(userAnswer===answer)
  {
    console.log(chalk.green("right!"));
    score++;
    console.log(chalk.bgYellow("your score is:",score));
  }
  else
  {
    console.log(chalk.red("wrong"))
  }
}
const questionOne={
  question:"what is my favorite color?",
  answer:"black"
}
const questionTwo ={
  question:"who is my best friend?",
  answer:"allah"
}
const questionThree={
  question:"what i want to become?",
  answer:"a nice Human Being"
}
const questionFour ={
  question:"My favorite vacation place?",
  answer:"ajmer"
}
const questionFive ={
  question:"which mobile phone i am using(company name)?",
  answer:"redmi"
}
const questionSix ={
  question:"what is my favorite dessert?",
  answer:"gulabjamun"
}
// who knows me well
var persons=[
  {
    name:"Rashida",
    score:6
  },
  {
    name:"Ankita",
    score:5
  }
]

questionList =[questionOne,questionTwo,questionThree,questionFour,questionFive,questionSix];

for( var i=0; i<questionList.length;i++)
{ 
     var currentquestion = questionList[i]
     play(currentquestion.question,currentquestion.answer);
     if(currentquestion=== questionList[2])
     {
           console.log(chalk.green("you are entering into LEVEL 2!"));
     }
}
console.log("YAYYYY! your total score is:",score)
console.log("-------------------------------------");
console.log(chalk.blue(userName +":" + score ))
console.log(chalk.blue(persons[0].name + ":"+ persons[0].score));
console.log("-------------------------------------");
if(score < persons[0].score)
{
console.log("If you score higher than other then ping me i'll update the score");
}
