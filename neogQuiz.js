var readlineSync = require("readline-sync");
var chalk =  require("chalk");

var score = 0;

var friend = readlineSync.question(chalk.bgYellow("Please input your name : \n"));

console.log(chalk.green.underline("Welcome "+ friend + "!  Lets test how well you understood CSS concepts from Neog.Camp sessions\n"));

console.log(chalk.blueBright("please select any answer from a,b and c"))


function friedsnQuiz(question, answer) {
  var friendsanswer = readlineSync.question(question);

  if (friendsanswer === answer) {
    console.log(chalk.cyan( friendsanswer + " is the correct answer"));
    score = score + 2;
    
  } else {
    console.log(chalk.red( friendsanswer + " is wrong"));
   
  }

  console.log(chalk.green.bold("score is  ", score));
  console.log("********************")
}

var questions = [{
  question: `
What does CSS stand for?
	a: Colourful style sheet
	b: Cascading Style sheet
    c: Computer style sheet \n`,
		answer: "b"

}, {
  question: `
Which is the correct CSS syntax?
  a: {body:Colour=black;}
  b: {body;Colour=black}
  c: body{Colour=black;}\n`,
		answer: "c"
},{
  question: `
How do you insert a comment in a CSS file?
	a: //this is comment
	b: /*this is comment*/
  c: //this is comment//\n`,
		answer: "b"
},{
  question: `
Which property is used to change the background color?
	a: bgcolour
	b: background-colour
    c: colour\n`,
		answer: "b"
},{

  question: `
Which CSS property controls the text size?
	a: text-size
	b: font-size
  c: font style\n`,
		answer: "b"
}];

for (var i=0; i<questions.length; i++) {
  var newQuestion = questions[i];
  friedsnQuiz(newQuestion.question, newQuestion.answer)
}

console.log(chalk.bgMagenta("Hey " + friend + "!  you scored " + score ));

if (score <= "6"){

  console.log(chalk.bgCyan.italic("you are not eligible for the neog.camp Level-1\nHappy learning!"))
}else{
  console.log(chalk.blueBright.bold("You cleared!/n See you in level-1 Sessions"))
}
