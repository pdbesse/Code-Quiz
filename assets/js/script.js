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
var liveQuestion = 0;

// creates quiz content in an array; each object within array contains question, 
// answer options, and the correct answer
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

// listens for start button click
startButton.addEventListener("click", start);

// start quiz function
function start(){
    // reveals answer buttons
    answersList.setAttribute("style", "display:flex");
    //loads next question and answer options
    nextQA()
    // starts timer
    timerStart()
}

// timer countdown function
var secondsLeft = 60;
function timerStart(){
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timer.textContent = secondsLeft + " seconds remaining...";

        // if the timer reaches zero or the live question reaches the end of the array
        if (secondsLeft <= 0 || liveQuestion == 5) {
            // stop timer and record score 
            clearInterval(timerInterval);
            recordScore();
        }
    }, 1000);
}

// listen for click on a1 button
a1.addEventListener("click", function(event){
    // create variable from text content of clicked button
    var selectedAns = event.target.textContent;
    // if the text content of clicked button == the correct key value, no timer penalty
    if (selectedAns == quizContent[liveQuestion - 1].correct){
        secondsLeft = secondsLeft;
      // if the text content of clicked button !== the correct key value (wrong answer given), 
      // deduct 15 seconds from timer
    } else {
        secondsLeft = secondsLeft - 15;
    }
    // if live question is not yet at the end of the array, load next question and answer options
    if (liveQuestion < 5) {
     nextQA()
    }
})

a2.addEventListener("click", function(event){
    // create variable from text content of clicked button
    var selectedAns = event.target.textContent;
    // if the text content of clicked button == the correct key value, no timer penalty
    if (selectedAns == quizContent[liveQuestion - 1].correct){
        secondsLeft = secondsLeft;
      // if the text content of clicked button !== the correct key value (wrong answer given), 
      // deduct 15 seconds from timer
    } else {
        secondsLeft = secondsLeft - 15;
    }
    // if live question is not yet at the end of the array, load next question and answer options
    if (liveQuestion < 5) {
     nextQA()
    }
})

a3.addEventListener("click", function(event){
    // create variable from text content of clicked button
    var selectedAns = event.target.textContent;
    // if the text content of clicked button == the correct key value, no timer penalty
    if (selectedAns == quizContent[liveQuestion - 1].correct){
        secondsLeft = secondsLeft;
      // if the text content of clicked button !== the correct key value (wrong answer given), 
      // deduct 15 seconds from timer
    } else {
        secondsLeft = secondsLeft - 15;
    }
    // if live question is not yet at the end of the array, load next question and answer options
    if (liveQuestion < 5) {
     nextQA()
    }
})

a4.addEventListener("click", function(event){
    // create variable from text content of clicked button
    var selectedAns = event.target.textContent;
    // if the text content of clicked button == the correct key value, no timer penalty
    if (selectedAns == quizContent[liveQuestion - 1].correct){
        secondsLeft = secondsLeft;
      // if the text content of clicked button !== the correct key value (wrong answer given), 
      // deduct 15 seconds from timer
    } else {
        secondsLeft = secondsLeft - 15;
    }
    // if live question is not yet at the end of the array, load next question and answer options
    if (liveQuestion < 5) {
     nextQA()
    }
})

// function to load next question and answer options
function nextQA(){
    // add 1 to live question value
    liveQuestion = liveQuestion + 1;
    // load question from the next object into question element
    quest.textContent = quizContent[liveQuestion - 1].question;
    // load answer option 1 from the next object into a1 button
    a1.textContent = quizContent[liveQuestion - 1].answer1;
    // load answer option 2 from the next object into a2 button
    a2.textContent = quizContent[liveQuestion - 1].answer2;
    // load answer option 3 from the next object into a3 button
    a3.textContent = quizContent[liveQuestion - 1].answer3;
    // load answer option 4 from the next object into a4 button
    a4.textContent = quizContent[liveQuestion - 1].answer4;
}   

// function to record score
function recordScore() {
    // hide answer buttons
    answersList.setAttribute("style", "display:none");
    // if timer < 0, make timer = 0
    if (secondsLeft < 0) {
        secondsLeft = 0;
    }
    // prompt player for initials to record score
    var scoreInitials = prompt("Time is up! Your score is " + secondsLeft + " seconds remaining. Please enter your initials to record your score.");
    // store player initials and score in local storage
    localStorage.setItem(scoreInitials, secondsLeft);
    // reload window
    window.location.reload();
}

