class Paper {
  constructor(x, y, width, height) {
    var options = {
      restitution: 0.3,
      friction: 0.5,
      density: 1.2,
    };
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.image = loadImage("paper.png");

    World.add(world, this.body);
  }
  display() {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    imageMode(CENTER);
    image(this.image, 0, 0, 150, 150);
    pop();
  }
}
