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

var quizAnswers = [{answers: ["client", "server", "client and server", "none of the above"], correct: "client and server"}, {answers: ["alertBox(:'Hello User!')", "alert(Hello User!)", "confirm('Hello User!')",
"alert('Hello User!')"], correct: "alert('Hello User!')"}, {answers: ["{ }", "( )", "[ ]", "/ /"], correct: "{ }"}, {answers: ["if (x=2)", "if (x==2)", "if (!x=2)", "if {x=2}"], correct: "if (x==2)"}]

var a1Selection = a1.textContent;
var a2Selection = a2.textContent;
var a3Selection = a3.textContent;
var a4Selection = a4.textContent;
var answerSelections = [a1Selection, a2Selection, a3Selection, a4Selection]

/* console.log(quizAnswers[0].answers)
console.log(quizAnswers[0].correct) */

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

  /*   var a1Selection = a1.textContent;
    var a2Selection = a2.textContent;
    var a3Selection = a3.textContent;
    var a4Selection = a4.textContent; */
    //event listener on button click, creates variable from text content
    a1.addEventListener("click", answer = a1.textContent);
    a2.addEventListener("click", answer = a2.textContent);
    a3.addEventListener("click", answer = a3.textContent);
    a4.addEventListener("click", answer = a4.textContent);

    confirmAns()
}

// function to confirm selected answer with true answer
function confirmAns(answer){
    // iterates through quizAnswers to select index
    /* for (var i = 0, a = 0; i < quizAnswers.length && a < answerSelections.length; i++, a++) { */
    // if quizAnswers.answers[i] != matching 'correct' string, penalize timer
    /* if (answerSelections[a] == quizAnswers[liveQuestion - 1].correct){ */
        if (answer == quizAnswers[liveQuestion - 1].correct){
            secondsLeft = secondsLeft + 0;
            }
            else 
            secondsLeft = secondsLeft - 4;
                

   /*  else (quizAnswers[liveQuestion - 1].answers[i] != quizAnswers[liveQuestion - 1].correct)
        secondsLeft = secondsLeft - 5; */
        console.log("-4");
        
}

/* quizQuestions.questions[liveQuestion - 1] > 4; */

function recordScore() {
    if (secondsLeft < 0) {
        secondsLeft = 0;
    }
    var scoreInitials = prompt("Time is up! Your score is " + secondsLeft + " seconds remaining. Please enter your initials to record your score.");
    localStorage.setItem(scoreInitials, secondsLeft);
}

