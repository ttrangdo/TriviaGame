// The page will reveal the number of questions that players answer correctly and incorrectly.
//Don't let the player pick more than one answer per question.
//Don't forget to include a countdown timer.
var correct = 0;

var incorrect = 0;

var unanswered = 0;

var questionIndex = 0;

var counter=30;

var interval;

$('#game-area').on('click', '#submitButton', function(){
    var userSelection = getUserSelection();
    clearInterval(interval);
    if(userSelection === rsQuestion[questionIndex].correctAnswer) {
        // handle correct answer behavior
        correct++;
        questionIndex++;
        displayMessage("<br>"+ "<br>" + "GOOD JOB, SON.");
        setTimeout(function() {displayQuestion();}, 2000);
    } else if(userSelection === -1) {
        // handle unanswered behavior here
        unanswered++;
        questionIndex++;
        displayMessage("<br>"+ "<br>" + "PICK AN ANSWER NEXT TIME.");
        setTimeout(function() {displayQuestion();}, 2000);
    } else {
        // handle incorrect behavior here
        incorrect++;
        questionIndex++;
        displayMessage("<br>"+ "<br>" + "GOVERNMENT IS FOR FOOLS. WRONG ANSWER.");
        setTimeout(function() {displayQuestion();}, 2000);
    }
});


var rsQuestion = [
{
    question: "Finish the quote: Never half ass two things,",
    choices: [
        "A. Half assing is dangerous",
        "B. Real men are able to multi-task",
        "C. Whole ass one thing", 
        "D. Half ass three things" 
    ],
    correctAnswer: 2, 
}, 
{
    question:"Who is Ron Swanson's famous alter ego?",
    choices: [
        "A. Chief Ken Hotate",
        "B. Duke Silver",
        "C. Burt Macklin, FBI",
        "D. Little Sebastian"
    ],
    correctAnswer: 1,
}, 
{
    question:"Which of the following is NOT one of Ron Swanson's hobbies?",
    choices: [
        "A. Woodworking",
        "B. Mini-golfing",
        "C. Eating bacon and eggs",
        "D. Hunting"
    ],
    correctAnswer: 1,
}, 
{
    question:"What snack is known as a 'Swanson' around Pawnee?",
    choices: [
        "A. A turkey leg wrapped in bacon",
        "B. Double patty burger with barbeque sauce and extra bacon",
        "C. 2 Porkchops, medium-rare, covered in gravy",
        "D. A 16oz T-bone steak and a slab of potato salad"
    ],
    correctAnswer: 0,
}, {
    question:" Where is the most special place on earth to Ron Swanson?",
    choices: [
        "A. Rent-A-Swag",
        "B. Pawnee City Hall",
        "C. The Bulge",
        "D. Mulligan's Steakhouse"
    ],
    correctAnswer: 3,
}, 
{
    question:"What activity does Ron Swanson secretly love doing?",
    choices: [
        "A. Making his own beer",
        "B. Visiting the Pawnee Zoo once a week",
        "C. Joining Andy on FBI role-play scenarios",
        "D. Solving Riddles"
    ],
    correctAnswer: 3,
}];

// ----------------------
// countdown from this number
var countdown = 30;

// function to start game 
$("#start-game").click(function(){
    displayTrivia();
}); 

// set timer function
function startTimer(){
    var duration = 30;
    interval = setInterval(function () {
        $('#timer').html("<br>"+ "<br>" + "<br>"+"<center>" + "Time Left: " + "<br>" + duration + " seconds"+ "</center>");
        if (--duration < 0) {
            clearInterval(interval);
            unanswered++;
            questionIndex++;
            displayMessage("SORRY, YOU'RE OUT OF TIME.");
            setTimeout(function() {displayQuestion();}, 2000);
        }
    }, 1000);
}

// function to show trivia questions 
function displayTrivia() {
    $("#game-area").html(rsQuestion[0].question);
    displayQuestion();
}

function displayQuestion() {
    startTimer();
    if(questionIndex > 4) {
        // TODO GAME IS OVER DISPLAY RESULTS PAGE
        clearInterval(interval);
    
        $("#game-area").html("<h2> RESULTS </h2>");
        $("#game-area").append("<br>"+ "Correct Answers: " + correct + "<br>");
        $("#game-area").append("<br>"+ "Incorrect Answers: " + incorrect + "<br>");
        $("#game-area").append("<br>"+ "Unanswered Answers: " + unanswered + "<br>");

    }
    currQuestion = rsQuestion[questionIndex];

    $("#game-area").html("<h2>" + currQuestion.question + "</h2>" + "<br>");
    for(var i = 0; i < currQuestion.choices.length; i++) {
        var radioButton = $("<input id=\"answerchoice" + i + "\" type=\"radio\" name=\"answerChoices\" value=\"currQuestion.choices[i]\">");
        radioButton.addClass("answerchoice" + i);
    
        $("#game-area").append(radioButton);
        $("#game-area").append(currQuestion.choices[i]);
        $("#game-area").append("<br>");
        $("#game-area").append("<br>");

    }

    $("#game-area").append("<button id=\"submitButton\">Submit</button>");
}

function displayMessage(message) {
    $("#game-area").html("<h2>" + message + "</h2>");
}

function getUserSelection() {
    var button;
    for(var i = 0; i < rsQuestion[questionIndex].choices.length; ++i) {
        button = document.getElementById("answerchoice" + i);
        if(button.checked) {
            return i;
        }
    }
    // -1 means unanswered question
    return -1;
}

// -------------------------

// Finish the quote: Never half ass two things.
// a. half assing is dangerous
// b. real men are able to multi-task
// c. Whole ass one thing.
// d. half ass three things

// Who is Ron Swanson's famous alter ego?
// Chief Ken Hotate
// Duke Silver
// Burt Macklin, FBI
// Little Sebastian

//Which of the following is NOT one of Ron Swanson's hobbies?
// Woodworking
// Mini-golfing
// Eating bacon and eggs
// Hunting

//What snack is known as a "Swanson" around Pawnee?
// A turkey leg wrapped in bacon
// Double patty burger with barbeque sauce and extra bacon
// 2 Porkchops, medium-rare, covered in gravy
// A 16oz T-bone steak and a slab of potato salad

// Where is the most special place on earth to Ron Swanson?
// Rent-A-Swag
// Pawnee City Hall
// The Bulge
// Mulligan's Steakhouse

// What activity does Ron Swanson secretly love doing?
// Making his own beer
// Visiting the Pawnee Zoo once a week
// Joining Andy on FBI role-play scenarios
// Solving riddles
