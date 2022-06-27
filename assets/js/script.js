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
var liveQuestion = 1;

var quizQuestions = {
    questions: ["JavaScript is a ________-side programming language.", "Which of the following will write the message 'Hello User!' in an alert box?", "Which of the following is used to enclose the 'work' a function will do?", "Which of the following is a correct 'if' statement to execute certain code if 'x' is equal to 2?"]
}

quizAnswers = [{answers: ["client", "server", "both", "none of the above",], correct: "both"}, {answers: ["alertBox(:'Hello User!')", "alert(Hello User!)", "confirm('Hello User!')",
"alert('Hello User!')",], correct: "alert('Hello User!')"}, {answers: ["{}", "()", "[]", "//",], correct: "{}"}, {answers: ["if (x=2", "if (x==2)", "if (!x=2)", "if (x=2_",], correct: "if (x==2"}]

/* console.log(quizAnswers[0].answers)
console.log(quizAnswers[0].correct) */

/* var currentQ = 0;
var prevQ = quizQuestions.length - 1; */

startButton.addEventListener("click", start);

function start(){
    answersList.setAttribute("style", "display:flex");
    quest.textContent = quizQuestions.questions[liveQuestion - 1];
    a1.textContent = quizAnswers[liveQuestion - 1].answers[0];
    a2.textContent = quizAnswers[liveQuestion - 1].answers[1];
    a3.textContent = quizAnswers[liveQuestion - 1].answers[2];
    a4.textContent = quizAnswers[liveQuestion - 1].answers[3];
   
    timerStart()
    
}

// timer countdown function
var secondsLeft = 60;
function timerStart(){
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timer.textContent = secondsLeft;

        if (secondsLeft <= 0) {
            clearInterval(timerInterval);
            recordScore();
        }
    }, 1000);
}

// button clicks advance to next Q+A's
a1.addEventListener("click", nextQA);
a2.addEventListener("click", nextQA);
a3.addEventListener("click", nextQA);
a4.addEventListener("click", nextQA);

// function to advance to next Q+A's from objects
function nextQA(){
    liveQuestion = liveQuestion + 1;
    quest.textContent = quizQuestions.questions[liveQuestion - 1];
    a1.textContent = quizAnswers[liveQuestion - 1].answers[0];
    a2.textContent = quizAnswers[liveQuestion - 1].answers[1];
    a3.textContent = quizAnswers[liveQuestion - 1].answers[2];
    a4.textContent = quizAnswers[liveQuestion - 1].answers[3];

    confirmAns()
}

// function to confirm selected answer with true answer
function confirmAns(){
    // iterates through quizAnswers to select index
    for (var i = 0; i < quizAnswers.length; i++) {
    // if quizAnswers.answers[i] != matching 'correct' string, penalize timer
    if (quizAnswers[liveQuestion - 1].answers[i] != quizAnswers[liveQuestion - 1].correct[i])
        secondsLeft = secondsLeft - 10;
    }
}

function recordScore() {
    if (secondsLeft < 0){
        secondsLeft = 0;
    }
    var scoreInitials = prompt("Time is up! Your score is " + secondsLeft + " seconds remaining. Please enter your initials to record your score.");
    localStorage.setItem(scoreInitials, secondsLeft);
}

