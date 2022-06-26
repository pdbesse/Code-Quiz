var h1El = document.querySelector("#h1");
var quizContainer = document.querySelector(".quizcontainer");
var startButton = document.querySelector("#startbutton")
var quest = document.querySelector(".question");
var answersList = document.querySelector(".answerslist");
var a1 = document.querySelector("#a1");
var a2 = document.querySelector("#a2");
var a3 = document.querySelector("#a3");
var a4 = document.querySelector("#a4");
var timer = document.querySelector(".timer");

/* var quizQuestions = {
    q1: "JavaScript is a ________-side programming language.",
    q2: "Which of the following will write the message 'Hello User!' in an alert box?",
    q3: "Which of the following is used to enclose the 'work' a function will do?",
    q4: "Which of the following is a correct 'if' statement to execute certain code if 'x' is equal to 2?",
} */

var liveQuestion = 1

var quizQuestions = {
    questions: ["JavaScript is a ________-side programming language.", "Which of the following will write the message 'Hello User!' in an alert box?", "Which of the following is used to enclose the 'work' a function will do?", "Which of the following is a correct 'if' statement to execute certain code if 'x' is equal to 2?"]
}

/* var quizAnswers = {
    answers: ["client", "server", "both", "none of the above", "alertBox(:'Hello User!')", "alert(Hello User!)", "confirm('Hello User!')",
    "alert('Hello User!')", "{}", "()", "[]", "//", "if (x=2", "if (x==2)", "if (!x=2)", "if (x=2_"]
} */

quizAnswers = [{answers: ["client", "server", "both", "none of the above",], answer: "both"}, {answers: ["alertBox(:'Hello User!')", "alert(Hello User!)", "confirm('Hello User!')",
"alert('Hello User!')",], answer: "alert('Hello User!')"}, {answers: ["{}", "()", "[]", "//",], answer: "{}"}, {answers: ["if (x=2", "if (x==2)", "if (!x=2)", "if (x=2_",], answer: "if (x==2"}]

console.log(quizAnswers[0].answers)

/* var currentQ = 0;
var prevQ = quizQuestions.length - 1; */

startButton.addEventListener("click", function Quiz(){
    quest.textContent = quizQuestions.questions[liveQuestion - 1];
    a1.textContent = quizAnswers[liveQuestion - 1].answers[0];
    a2.textContent = quizAnswers[liveQuestion - 1].answers[1];
    a3.textContent = quizAnswers[liveQuestion - 1].answers[2];
    a4.textContent = quizAnswers[liveQuestion - 1].answers[3];

 /*    a1.addEventListener("click", function (){
        next()
    });
    a2.addEventListener("click", function (){
        next()
    });
    a3.addEventListener("click", function (){
        next()
    });
    a4.addEventListener("click", function (){
        next()
    }); */
   
    timerStart()
    
})

// timer countdown function
var secondsLeft = 60;
function timerStart(){
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timer.textContent = secondsLeft;

        if(secondsLeft === 0) {
            clearInterval(timerInterval);
        }
    }, 1000)
    console.log(secondsLeft);
}

// function to advance question by 1 and answers by 4 from q/a objects
/* 
function next(){
    for (var i=0; i < quizQuestions.length; i++){
        quest.textContent = quizQuestions.[i];
    }
    for (var i=0; i < quizAnswers.length; i+=4) {
        a1.textContent = quizAnswers[i];
        a2.textContent = quizAnswers[i];
        a3.textContent = quizAnswers[i];
        a4.textContent = quizAnswers[i];
    }

} */



