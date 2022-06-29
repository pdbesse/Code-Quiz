var h1El = document.querySelector("#h1");
var quizContainer = document.querySelector(".quizcontainer");
var startButton = document.querySelector("#startbutton")
var quest = document.querySelector(".question");
var answersList = document.querySelector(".answerslist");
var a1 = document.querySelector("#a1");
var a2 = document.querySelector("#a2");
var a3 = document.querySelector("#a3");
var a4 = document.querySelector("#a4");
/* var ansBut = document.querySelector(".ansBut") */
var timer = document.querySelector(".timer");
var liveQuestion = 0;

var quizContent = [
    {   question: "JavaScript is a ________-side programming language.", 
        answer1: "client", 
        answer2: "server", 
        answer3: "client and server", 
        answer4: "none of the above",
        correct: "client and server"},
    {   question: "Which of the following will write the message 'Hello User!' in an alert box?",
        answer1: "alertBox(:'Hello User!')",
        answer2: "alert(Hello User!)",
        answer3: "confirm('Hello User!')",
        answer4: "alert('Hello User!')",
        correct: "alert('Hello User!')"},
    {   question: "Which of the following is used to enclose the 'work' a function will do?",
        answer1: "{ }", 
        answer2: "( )", 
        answer3: "[ ]", 
        answer4: "/ /",
        correct: "{ }"},
    {   question: "Which of the following is a correct 'if' statement to execute certain code if 'x' is equal to 2?",
        answer1: "if (x=2)", 
        answer2: "if (x==2)", 
        answer3: "if (!x=2)", 
        answer4: "if {x=2}",
        correct: "if (x==2)"}
]

/* console.log(quizContent[liveQuestion - 1].answer1)
console.log(quizContent[liveQuestion - 1].correct) */

startButton.addEventListener("click", start);

function start(){
    answersList.setAttribute("style", "display:flex");
    nextQA()
    timerStart()
    
}

// timer countdown function
var secondsLeft = 60;
function timerStart(){
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timer.textContent = secondsLeft + " seconds remaining...";

        if (secondsLeft <= 0 || liveQuestion == 5) /* ((quizContent[liveQuestion - 1]) > quizContent.length)) */ {
            
            clearInterval(timerInterval);
            recordScore();
        }
    }, 1000);
}

// button clicks advance to next Q+A's
a1.addEventListener("click", function(event){
    var selectedAns = event.target.textContent;
   /*  console.log(selectedAns); */
    if (selectedAns == quizContent[liveQuestion - 1].correct){
        secondsLeft = secondsLeft;
    } else {
        secondsLeft = secondsLeft - 15;
    }
    if (liveQuestion < 5) {
     nextQA()
    }
})

a2.addEventListener("click", function(event){
    var selectedAns = event.target.textContent;
    console.log(selectedAns);
    if (selectedAns == quizContent[liveQuestion - 1].correct){
        secondsLeft = secondsLeft;
    } else {
        secondsLeft = secondsLeft - 15;
    }
    if (liveQuestion < 5) {
        nextQA()
    }
})

a3.addEventListener("click", function(event){
    var selectedAns = event.target.textContent;
    console.log(selectedAns);
    if (selectedAns == quizContent[liveQuestion - 1].correct){
        secondsLeft = secondsLeft;
    } else {
        secondsLeft = secondsLeft - 15;
    }
    if (liveQuestion < 5) {
        nextQA()
    }
})

a4.addEventListener("click", function(event){
    var selectedAns = event.target.textContent;
    console.log(selectedAns);
    if (selectedAns == quizContent[liveQuestion - 1].correct){
        secondsLeft = secondsLeft;
    } else {
        secondsLeft = secondsLeft - 15;
    }
    if (liveQuestion < 5) {
        nextQA()
    }
})

// function to advance to next Q+A's from objects
// handler
// event.target
function nextQA(){
    liveQuestion = liveQuestion + 1;
    quest.textContent = quizContent[liveQuestion - 1].question;
    a1.textContent = quizContent[liveQuestion - 1].answer1;
    a2.textContent = quizContent[liveQuestion - 1].answer2;
    a3.textContent = quizContent[liveQuestion - 1].answer3;
    a4.textContent = quizContent[liveQuestion - 1].answer4;
}

// triggers prompt window to record initials and score; makes < 0 = 0
function recordScore() {
    answersList.setAttribute("style", "display:none");
    if (secondsLeft < 0) {
        secondsLeft = 0;
    }
    var scoreInitials = prompt("Time is up! Your score is " + secondsLeft + " seconds remaining. Please enter your initials to record your score.");
    localStorage.setItem(scoreInitials, secondsLeft);
    console.log("test")
}

