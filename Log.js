class Log {
    constructor(){

        var options = {isStatic:true}
this.body = Bodies.rectangle(400,200,150,20,options);
World.add(world,this.body);

    }
    display(){
        push ();
        fill ("brown");
        rectMode (CENTER);
        rect (this.body.position.x,this.body.position.y,150,20);
        pop ();
    }

}
