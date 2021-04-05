class Paper{
    constructor(x,y,redius) {
        var options = {
            isStatic : false,
            'restitution': 0.3,
            'friction':0.5,
            'density':1.2,
        }
        this.body = Bodies.rectangle(x,y,radius,options);
        this.radius = radius;

        World.add(world, this.body);
    }
    display(){
        ellipseMode(RADIUS);

        fill("green");

        rect(this.body.position.x,this.body.position.y, this.radius);
    }
};

