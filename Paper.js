class Paper{
    constructor(x,y,radius,color) {
        var options = {
            isStatic: true
        }

        this.body = Bodies.circle(x,y,radius,options);
        this.radius= radius;
        this.color = color;

        World.add(world,this.body);
    }

    display() {
        ellipseMode(RADIUS);
        
        fill(this.color);
        ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius);
        
    }
}