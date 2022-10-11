var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementsByTagName("body")[0];
var button = document.querySelector("button");

function changeInnerColor(c1,c2){
    var x = document.querySelector(".color1");
    var y = document.querySelector(".color2");

    if(c1.length == 7 && c2.length == 7){
    x.value = c1;
    y.value = c2;
    } else{
        RandomGame();
    }

}

function changeColor(){
    body.style.background = 
    "linear-gradient(to right , " 
    + color1.value + ", " 
    + color2.value + ")";

    css.textContent = body.style.background +";";
}


function RandomGame(){
    color1 = Math.floor(Math.random()*16777215).toString(16);
    color2 = Math.floor(Math.random()*16777215).toString(16);
    body.style.background = 
    "linear-gradient(to right , #" 
    + color1 + ", #" 
    + color2 + ")";
    css.textContent = body.style.background +";";

    changeInnerColor("#"+color1,"#"+color2)
}

button.addEventListener("click",RandomGame)


color1.addEventListener("input",changeColor)
color2.addEventListener("input",changeColor)