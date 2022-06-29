# Code-Quiz

## Description

This page displays a short, in-browser JavaScript code quiz. It was created to mimic a coding knowledge assessment one might typically encounter in the job interview process. 

[Code Quiz](https://pdbesse.github.io/Code-Quiz/)

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Technology](#technology)
* [Credits](#credits)

## Installation

The website has been installed and deployed on [Github](https://github.com/).

## Usage

This website contains a short quiz designed to test basic Javascript knowledge. The user is presented with a blank page and a 'Start Quiz!' button. Upon clicking the quiz, a 60 second countdown starts, and a question and four buttons are populated. Each button contains a possible answer to the question.

Upon clicking one of the answer buttons, the countdown will deduct time remaining for an incorrect answer. The next question and series of possible answers will populate as well.

If the timer reaches 0, or the user reaches the conclusion of the quiz, the user will be prompted to enter his or her initials to record the score (seconds remaining) in the browser's local storage.

![Usage GIF](./assets/usage.gif)

### Code Snippets

```
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
```

This code block creates an array of objects. Each object contains a question and corresponding answers, as well as the correct answer.

```
var secondsLeft = 60;
function timerStart(){
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timer.textContent = secondsLeft + " seconds remaining...";

        if (secondsLeft <= 0 || liveQuestion == 5) {
            // stop timer and record score 
            clearInterval(timerInterval);
            recordScore();
        }
    }, 1000);
}
```

This function starts a 60 second countdown timer and loads it into the timer box. To end the game, if the timer is less than or equal to zero, or the end of the quiz content array is reached, the recordScore function is executed.

```
a1.addEventListener("click", function(event){
    var selectedAns = event.target.textContent;
    if (selectedAns == quizContent[liveQuestion - 1].correct){
        secondsLeft = secondsLeft;
    } else {
        secondsLeft = secondsLeft - 15;
    }
    if (liveQuestion < 5) {
     nextQA()
    }
})
```

This code block is repeated for each answer button. Upon clicking the button, a variable is created from the text content within the clicked button. If the text content matches the current object's 'correct' key value, no time is deducted from the countdown. If it does not match, 15 seconds are deducted.

If the current question is not yet at the end of the array, the nextQA function is executed.

```
function nextQA(){
    liveQuestion = liveQuestion + 1;
    quest.textContent = quizContent[liveQuestion - 1].question;
    a1.textContent = quizContent[liveQuestion - 1].answer1;
    a2.textContent = quizContent[liveQuestion - 1].answer2;
    a3.textContent = quizContent[liveQuestion - 1].answer3;
    a4.textContent = quizContent[liveQuestion - 1].answer4;
}
```

This function takes the previous liveQuestion value and adds 1 to it.  It then loads into the question box and each answer option button the corresponding key value from the next object.

```
function recordScore() {
    answersList.setAttribute("style", "display:none");
    if (secondsLeft < 0) {
        secondsLeft = 0;
    }
    var scoreInitials = prompt("Time is up! Your score is " + secondsLeft + " seconds remaining. Please enter your initials to record your score.");
    localStorage.setItem(scoreInitials, secondsLeft);
    window.location.reload();
}

```

This function hides the answer buttons. It then converts the user's score to 0 if the timer was less than 0. Next, it display's the user's score and prompts the user for his or her initials. It loads these into the browser's local storage, and ends by loading the page.

## Technology

Technology Used:
* [GitHub](https://github.com/)
* [GitBash](https://gitforwindows.org/)
* [Visual Studio Code](https://code.visualstudio.com/)
* [Javascipt](https://www.javascript.com/)
* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [W3 CSS](https://www.w3.org/Style/CSS/Overview.en.html)

## Credits

All coding credited to Phillip Besse.  Javascript pseudocoded with Maverick Wong, Brandon Espinosa, and Manuel Nunes.

Questions and answers credited to [Data Flair Javascript Quiz](https://data-flair.training/blogs/javascript-quiz/).

Websites Referenced:
* [W3 Schools - Arrays](https://www.w3schools.com/js/js_arrays.asp)
* [W3 Schools - Functions](https://www.w3schools.com/js/js_functions.asp)
* [W3 Schools - Objects](https://www.w3schools.com/js/js_objects.asp)
* [MDN Web Docs - local.Storage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
* [Stack Overflow - Hide HTML Element](https://stackoverflow.com/questions/67332269/javascript-html-hide-div-until-button-click)

## License

Phillip Besse's Secure Password Generator is licensed under the [MIT License](https://choosealicense.com/licenses/mit/).

MIT License

Copyright (c) 2022 Phillip Besse

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
