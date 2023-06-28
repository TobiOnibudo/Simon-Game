let gamePattern = []

function nextSequence()
{
    let randomNumber = Math.floor(Math.random() * 3)

    let buttonColours = ["red","blue","green","yellow"]

    let randomChosenColour = buttonColours[randomNumber]

    gamePattern.push(randomChosenColour)

    $("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
}
