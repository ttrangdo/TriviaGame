// The page will reveal the number of questions that players answer correctly and incorrectly.
//Don't let the player pick more than one answer per question.
//Don't forget to include a countdown timer.

var userPick;

var correctAnswer = 0;

var incorrectAnswer = 0;

var unAnswer = 0;

var question = 0;


var count=30;

var disneyQuestion = [{
question: "Finish the quote: Never half ass two things,",
choices: ["A. Half assing is dangerous",
"B. Real men are able to multi-task",
"C. Whole ass one thing", 
"D. Half ass three things" ],
validAnswer: 2
}, {
question:"Who is Ron Swanson's famous alter ego?",
choices: ["A. Chief Ken Hotate",
"B. Duke Silver",
"C. Burt Macklin, FBI",
"D. Little Sebastian"],
validAnswer: 1

}, {
question:"Which of the following is NOT one of Ron Swanson's hobbies?",
choices: ["A. Woodworking",
"B. Mini-golfing",
"C. Eating bacon and eggs",
"D. Hunting"],
validAnswer: 1

}, {
question:"What snack is known as a 'Swanson' around Pawnee?",
choices: ["A. A turkey leg wrapped in bacon",
"B. Double patty burger with barbeque sauce and extra bacon",
"C. 2 Porkchops, medium-rare, covered in gravy",
"D. A 16oz T-bone steak and a slab of potato salad"],
validAnswer: 0

}, {
question:"// Where is the most special place on earth to Ron Swanson?",
choices: ["A. Rent-A-Swag",
"B. Pawnee City Hall",
"C. The Bulge",
"D. Mulligan's Steakhouse"],
validAnswer: 3

 }, {
question:"What activity does Ron Swanson secretly love doing?",
choices: ["A. Making his own beer",
"B. Visiting the Pawnee Zoo once a week",
"C. Joining Andy on FBI role-play scenarios",
"D. Solving riddles"],
validAnswer: 3

}];

$("#start_game").click(function(){
    $(this).hide();
    counter = setInterval(timer, 1000); 
    displayTrivia();
    }); 

function timer(){
    count--;
    if (count <= 0) {
        clearInterval(counter);
        return;
    }
    
        $("#timer").html("Time remaining: " + "00:" + count + " secs");
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
