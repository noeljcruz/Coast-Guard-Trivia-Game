
var userCorrect = 0;
var userIncorrect = 0;
var seconds = 180;
var intervalId;
var unanswered = 5;
var b = false;

$(document).ready(function () {

    $("#questions").hide();

    $("#start").click(function () {
        $(this).hide();
        $("#questions").show();

        function run() {
            clearInterval(intervalId);
            intervalId = setInterval(decrement, 1000);
        }

        function decrement() {
            seconds--;
            $("#seconds").text(seconds + " (s)");
            if (seconds === 0) {
                stop();
                return;
            }
        }
        run()
    });

    $("#finalScore").hide();

    function determineScore(userAnswer, solution) {
        if (!userAnswer) {
            return;
        }
        if (userAnswer === solution) {
            userCorrect++;
            unanswered--;
        } else {
            userIncorrect++;
            unanswered--;
        }
    }

    $("#submit").click(function () {
        var answerOne = $('input[type="radio"][name="year"]:checked').val();
        var answerTwo = $('input[type="radio"][name="mission"]:checked').val();
        var answerThree = $('input[type="radio"][name="actor"]:checked').val();
        var answerFour = $('input[type="radio"][name="motto"]:checked').val();
        var answerFive = $('input[type="radio"][name="nickname"]:checked').val();

        determineScore(parseInt(answerOne), 3);
        determineScore(parseInt(answerTwo), 1);
        determineScore(parseInt(answerThree), 2);
        determineScore(parseInt(answerFour), 4);
        determineScore(parseInt(answerFive), 2);

        stop();
    });

    function hideShowScoreboard() {
        $("#questions").hide();
        $("#finalScore").show();
        $("#finishedButton").hide();
    }

    function stop() {
        clearInterval(intervalId)
        scoreBoard();
        hideShowScoreboard();
    }

    var scoreBoard = function () {
        $("#userCorrect").text("Correct Answers: " + userCorrect)
        $("#userIncorrect").text("Incorrect Answers: " + userIncorrect)
        $("#unanswered").text("Unanswered: " + unanswered);
    }

});