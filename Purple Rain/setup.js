//initial canvas
var canvas = document.getElementById("myCanvas");
canvas.width = document.documentElement.clientWidth;
canvas.height=document.documentElement.clientHeight;

//global drops array
var drops = [];
for(var x = 0; x < canvas.width; x++){
    drops[x] = new drop();
}

//Set window resizing
window.onresize = function(){
    canvas.width = document.documentElement.clientWidth;
    canvas.height=document.documentElement.clientHeight;
}

//set redraw interval
setInterval(draw,10);
function draw(){
    console.log("called");
    //Set a background  
    var canvas = document.getElementById("myCanvas");
    var context = canvas.getContext("2d");
    context.fillStyle = "rgba(230,230,250,1)";
    context.fillRect(0, 0, canvas.width, canvas.height);

    //update drops
    for(var x = 0; x < drops.length; x++){
        drops[x].fall();
        drops[x].show();
    }
}