// Letter.js: Contains a constructor, Letter. This constructor should be able to either display an underlying character or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. That means the constructor should define:
var userinput;
function Letter(singleLetter, guessed) {

  // A string value to store the underlying character for the letter
    this.singleLetter = singleLetter;

  // A boolean value that stores whether that letter has been guessed yet
    this.guessed = false;
    
  // A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed
    this.replaceletter = function() {
      if (this.guessed) {
          this.singleLetter === singleLetter; 
        // console.log(this.singleLetter);
      }

      else{
        this.singleLetter = "_"
        // console.log(this.singleLetter)
    }
    };


// A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly
    this.checkletter = function() {
        if (this.singleLetter === userinput) {
            this.guessed = true
          console.log(this.guessed);
        }
  
        else{
          this.guessed = false
            console.log(this.guessed);
        }
      };
  }
  

//////DUMMY TEST PLACEHOLDER/////

// var userinput = "e";
// randomWord = "Hello"
// new Letter(randomWord[1]).replaceletter();
// new Letter(randomWord[1]).checkletter();

////// END OF DUMMY TEST//////


//export module
  module.exports = Letter;
 
 
 
  

