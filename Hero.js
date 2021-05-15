class Hero{
    constructor(x,y,width,height){
        var options= {
            'stiffness':20,
            'friction':1.0,
            'density':50
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        World.add(world, this.body);
        this.image=loadImage("Superman.png");
    }
    display(){
        var pos  = this.body.position;
        push();
        translate(pos.x,pos.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
        
    }
}