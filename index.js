var numSqaures = 6;
var colors = [];
var pickedColor;
var sqaures = document.querySelectorAll(".sqaure");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
  //mode button event listeners
  setupModeButtons();
  setupSqaures();
  reset();
}

function setupModeButtons() {
  for (let i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function() {
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      this.textContent === "Easy" ? (numSqaures = 3) : (numSqaures = 6);
      reset();
    });
  }
}

function setupSqaures() {
  for (let i = 0; i < sqaures.length; i++) {
    //add click listeners
    sqaures[i].addEventListener("click", function() {
      //grab color of clicked sqaure
      var clickedColor = this.style.backgroundColor;
      //compare color
      if (clickedColor === pickedColor) {
        messageDisplay.textContent = "Correct!";
        resetButton.textContent = "Play Again?";
        changeColors(clickedColor);
        h1.style.backgroundColor = clickedColor;
      } else {
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Try Again";
      }
    });
  }
}

function reset() {
  //genreate all new colors
  colors = generateRandomColors(numSqaures);
  //pick new random color
  pickedColor = pickColor();
  //change coor display
  resetButton.textContent = "New Colors";
  colorDisplay.textContent = pickedColor;
  messageDisplay.textContent = "";
  //change colors
  for (let i = 0; i < sqaures.length; i++) {
    if (colors[i]) {
      sqaures[i].style.display = "block";
      sqaures[i].style.backgroundColor = colors[i];
    } else {
      sqaures[i].style.display = "none";
    }
  }
  h1.style.backgroundColor = "steelblue";
}

resetButton.addEventListener("click", function() {
  reset();
});

function changeColors(color) {
  //loop through sqaures
  for (let i = 0; i < sqaures.length; i++) {
    //change each color
    sqaures[i].style.backgroundColor = color;
  }
}

function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  //make array
  var arr = [];
  //repeate num times
  for (let i = 0; i < num; i++) {
    //get random color and push into arr
    arr.push(randomColor());
  }
  //return array
  return arr;
}

function randomColor() {
  //pick a 'red' from 0 - 255
  var r = Math.floor(Math.random() * 256);
  //pick a 'greed' from 0 - 255
  var g = Math.floor(Math.random() * 256);
  //pick a 'blue' from 0 - 255
  var b = Math.floor(Math.random() * 256);

  return "rgb(" + r + ", " + g + ", " + b + ")";
}
