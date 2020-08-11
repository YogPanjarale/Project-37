class SpiderMan extends BaseClass {
  constructor(x,y){
    super(x,y,height/20,height/20);
    this.image = loadImage("SpiderMan.png");
   // this.smokeImage = loadImage("sprites/smoke.png");
  
    
  }
  
  
  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();

    
     
   
  
  }
}
