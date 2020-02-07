var numSquares = 9;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var modeButtons = document.querySelectorAll(".mode");
var collapse = document.getElementsByClassName("collapsible");

for(var i = 0; i < collapse.length; i++){
    collapse[i].addEventListener("click", function(){
        console.log("Connected");
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if(content.style.display === "block"){
            content.style.display === "none";
        }else{
            content.style.display === "block";
        }
    });
};

init();

function init(){
    setupModeButtons();
    setupSquares();
    reset();
};

function setupModeButtons(){
    //mode buttons event listener
    for(var i = 0; i < modeButtons.length; i++){
        modeButtons[i].addEventListener("click", function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            modeButtons[2].classList.remove("selected");
            this.classList.add("selected");
            if(this.textContent === "Easy"){
                numSquares = 3;
            } else if(this.textContent === "Medium"){
                numSquares = 6;
            } else{
                numSquares = 9;
            }
            reset();
            // if(this.textContent = "Easy"){
            //     numSquares = 3;
            // }else{
            //     numSquares = 6;
            // }
    
        //figure out how many squares to show
        //pick a new color
        //pick a new pickedColor
        //update page to reflect changes
        });
    };
};

function setupSquares(){
    for(var i = 0; i < squares.length; i++){
        //add click listener event
        squares[i].addEventListener("click", function(){
            //Grab color of clicked square
            var clickedColor = this.style.backgroundColor;
            //compare color to pickedColor
            if(clickedColor === pickedColor){
                messageDisplay.textContent = "Correct!";
                resetButton.textContent = "Play Again?";
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
            }else{
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again";
            };
        });
    };
};

function reset(){
    //generate all new colors
    colors = generateRandomColor(numSquares);
    //pick a new random color from array
    pickedColor = pickColor();
    //change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;
    //mnessage display equal empty string
    messageDisplay.textContent = " ";
    //message display for the resetButton
    resetButton.textContent = "New Color";
    //change colors of squares
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
        squares[i].style.display = "block";
        squares[i].style.backgroundColor = colors[i];
        } else
        squares[i].style.display = "none"
    };
    h1.style.backgroundColor = "royalblue";
};
resetButton.addEventListener("click", function(){
reset();
});
colorDisplay.textContent = pickedColor;

//Variables for the EASY MODE AND HARD MODE hard code
//var easyButton = document.querySelector("#easyBtn");
//var hardButton = document.querySelector("#hardBtn");

//EASY MODE
//easyButton.addEventListener("click", function(){
    //Console log the button for debug
    //console.log("Connected Easy");
    //Add classlist
//     easyButton.classList.add("selected");
//     hardButton.classList.remove("selected");
//     numSquares = 3;
//     colors = generateRandomColor(3);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for(var i = 0; i < squares.length; i++){
//         if(colors[i]){
//             squares[i].style.backgroundColor = colors[i];
//         }else{
//             squares[i].style.display = "none";
//         }
//     }
// });
//HARD MODE
// hardButton.addEventListener("click", function(){
//     //Console log the button for debug
//     //console.log("Connected Hard");
//     //Add classlist
//     hardButton.classList.add("selected");
//     easyButton.classList.remove("selected");
//     numSquares = 6;
//     colors = generateRandomColor(6);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for(var i = 0; i < squares.length; i++){
//             squares[i].style.backgroundColor = colors[i];
//             squares[i].style.display = "block";
//         }
// });




function changeColors(color){
    //loop through all square
    for(var i = 0; i < squares.length; i++){
        //change each color to match given color
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColor(num){
    //make an array
    var arr = [];
    //add num random colors to array
    for(var i = 0; i < num; i++){
        //get random color and push into array
        arr.push(randomColor());
    }
    //return that array
    return arr;
}
function randomColor(){
    //pick a 'red' from 0 - 255
    var r = Math.floor(Math.random() * 256); 
    //pick a 'green' from 0 - 255
    var g = Math.floor(Math.random() * 256);
    //pick a 'blue' from 0 - 255
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}