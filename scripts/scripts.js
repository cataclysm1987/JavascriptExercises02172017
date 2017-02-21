//Calculate area of triangle using Heron's Formula
//Heron's formula: Calculate s. s = (a+b+c)/2
//Now calculate area. A = SquareRoot(s(s-a)(s-b)(s-c)
//If triangle is impossible, throw an error.

function sleepIn(weekday, vacation) {
    console.log(weekday);
    console.log(vacation);
    if (vacation == true) {
        return true;
    } else if (weekday == false) {
        return true;
    } else {
        return false;
    }
}

function checkSleepIn() {
    var weekday = document.getElementById("weekdayyes").checked;
    var vacation = document.getElementById("vacationyes").checked;
    if (sleepIn(weekday, vacation) == true) {
        document.getElementById("answer1").innerHTML = "You can sleep in!";
    } else {
        document.getElementById("answer1").innerHTML = "You can't sleep in!";
    }
}

function emojiTrouble(e1Smile, e2Smile) {
    console.log(e1Smile);
    console.log(e2Smile);
    if (e1Smile == true && e2Smile == true) {
        return true;
    } else if (e1Smile == false && e2Smile == false) {
        return true;
    } else {
        return false;
    }
}

function checkEmojiTrouble() {
    var e1Smile = document.getElementById("emoji1yes").checked;
    var e2Smile = document.getElementById("emoji2yes").checked;
    if (emojiTrouble(e1Smile, e2Smile) == true) {
        document.getElementById("answer2").innerHTML = "There is trouble!";
    } else {
        document.getElementById("answer2").innerHTML = "There is no trouble!";
    }
}

function fillInTheCode() {
    var x = new XMLHttpRequest();
    x.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("demo").innerHTML = this.responseText;
        }
    };
    x.open("GET", "sample.txt", true);
    x.send();
}
