
//initiializing canvas object
var canvas = document.getElementById("MyCanvas");
canvas.width = document.documentElement.clientWidth;
canvas.height = document.documentElement.clientHeight;
var ctx = canvas.getContext("2D");

//ctx.setFill("FFx0000");
ctx.drawRect(0,canvas.height - 100,canvas.width,100);
ctx.stroke();