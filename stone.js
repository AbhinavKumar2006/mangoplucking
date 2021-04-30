class Stone{
     constructor(x,y,r){ 
         var option={ 
             restitution:0, density:1.5, friction:1, 
            } 
            this.body = Bodies.circle(x,y,r,option);
             this.r = r; 
             this.stoneimg = loadImage("images/stone.png");
              World.add(world,this.body); }
              

              
    display(){
        var angle = this.body.angle;
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        angleMode(RADIANS);
        imageMode(CENTER);
        image(this.stoneimg,0,0,this.r,this.r);
        pop();
    }
}