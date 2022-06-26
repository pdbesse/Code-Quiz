var body = document.body;
var h1El = document.createElement("h1");
var quizContainEl = document.createElement("div");
var startButton = document.createElement("button")
var quest = document.createElement("h2");
var answersContainEl = document.createElement("div");
var answersList = document.createElement("ul");
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");

var quizQuestions = {
    q1: "JavaScript is a ________-side programming language.",
    q2: "Which of the following will write the message 'Hello User!' in an alert box?",
    q3: "Which of the following is used to enclose the 'work' a function will do?",
    q4: "Which of the following is a correct 'if' statement to execute certain code if 'x' is equal to 2?",
}

var quizAnswers = {
    q1a1: "client",
    q1a2: "server",
    q1a3: "both", // correct
    q1a4: "none of the above",
    q2a1: "alertBox(:'Hello User!')",
    q2a2: "alert(Hello User!)",
    q2a3: "confirm('Hello User!')",
    q2a4: "alert('Hello User!')", // correct
    q3a1: "{}", // correct
    q3a2: "()",
    q3a3: "[]",
    q3a4: "//",
    q4a1: "if (x=2",
    q4a2: "if (x==2)", // correct
    q4a3: "if (!x=2)",
    q4a4: "if (x=2_",
}


body.appendChild(h1El);
body.appendChild(quizContainEl);
quizContainEl.appendChild(quest);
quizContainEl.appendChild(answersContainEl);
answersContainEl.appendChild(answersList);
answersList.appendChild(li1);
answersList.appendChild(li2);
answersList.appendChild(li3);
answersList.appendChild(li4);
quizContainEl.appendChild(startButton);

h1El.textContent = "Code Quiz!";
startButton.textContent = "Start Quiz";

console.log("this");

body.setAttribute("style", "background-color: #3687d9; font-family: Verdana, Geneva, Tahoma, sans-serif;");
quizContainEl.setAttribute("style", "display: flex; align-items: center; justify-content: center;");
quest.setAttribute("style", "display: flex; align-items: center; justify-content; center;");
answersContainEl.setAttribute("style", "display: flex; align-items: center; justify-content: center;");
answersList.setAttribute("style", "list-style:none; display: flex;");
li1.setAttribute("style", "display: flex; align-items: lef;");
li2.setAttribute("style", "display: flex; align-items: left;");
li3.setAttribute("style", "display: flex; align-items: left;");
li4.setAttribute("style", "display: flex; align-items: left;");
/* startButton.setAttribute("id", "start") */

startButton.addEventListener("click", function(){
    quest.textContent = quizQuestions.q1
    li1.textContent = quizAnswers.q1a1
    li2.textContent = quizAnswers.q1a2
    li3.textContent = quizAnswers.q1a3
    li4.textContent = quizAnswers.q1a4


})

console.log(window);