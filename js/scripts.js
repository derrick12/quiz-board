function check(event) {

    var q1 = document.quiz.q1.value;
    var q2 = document.quiz.q2.value;
    var q3 = document.quiz.q3.value;
    var score = 0;

    if (q1 == "script") {
        score++;
    }

    if (q2 == "ECMAscript") {
        score++;
    }

    if (q3 == "head") {
        score++;
    }

    var comments = ["Great Work!", "Average.", "You can do better."];
    var images = ["img/high_five.gif", "img/meh.gif", "img/sad.gif"];

    var comRange = 0;

    if (score < 1) {
        comRange = 2;
    }

    if (score > 0 && score < 3) {
        comRange = 1;
    }

    if (score > 2) {
        comRange = 0;
    }


    document.getElementById("scoreResults").style.visibility = "visible";
    document.getElementById("quiz").style.visibility = "hidden"

    document.getElementById("comments").innerHTML = comments[comRange];
    document.getElementById("image").src = images[comRange];
    document.getElementById("displayScore").innerHTML = "Your quiz score is : " + score;
    event.preventDefault();
}