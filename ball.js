class ball{
    constructor(x,y){
var options={
    restitution:0.5,
    density=0.2
}

        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        this.image=loadImage("polygon_img");
    }
    display(){

        this.angle=angle
        pos=this.body.position
        rect(pos.x,pos.y,50,50);
        rectMode(CENTER);
        translate(0,0);
        rotate(angle)
        imageMode(CENTER)
        this.image(polygon_img,pol50,50,)

    }
}