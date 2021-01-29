class Particals{
    constructor(x,y,r){
        var options = {
restitution:0.4
        }
        this.r=r

 this.body = Bodies.circle(x,y,r,options);
 this.colour =color(random(0,255),random(0,255),random(0,255));
 World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push()
        translate(pos.x,pos.y);
        rotate(angle);
        noStroke();
        fill(this.colour);
        ellipseMode(CENTER)
        ellipse(pos.x, pos.y, 5, 5);
        pop()

    }
}