//Initialize canvas and get context
var canvas = document.getElementById("background");
var ctx = canvas.getContext("2d");
canvas.width = document.documentElement.clientWidth;
canvas.height = document.documentElement.clientHeight;

//set resize function of canvas
/*
window.onresize = function(){
    canvas.width = document.documentElement.clientWidth;
    canvas.height = document.documentElement.clientHeight;
}
*/

//drawing
var mouse = false;
document.onmousedown = function(){
    mouse = true;
}
document.onmouseup = function(){
    mouse = false;
}
document.onmousemove = function(){
    if(mouse){
    ctx.beginPath();
    ctx.arc(event.clientX,event.clientY,1,0,2*Math.PI);
    ctx.stroke();
    }
}