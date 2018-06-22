//generate question objects
var number = 10;
var intervalId;

var correct = 0;
        var incorrect = 0;
        var unanswered = 0;

var questions = [
    {
        question: "How many seconds is there in a year?",
        choices: ["91,557,600", "31,557,600", "11,557,600"],
        answer: "31,557,600"
    },

    {
        question: "What is the capital city of China?",
        choices: ["Beijing", "Tokyo", "Jakarta"],
        answer: "Beijing"
    },

    {
        question: "Who is the author of Sherlock Holmes?",
        choices: ["Agatha Christie", "Conan A. Doyle", "Edgar Allan Poe"],
        answer: "Conan A. Doyle"
    },

    {
        question: "What is the tallest mountain in the USA?",
        choices: ["Mt. McKinley", "Stone Mountain", "Mt. Foraker"],
        answer: "Mt. McKinley"
    }];

function hidestartbtn() {
    $("#startBtn").hide();
}

function triviaTimer() {
    intervalId = setInterval(decrement, 1000);
    function decrement() {
        number --;
        $("#show-timer").html("<h2>" + number + "</h2>")
        if(number === 0) {
            stop();
            alert("Time's up!");
            calculatescore();
        }
    }
}

function stop() {
    clearInterval(intervalId);
}

function gengame() {
    for (var j = 0; j < questions.length; j++) {
        var line1 = $("<div>");
        var ques = questions[j];
        line1.append("<p><b>" + ques.question + "</b></p>");
        $("#question" + j).append(line1);
        var line2 = $("<div>");
        for (var i = 0; i < ques.choices.length; i++) {
            var newLabel = $("<label>");
            var radioBtn = $("<input type='radio'>");
            radioBtn.attr("name", "section" + i).attr("value", ques.choices[i]);
            newLabel.text(ques.choices[i]);
            line2.append(radioBtn);
            line2.append(newLabel);
        }
        $("#question" + j).append(line2);
    }
}

function hidetrivia() {
    var triviaDiv = $("#trivia");
    triviaDiv.hide();
}

function calculatescore() {
    for (var j = 0; j < questions.length; j++) {
        var qs = questions[j];
        console.log(qs);
        for (var i = 0; i < qs.choices.length; i++) {
            var selected = $("#question" + j + " input[type='radio'][name='section" + i + "']:checked");
            console.log(selected.val());
            // console.log(qs.answer)
            if(selected.length>0) {
                if(selected.val() == qs.answer) {
                correct++;
                // console.log("True");
                } else {
                incorrect++;
                // console.log("False");
                }
            } else {
                unanswered++
                // console.log("Not answered");
            };
            // console.log(correct);
        }
        console.log("Answer: " + qs.answer);
        console.log(correct);
    }
    hidetrivia();
    $(".wrapper").text("You scored "+ correct +" out of 4");
}

$(document).ready(function() {
    $("#submitBtn").hide();
})

$("#startBtn").click(function () {
    hidestartbtn();
    triviaTimer();
    $("#submitBtn").show();
    gengame();
    })

$("#submitBtn").click(function() {
    calculatescore();
})



$("#question1 input[type='radio'][name='section1']")