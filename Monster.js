class Monster{
    constructor(x,y,width,height){
        var options= {
            'isStatic':false,
            'restitution':0.8,
            'friction':1.0,
            'density':20
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        World.add(world, this.body);
        this.image=loadImage("Monster.png");
    }
    display(){
        var pos  = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        imageMode(CENTER);
        image(this.image, 0,-50, this.width, this.height);
        pop();
        
    }
}