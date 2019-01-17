function drop(){
    this.canvas = document.getElementById("myCanvas");
    this.x = Math.random() * this.canvas.width;
    this.y = Math.random() * this.canvas.height;
    this.z = Math.random() * 10;
    this.gravity = 0;

    this.fall = function(){
        this.y += this.z/2 + this.gravity/20;
        this.gravity += 1;
        if(this.y > this.canvas.height){
            this.x = Math.random() * this.canvas.width;
            this.y = Math.random() * -50;
            this.z = Math.random() * 10;
            this.gravity = 0;
        }
    }

    this.show = function(){
        var context = this.canvas.getContext("2d");
        context.fillStyle = "purple";
        context.fillRect(this.x,this.y,this.z/4,this.z*2);
    }
}