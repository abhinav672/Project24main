class CrumbledPaper {
    constructor(x,y,r) {
      var options = {
          isStatic: true,
          restitution:0.1,
          friction:0.8
      }
      this.body = Bodies.circle(x,y,r,options);
      this.r = r;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x,pos.y)
      ellipseMode(RADIUS);
      fill("yellow");
      ellipse(0, 0, this.r, this.r);
      pop();
    }
  };