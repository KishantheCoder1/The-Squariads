class Box{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.4,
            'friction':0.0001
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;

        World.add(world, this.body);
      }
      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        rectMode(CENTER);
        strokeWeight(5);
        stroke("orange");
        fill("black");
        rect(0, 0, this.width, this.height);
        pop();
      }
}