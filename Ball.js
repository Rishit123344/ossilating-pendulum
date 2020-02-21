class Ball {
    constructor(){

        
this.body = Bodies.circle(400,300,30);
World.add(world,this.body);

    }
    display(){
        push ();
        fill ("blue");
        ellipseMode (CENTER);
        ellipse (this.body.position.x,this.body.position.y,30,30);
        pop ();
    }

}
