var inquirer =require("inquirer");

var words=["giraffe","camel","donkey","hippo"];
var randomWord=words[Math.floor(Math.random()* words.length)]
  console.log(randomWord)

  var randomWordUnderscored=[];
  for(var i=0;i<randomWord.length;i++){
      randomWordUnderscored.push("_")
// console.log(randomWordUnderscored)
  }

  console.log(randomWordUnderscored)
// inquirer
//   .prompt([
//     /* Pass your questions in here */
//   ])
//   .then(answers => {
//     // Use user feedback for... whatever!!
//   });
var runGame=() =>{
  if(guesses > 0)
  inquirer
  .prompt([
    {
    type:"input",
    message:"Guess what a letter in the word Guessed",
    name:"guess"
    }
  ]).then((res)=>{
    words.isLetterInWord(res.guess);
    runGame();
  })
  
}

