const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const questionCounterText = document.getElementById("questionCounter");
const scoreText = document.getElementById("score");

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions =[];

let questions = [{
    "question": "What year did LeMoyne-Owen College relocate from Orleans Street to Walker Avenue?",
    "choice1": "1914",
    "choice2": "1968",
    "choice3": "1924",
    "choice4": "1930",
    "answer": 1
  },
  {
    "question": "What year did LeMoyne Normal College merge with Owen College to become LeMoyne-Owen College?",
    "choice1": "1914",
    "choice2": "1930",
    "choice3": "1968",
    "choice4": "1924",
    "answer": 3
  },
  {
    "question": "What is LeMoyne-Owen College school's mascot?",
    "choice1": "The Bisons",
    "choice2": "The Aggies",
    "choice3": "The Tigers",
    "choice4": "The Magicians",
    "answer": 4
  },
  {
    "question": "In what city is LeMoyne-Owen College located?",
    "choice1": "Atlanta, Georgia",
    "choice2": "Memphis, Tennessee",
    "choice3": "Washington D.C.",
    "choice4": "Charlotte, North Carolina",
    "answer": 2
  }
];

const CORRECT_BONUS = 20;
const MAX_QUESTIONS = 4;

startGAME = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
};

getNewQuestion = () => {
    
    if(availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS){
      localStorage.setItem("mostRecentScore", score);
      return window.location.assign("/end.html");
     }
   questionCounter++;
  // questionCounterText.innerText = questionCounter + "/" + MAX_QUESTIONS;
  questionCounterText.innerText = `${questionCounter}/${MAX_QUESTIONS}`; 


    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach(choice => {
        const number = choice.dataset["number"];
        choice.innerText = currentQuestion["choice" + number];
    });
    
    availableQuestions.splice(questionIndex, 1);

    acceptingAnswers = true;
     
};

choices.forEach(choice => { 
    choice.addEventListener('click', e => {
        console.log(e.target);
        if(!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
       const selectedAnswer = selectedChoice.dataset["number"];
    

        /* const classToApply = "incorrect";
         if (selectedAnswer == currentQuestion.answer) {
          classToApply = "correct";
        } This is the long version of the code below \/ \/ \/  */

      const classToApply = selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

      if (classToApply === "correct"){
        incrementScore(CORRECT_BONUS);
      }

       selectedChoice.parentElement.classList.add(classToApply);
       setTimeout(  () => {
       selectedChoice.parentElement.classList.remove(classToApply);
       getNewQuestion();
       }, 1000);
     // console.log(classToApply);
    });   
 });

 incrementScore = num =>{
      score +=num;
      scoreText.innerText = score;
 }

startGAME();