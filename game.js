let gamePattern = []
let userClickedPattern = []

let level = 0




$(document).keypress(function() {
  
      $("#level-title").text("Level " + level)
      nextSequence()
  })

$(".btn").click(function()
{
 let userChosenColour =   $(this).attr("id")
 userClickedPattern.push(userChosenColour)

 playSound(userChosenColour)
 animatePress(userChosenColour)

 checkAnswer(userClickedPattern.length-1)
})

function nextSequence()
{
    userClickedPattern = []
    let randomNumber = Math.floor(Math.random() * 3)

    let buttonColours = ["red","blue","green","yellow"]

    let randomChosenColour = buttonColours[randomNumber]

    gamePattern.push(randomChosenColour)

    $("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);

    level++
}


function animatePress(currentColour)
{
    $("#"+ currentColour).addClass(currentColour)
    setTimeout(() => {
        $("#" + currentColor).removeClass("pressed")
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
        if (userClickedPattern.length === gamePattern.length)
        {
            setTimeout(() => {
                nextSequence()
            }, 1000)
        }
    }
}