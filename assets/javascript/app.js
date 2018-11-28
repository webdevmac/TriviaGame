$(document).ready(function() {


//trivia array of objects "assets/images/loading.gif"
var trivia = [
    {
        image: "https://media.giphy.com/media/xT5LMx8L9rZtLGgCL6/giphy.gif"
    },
    {
        question: ["What is this animal's name?", "(a) Silver", "(b) Rocket", "(c)  Lucky", "(d)  Shiner"],
        answer: ["a", "(a) Silver"],
        image: "assets/images/silver.jpg"

    },
    {
        question: ["What is this animal's name?", "(a)    Aba", "(b)    Abu", "(c) Arthur", "(d)    Aru"],
        answer: ["b", "(b) Abu"],
        image: "assets/images/abu.jpg"
    },
    {
        question: ["What are these animal's names?", "(a) Beethoven and Sissy", "(b) Bozwell and Missy", "(c) Boomer and Lissy", "(d) Beethoven and Missy"],
        answer: ["d", "(d) Beethoven and Missy"],
        image: "assets/images/beethoven_and_missy.jpg"
    },
    {
        question: ["What is this animal's name?", "(a) Cat", "(b) Leo", "(c) MGM", "(d) King"],
        answer: ["b", "(b) Leo"],
        image: "assets/images/leo.jpg"
    },
    {
        question: ["What is this animal's name?", "(a) My little helper", "(b) Rudolph", "(c) Santa's little helper", "(d) Little Boo"],
        answer: ["c", "(c) Santa's little helper"],
        image: "assets/images/santaslittlehelper.gif"
    },
    {
        question: ["What is this animal's name?", "(a) Roz", "(b) Roxy", "(c) Rooney", "(d) Rizzo"],
        answer: ["d", "(d) Rizzo"],
        image: "assets/images/rizzo.jpg"
    },
    {
        question: ["What is this animal's name?", "(a) Ferdinand", "(b) Fred","(c) Frank","(d) Buddy"],
        answer: ["c", "(c) Frank"],
        image: "assets/images/frank.jpg"
    },  
    {
        question: ["What is this animal's name?", "(a) Cooper", "(b) Posey", "(c) Conner","(d) Comet"],
        answer: ["d", "(d) Comet"],
        image: "assets/images/comet.jpg"
    },
    {
        question: ["What is this animal's name?", "(a) Wiley", "(b) FreeWhaley", "(c) Willy", "(d) Flipper"],
        answer: ["c", "(c) Willy"],
        image: "assets/images/willy.jpg"
    },
    {
        question: ["What is this animal's name?", "(a) Richard Parker", "(b) Rick Panther", "(c) Lucky", "(d) Ricky"],
        answer: ["a","(a) Richard Parker"],
        image: "assets/images/richard_parker.jpg"
    },
    {
        question: ["What is this animal's name?", "(a) Big Bear", "(b) Yogi", "(c) Ranger", "(d)Smokey"],
        answer: ["d","(d)Smokey"],
        image: "assets/images/smokey.jpg"
    },
    {
        question: ["What is this animal's name?", "(a) Tito", "(b) Toto", "(c)Tutu", "(d)Tiny"],
        answer: ["b","(b) Toto"],
        image: "assets/images/toto.jpg"
    },
    {
        question: ["What is this animal's name?", "(a) Donner", "(b) Dustin", "(c) Dunston", "(d) Derek"],
        answer: ["c","(c) Dunston"],
        image:"assets/images/dunston.jpg",
    },
    {
        question: ["What is this animal's name?", "(a) BamBam", "(b) Dog", "(c) Dino" , "(d) Barney"],
        answer: ["c","(c) Dino"],
        image:"assets/images/dino.gif"
    },
    {
        question: ["What is this animal's name?", "(a) Marco" ,"(b) Marcelino", "(c) Marcel", "(d) Marcela"],
        answer: ["c","(c) Marcel"],
        image:"assets/images/marcel.jpg"
    },
    {
        question: ["What is this animal's name?", "(a) Hedwig", "(b) Homer" ,"(c) Polly", "(d) Harry"],
        answer: ["a","(a) Hedwig"],
        image:"assets/images/hedwig.jpg"
    },
    {
        question: ["What is this animal's name?", "(a) Leo",  "(b) Morris", "(c) Max", "(d) Kitty"],
        answer: ["b","(b) Morris"],
        image:"assets/images/morris.jpg"
    },
    {
        question: ["What is this animal's name?", "(a) Clyde", "(b) Cliff", "(c) Marco", "(d) Red"],
        answer: ["a","(a) Clyde"],
        image:"assets/images/clyde.jpg"
    },
    {
        question: ["What is this animal's name?", "(a) Hobbes", "(b) Johnny", "(c) Tony", "(d) Calvin"],
        answer: ["a","(a) Hobbes"],
        image:"assets/images/hobbes.jpg"
    },
    {
        question: ["What is this animal's name?", "(a) Tom", "(b) Jerry", "(c) Mini", "(d) Mighty"],
        answer: ["b","(b) Jerry"],
        image:"assets/images/jerry.jpg"
    },
    {
        question: ["What is this animal's name?", "(a) Drew", "(b) Tony", "(c) Roy", "(d) Tig"],
        answer: ["b","(b) Tony"],
        image:"assets/images/tony.jpg"
    },
    {
        question: ["What is this animal's name?", "(a) Scooty-Doo", "(b) Shaggie", "(c) Scooter-Doo", "(d) Scooby-Doo"],
        answer: ["d","(d) Scooby-Doo"],
        image:"assets/images/150px-Scooby-Doo.png"
    },


];

var score = 0; // holds the score of questions answered correct
var count = 0; //holds the count for the array index
var number = 10; //  Set the number counter for the timer to 10 sec.
var intervalId;  //  Variable that will hold our intervalID when we execute the "runTimver" function
var clickButton = 0; //uses this variable in pickAnswer function so once one answer button can be selected no other buttons can be selected until next question
var myMusic =  document.getElementById("myApplause"); 
var myMusic2 = document.getElementById("myBoo"); 

function playAudio() { 
    myMusic.play(); 
} 
function playAudio2() { 
    myMusic2.play(); 
} 
    
//  Clearing the intervalId prior to setting our new intervalId will not allow multiple instances.
function runTimer() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}



//  The decrement function for runTimer.
function decrement() {
    number--; //  Decrease number by one.
    $("#timeLeft").html(number + "   " + "Seconds");//  Show the number in the #show-number tag.

    //  Once number hits zero...
    if (number < 1) {
        stopTimer();//  ...run the stop function.
       
        changeAnswerColor();// shows the answer in color greeen when time runs out

        number = 10;

        setTimeout(startSlideshow, 2000);
        
    }
}


//  The stop function
function stopTimer() {
    //  Clears our intervalIds
    //  We just pass the name of the intervals
    //  to the clearInterval function.
    clearInterval(intervalId);


}


// turns the correct Aswer Button Green
function changeAnswerColor() {
    $(`#${trivia[count].answer[0]}`).removeClass("btn-outline-secondary");//changes color of button to green for correct answer
    $(`#${trivia[count].answer[0]}`).addClass("btn-success");
    $(`#${trivia[count].answer[0]}`).html(trivia[count].answer[1] + "-" + "(CORRECT)");
    
}

// Sets the answer buttons back to grey
function clearButtons() {
    $("button").removeClass("btn-success");
    $("button").removeClass("btn-danger");
    $("button").addClass("btn-outline-secondary");
    $("button").addClass("btn-outline-secondary");

}

// starts first image with loading gif and loads buttons
function loadGame() {
    // $("#image-holder").html("<img src= assets/images/loading.gif width='225px' height='250px'>");
    displayImage(); // loads the loading GIF when the game is loaded
    $("#start").show(); // shows the start button when the game is loaded
    clearButtons();
    $("#timeLeft").html(number + "   " + "Seconds");
    $("#score").html("Correct Answers<br>" + score + " of 23");
    $("#a").html("(a) Answer"); //resets the text on the answer buttons
    $("#b").html("(b) Answer");
    $("#c").html("(c) Answer");
    $("#d").html("(d) Answer");
    $("#myModal").modal({show: false});// hides the dialog box that pops up at the end of the game
    $("#score").hide();
    $("#question").html("Press Start to play Trivia Game !"); // displays question
}

//displays the image when called
function displayImage() {

    $("#image-holder").html("<img src=" + trivia[count].image + " width='240px' height='250px'>");
    $("#start").hide();
}
function correctImage(){
    $("#image-holder").html("<img src= https://media.giphy.com/media/l0G16toQajFd8o5xe/giphy.gif width='240px' height='250px'>");
    playAudio();
}
function incorrectImage(){
    $("#image-holder").html("<img src= https://i.gifer.com/origin/7d/7d22df1db54c78fae6175a8c8d1b84ff_w200.webp width='240px' height='250px'>");
    playAudio2();
}

// this function starts when the player clicks on an answer
function pickAnswer() {
    if (clickButton == 0) {
        stopTimer();
        number = 10;

        changeAnswerColor();//correct answer turn to green

        //check if the wrong answer was selected
        if ($(this).attr("id") !== trivia[count].answer[0]) {
            $(this).removeClass("btn-outline-secondary");//changes color of button to Red if incorrect button was selected
            $(this).addClass("btn-danger");
            clickButton = 1;
            incorrectImage();
            setTimeout(startSlideshow, 4000);

        }

        else {
            score++; // add 1 to the score if correct answer was selected
            $("#score").html("Correct Answers<br>" + score + " of 23");
            clickButton = 1;       // sets the variable to 1 when a button is clicked so the buttons cant be clicked until the next question is loaded
            correctImage(); //shows image of crowd clapping and cheering
            setTimeout(startSlideshow, 3000); // goes to the next question and picture

        }
    }
    
}



// this function loads the images, questions and answers
function startSlideshow() {
    clearButtons();        // clears all green and red color buttons
    $("#score").show();
    clickButton = 0;
    count++;
    if (count !== trivia.length) {

        runTimer();

        //keeps score of correct answers
        $("#score").html("Correct Answers<br>" + score + " of 23");

        $("#question").html(trivia[count].question[0]); // displays question
        

        displayImage(); //runs dispalayImage function
        console.log(count);

        //displays answers on buttons for player to select correct answer
        $("#a").text(trivia[count].question[1]);
        $("#b").text(trivia[count].question[2]);
        $("#c").text(trivia[count].question[3]);
        $("#d").text(trivia[count].question[4]);

        $(".answerChoice").click(pickAnswer);// click to pick answer



    }
    else {
        $("#myModal").modal({show: true}); // opens the dialog box at the end of the game
        $("#finalScore").html("You Answered  "+ score +"  of 23<br> Questions Correctly.");
       
        count = 0;
        number = 10;
        score = 0;
        loadGame();
       
        
    }

}
//at the end of the game a dialog box opens
$("#myBtn").click(function(){
    $("#myModal").modal("hide");
});


loadGame();
// click the start buttom to start showing the images and questions
$("#start").click(startSlideshow);

});





