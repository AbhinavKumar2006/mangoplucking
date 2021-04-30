class Mango
{ 

  constructor(x,y,r) {
     var options = {
        isStatic:true 
      }
         this.body = Bodies.circle(x, y, r, options);
          this.r=r; this.image = loadImage("images/mango.png");
           World.add(world, this.body); 
          }
      display(){
        var angle = this.body.angle;
        var pos= this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.r,this.r);
        pop();
      }
      
      
}

