




let questions = [
    {
        question: "Which of these countries killed 2 - 4.5 million people in the so called 'Landlord Purges'",
        imgSrc: "Assets/Images/XiHand.png",
        choiceA: "Switzerland",
        choiceB: "Costa Rica",
        choiceC: "Communist China",
        correct: "C",
    }, {
        question: "To date, which of thse countries has detained up to 1 million people (mostly Muslims) for the express purpose of 'communist reeducation'?",
        imgSrc: "Assets/Images/XiLaugh.jpg",
        choiceA: "New Zealand",
        choiceB: "Communist China",
        choiceC: "Greenland",
        correct: "B",
    }, {
        question: "Which of these countries executed approx. 1000 people in 2018 (U.S. executions: 23)?",
        imgSrc: "Assets/Images/XiApple.jpg",
        choiceA: "Montenegro",
        choiceB: "Greece",
        choiceC: "Communist China",
        correct: "C",
    }, {
        question: "Which of these countries has recently implimented a technoligically distopian social credit score system for the pupose of 'improving society'?",
        imgSrc: "Assets/Images/XiandKim.jpg",
        choiceA: "Communist China",
        choiceB: "El Salvador",
        choiceC: "Jamaica",
        correct: "A",
    }

]

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 1;
const questionTime = 10;
const gaugeWidth = 150;
const gaugeUnit = gaugeWidth / questionTime;
let TIMER;
let score = 0;



function renderQuestion() {
    let q = questions[runningQuestion];

    $("#question").html(q.question);
    $("#qImg").html("<img src=" + q.imgSrc + ">");
    $("#A").html(q.choiceA);
    $("#B").html(q.choiceB);
    $("#C").html(q.choiceC);
}




renderQuestion();
$("#quiz").css("display", "block");
renderProgress();
renderCounter();
TIMER = setInterval(renderCounter, 1000);

//render progress
function renderProgress() {
    for (var index = 0; index <= lastQuestion; index++) {
        $("#progress").append("<div class='prog' id=" + index + "></div>");
    }
}




//counter render 
function renderCounter() {
    if (count <= questionTime) {
        $("#counter").html(count);
        //The line below is an attempt to make the time bar proress
        $("timeGauge").width(count * gaugeUnit + "px");
        count++
    } else {
        count = 1;

        answerIsWrong();
        if (runningQuestion < lastQuestion) {
            runningQuestion++;
            renderQuestion();
        } else {
            clearInterval(TIMER);

        }

    }
}

function checkAnswer(answer) {
    if (answer == questions[runningQuestion].correct) {
        score++
        answerIsCorrect();
    } else {
        answerIsWrong();

    }
    count = 1;
    if (runningQuestion < lastQuestion) {
        runningQuestion++;
        renderQuestion();
    } else {
        clearInterval(TIMER);
    }
}



function answerIsCorrect() {
    document.getElementById(runningQuestion).style.backgroundColor = "#0F0";
}


function answerIsWrong() {
    document.getElementById(runningQuestion).style.backgroundColor = "#F00";
}