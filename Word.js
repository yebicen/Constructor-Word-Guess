var Letter = require("./Letter");



// Word.js: Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess. That means the constructor should define:


function Word(inputword) {
// An array of new Letter objects representing the letters of the underlying word
var arr = [];
var inputwordArr = inputword.split("");
var arrString;
console.log("full array", inputwordArr);
 
    
//  A function that returns a string representing the word. This should call the function on each letter object (the first function defined in Letter.js) that displays the character or an underscore and concatenate those together.
this.returnString = function() {

for (i=0; i<inputwordArr.length; i++){
myLetter = new Letter(inputwordArr[i]);
myLetter.replaceletter(); //call the replace letter function from Letter.js
arr.push(myLetter.singleLetter);
console.log("process array", arr);
}
arrString = arr.toString(); //return a processing string like "H_e_ _ o"
console.log("process word", arrString);

};//end of returnString function

// A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in Letter.js)
this.wordguess = function(){
  for (i=0; i<inputwordArr.length; i++){
    myLetter = new Letter(inputwordArr[i]);
myLetter.checkletter(); //changed the guessed letter to "true" 
    }  
  }

} //end of Word constructor function


//////DUMMY TEST PLACEHOLDER/////
//  var userinput = "e";
//  randomWord = new Word("Hello")
//  randomWord.returnString()
////// END OF DUMMY TEST//////


 //export module
 module.exports = Word;



