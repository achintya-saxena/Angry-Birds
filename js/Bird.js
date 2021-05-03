class Bird {
  constructor(x, y) {
    var options = {
      'density':3,
      'friction': 1.0,
      'restitution':0.8
    };
    this.image = loadImage("sprites/bird.png");
    this.smokeImage=loadImage("sprites/smoke.png");
    this.body = Bodies.rectangle(x, y, 50, 50, options);
    this.width = 50;
    this.height = 50;
    this.trajectory=[]
    World.add(world, this.body);
  };
  display(){
    var pos = this.body.position;
   
    var angle = this.body.angle;

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    
    imageMode(CENTER)
    image(this.image,0, 0, this.width, this.height);
    pop();

    if(this.body.velocity.x>10 && this.body.position.x> 260 ) {
      var position=[this.body.position.x,this.body.position.y];
      this.trajectory.push(position);

    }
   
    for(var i=0;i<this.trajectory.length;i++) {
    image(this.smokeImage,this.trajectory[i][0],this.trajectory[i][1]);
}
  };
};

