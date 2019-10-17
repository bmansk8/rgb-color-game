var colors = generateRandomColors(6);

var sqaures = document.querySelectorAll('.sqaure');
var pickedColor = pickColor();
var colorDisplay = document.getElementById('colorDisplay');
var messageDisplay = document.querySelector('#message');
var h1 = document.querySelector('h1');
var resetButton = document.querySelector('#reset');

resetButton.addEventListener('click', function(){
    //genreate all new colors
    colors = generateRandomColors(6);
    //pick new random color
    pickedColor = pickColor();
    //change coor display
    colorDisplay.textContent = pickedColor;
    //change colors
    for (let i = 0; i < sqaures.length; i++) {
        sqaures[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = '#232323';
});

colorDisplay.textContent = pickedColor;

for (let i = 0; i < sqaures.length; i++) {
    //add colors
    sqaures[i].style.backgroundColor = colors[i];

    //add click listeners
    sqaures[i].addEventListener('click', function(){
        //grab color of clicked sqaure
        var clickedColor = this.style.backgroundColor

        //compare color
        if(clickedColor === pickedColor){
            messageDisplay.textContent = 'Correct!';
            resetButton.textContent = 'Play Again?'
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
        }else{
            this.style.backgroundColor = '#232323';
            messageDisplay.textContent = 'Try Again'
        }
    });
}

function changeColors(color){
    //loop through sqaures
    for (let i = 0; i < sqaures.length; i++) {
        //change each color
        sqaures[i].style.backgroundColor = color;
    }
}

function pickColor(){
   var random =  Math.floor(Math.random() * colors.length);
   return colors[random];
}

function generateRandomColors(num){
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


function randomColor(){
    //pick a 'red' from 0 - 255
    var r = Math.floor(Math.random() * 256);
    //pick a 'greed' from 0 - 255
    var g = Math.floor(Math.random() * 256);
    //pick a 'blue' from 0 - 255
    var b = Math.floor(Math.random() * 256);

    return 'rgb(' + r + ', ' + g + ', ' + b +')';
}