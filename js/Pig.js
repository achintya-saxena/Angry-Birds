class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.Visibility=255;
  }
display(){
  
  if(this.body.speed<2.5) {
   super.display();
  }
  else{
World.remove(world,this.body);
push();
this.Visibility=this.Visibility-5;
console.log(this.Visibility)

tint(255,this.Visibility);
image(this.image,this.body.position.x,this.body.position.y,50,50);
pop();
 }
 
}
score()  {
if(this.Visibility>-1005 && this.Visibility<0)  {
score++
}
}

}
    





