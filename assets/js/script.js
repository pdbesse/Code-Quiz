var h1El = document.querySelector("#h1");
var quizContainer = document.querySelector(".quizcontainer");
var startButton = document.querySelector("#startbutton")
var quest = document.querySelector(".question");
var answersList = document.querySelector(".answerslist");
var a1 = document.querySelector("#a1");
var a2 = document.querySelector("#a2");
var a3 = document.querySelector("#a3");
var a4 = document.querySelector("#a4");

var quizQuestions = {
    q1: "JavaScript is a ________-side programming language.",
    q2: "Which of the following will write the message 'Hello User!' in an alert box?",
    q3: "Which of the following is used to enclose the 'work' a function will do?",
    q4: "Which of the following is a correct 'if' statement to execute certain code if 'x' is equal to 2?",
}

var q1Answers = {
    q1a1: "client", isCorrect: false,
    q1a2: "server", isCorrect: false,
    q1a3: "both", isCorrect: true,
    q1a4: "none of the above", isCorrect: false,}

var q2Answers = {
    q2a1: "alertBox(:'Hello User!')", isCorrect: false,
    q2a2: "alert(Hello User!)", isCorrect: false,
    q2a3: "confirm('Hello User!')", isCorrect: false,
    q2a4: "alert('Hello User!')", isCorrect: true,}
    
var q3Answers = {
    q3a1: "{}", isCorrect: true,
    q3a2: "()", isCorrect: false,
    q3a3: "[]", isCorrect: false,
    q3a4: "//", isCorrect: false,}

var q4Answers = {
    q4a1: "if (x=2)", isCorrect: false,
    q4a2: "if (x==2)", isCorrect: true,
    q4a3: "if (!x=2)", isCorrect: false,
    q4a4: "if (x=2)", isCorrect: false,
}

var trueFalse = {
    true: true,
    false: false,
}

var currentQ = 0;
var prevQ = quizQuestions.length - 1;

startButton.addEventListener("click", function Quiz(){
    quest.textContent = quizQuestions.q1;
    a1.textContent = quizAnswers.q1a1;
    a2.textContent = quizAnswers.q1a2;
    a3.textContent = quizAnswers.q1a3;
    a4.textContent = quizAnswers.q1a4;
   

    
})



