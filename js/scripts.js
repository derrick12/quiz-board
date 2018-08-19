function check(event) {

    var q1 = document.quiz.q1.value;
    var q2 = document.quiz.q2.value;
    var q3 = document.quiz.q3.value;
    var score = 0;

    if (q1 == "HTML") {
        score++;
    }

    if (q2 == "ECMAscript") {
        score++;
    }

    if (q3 == "NO") {
        score++;
    }

    if (q4 == "Js") {
        score++;
    }

    if (q5 == "YES") {
        score++;
    }


    if (q6 == "script tag") {
        score++;
    }

    if (q7 == "false") {
        score++;
    }

    if (q7 == "Conditional statements") {
        score++;
    }



    var comments = ["Great Work!", "Average.", "You can do better."];
    var images = ["img/high_five.gif", "img/meh.gif", "img/sad.gif"];

    var range = 0;

    if (score < 1) {
        range = 2;
    }

    if (score > 0 && score < 4) {
        range = 1;
    }

    if (score > 4) {
        range = 0;
    }

    document.getElementById("scoreResults").style.visibility = "visible";
    document.getElementById("quiz").style.visibility = "hidden"

    document.getElementById("comments").innerHTML = comments[range];
    document.getElementById("image").src = images[range];
    document.getElementById("displayScore").innerHTML = "Your quiz score is : " + score;
    event.preventDefault();
}








/*
$(document).ready(function() {
    $("#blanks form").submit(function(event) {
        var answerInput = $("input:radio[name=answer]:checked").val();
        $(".answer").text(answerInput);

        $("#scoreresults").show();

        event.preventDefault();
    });
});
*/


/*
$(document).ready(function() {
    $("#blanks form").submit(function(event) {
        var person1Input = $("input#person1").val();
        var person2Input = $("input#person2").val();
        var animalInput = $("input#animal").val();
        var exclamationInput = $("input#exclamation").val();
        var verbInput = $("input#verb").val();
        var nounInput = $("input#noun").val();
        $(".person1").text(person1Input);
        $(".person2").text(person2Input);
        $(".animal").text(animalInput);
        $(".exclamation").text(exclamationInput);
        $(".verb").text(verbInput);
        $(".noun").text(nounInput);

        $("#story").show();

        event.preventDefault();
    });
});

*/