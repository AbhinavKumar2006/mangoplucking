class Ground{
    constructor(x,y){
        var option = {
            isStatic:true,
            density:10
        }
        this.body = Bodies.rectangle(x,y,1000,20,option);
        this.w = 1000;
        this.h = 20;
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        translate(pos.x,pos.y);
        rectMode(CENTER);
        rect(0,0,this.w,this.h);

    }
}