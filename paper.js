class Paper{
constructor(x,y,r){
    var options={
    
        restitution:1.0,   
   
       }
      this.r = r
       ball = Bodies.circle(x,y,r,options)
       World.add(world,ball);
}
display(){
    var pos = this.body.position
    push()
    noStroke()
    translate(pos.x,pos.y)
    elipseMode(CENTER)
    circle(0,0,this.r,this.r);
    pop()
}
}