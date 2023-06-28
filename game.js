let gamePattern = []
let userClickedPattern = []

let level = 0
let started = false



$(document).keypress(function() {
    //start game if it has not been started
    if (!started) {
        $("#level-title").text("Level " + level);
        nextSequence()
        started = true
      }
  })

$(".btn").click(function()
{
// use button clicked to compare to the random pattern 
 let userChosenColour =   $(this).attr("id")
 userClickedPattern.push(userChosenColour)
 console.log(userClickedPattern)
 playSound(userChosenColour)
 animatePress(userChosenColour)

  checkAnswer(userClickedPattern.length-1)
})

function nextSequence()
{

    $("#level-title").text("Level " + level);

    //choose random colour for sequence
    let randomNumber = Math.floor(Math.random() * 4)

    let buttonColours = ["red","blue","green","yellow"]

    let randomChosenColour = buttonColours[randomNumber]

    gamePattern.push(randomChosenColour)

    //animate randomly choosen colour
    $("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);

    level++
}


function animatePress(currentColour)
{
    $("#"+ currentColour).addClass(currentColour)
    setTimeout(() => {
        $("#" + currentColour).removeClass("pressed")
    }, 100)
}

function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function checkAnswer(currentLevel)
{
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel])
    {
            setTimeout(() => {
                nextSequence()
            }, 1000)
    }
    else 
    {
        playSound("wrong")
        $("body").addClass("game-over")
        setTimeout(() => {
            $("body").removeClass("game-over")
        }, 200)
        
        // display failed message
        $("#level-title").text("Game Over, Press Any Key to Restart")
        //reset game variables
        startOver()
    }
}

function startOver()
{
    level = 0
    started = false
    userClickedPattern = []
    gamePattern = []

}