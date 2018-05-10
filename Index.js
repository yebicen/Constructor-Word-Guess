var Word = require("./Word");
var inquirer = require("inquirer");


var userinput;

// variable we will use to count how many times our questions have been asked
var count = 0;

var askQuestion = function() {
  // if statement to ensure that our questions are only asked five times
  if (count < 5) {
    inquirer.prompt([
      {
        name: "input",
        message: "Guess a word!"
      }
    ]).then(function(answers) {
      userinput = answers.input
      var randomword = new Word("Hello")
      randomword.returnString();

      //continue with the loop
      count++;
      askQuestion();
    });
  }
  else {
   console.log("Next Word!")
  }
};

// call askQuestion to run our code
askQuestion();

