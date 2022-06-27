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

If the timer reaches 0, or the user reaches the conclusion of the quiz, the user will be prompted to enter his or her initials to record the score (seconds remaining) in the page's local storage.

![Usage GIF](./assets/usage.gif)

### Code Snippets

```
const lowChar = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
const upperChar = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","UV","W","X","Y","Z"]
const numbers = ["0","1","2","3","4","5","6","7","8","9"]
const symbols = ["!","@","#","$","%","^","&","*","(",")","[","]"]
```

This code block creats global arrays of the four character selection types: lower case, upper case, numbers, and symbols.

```
  var confirmLength = prompt("Choose a password length.")
    if (confirmLength < 8) {
      return alert("Password must be between 8 and 128 characters.");
    } else if (confirmLength > 128) {
      return alert("Password must be between 8 and 128 characters.");
    } else if (confirmLength >= 8 <= 128) {
      var confirmLow = confirm("Do you want to use lowercase letters?")
      var confirmUp = confirm("Do you want to use uppercase letters?")
      var confirmNum = confirm("Do you want to use numbers?")
      var confirmSym = confirm("Do you want to use special characters?")
        if (!confirmLow && !confirmUp && !confirmNum && !confirmSym) {
          return alert("You must select at least one character set!");
            }
    }
```
This code block prompts the user to choose a password length, returning an alert that the password must be between 8 and 128 characters if that condition is not met. It saves the inputted value in the var confirmLength, which comes into play later.

It then asks a series of confirmation questions, creationg a true/false value for each answer. If no selections are made, it returns an alert that at least one character set must be chosen.

```
var preRandPW = []
    if (confirmLow) {
      preRandPW = preRandPW.concat(lowChar)}
    if (confirmUp) {
      preRandPW = preRandPW.concat(upperChar)}
    if (confirmNum) {
      preRandPW = preRandPW.concat(numbers)}
    if (confirmSym) {
      preRandPW = preRandPW.concat(symbols)
    }
```

This code block creates the empty array preRandPW, and for each true value from the confirmation prompt, concatinates the corresponding character selection array into the empty array preRandPW.

```
var genPW = ""
    for (var i = 0; i < confirmLength; i++) {

    genPW = genPW + preRandPW[Math.floor(Math.random() * preRandPW.length)];
    }
    return genPW;
```

This code block creates a new empty string called genPW. It then runs a 'for loop' n times, where n = the value assied to confirmLength in the prompt. Each time the loop runs, it pulls a random element from the preRandPW array and adds it to the string genPW. Finally, it returns the randomly generated password to the window.

## Technology

Technology Used:
* [GitHub](https://github.com/)
* [GitBash](https://gitforwindows.org/)
* [Visual Studio Code](https://code.visualstudio.com/)
* [Javascipt](https://www.javascript.com/)
* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)

## Credits

All coding credited to Phillip Besse.  Javascript pseudocoded with Sufyaan Vaidya.

Websites Referenced:
* [W3 Schools - Arrays](https://www.w3schools.com/js/js_arrays.asp)
* [W3 Schools - Functions](https://www.w3schools.com/js/js_functions.asp)
* [W3 Schools - JS Operators](https://www.w3schools.com/js/js_operators.asp)
* [W3 Schools - For Loops](https://www.w3schools.com/js/js_loop_for.asp)
* [W3 Schools - Math.random](https://www.w3schools.com/js/js_random.asp)
* [W3 Schools - Math.floor](https://www.w3schools.com/jsref/jsref_floor.asp)
* [W3 Schools - concatenate](https://www.w3schools.com/jsref/jsref_concat_string.asp)
* [GeeksforGeeks](https://www.geeksforgeeks.org/how-to-generate-a-random-password-using-javascript/)
* [Javascript.info Alert, Prompt, Confirm](https://javascript.info/alert-prompt-confirm)

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
