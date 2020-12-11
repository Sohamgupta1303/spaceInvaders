class Bullet{
    constructor(x, y, height, width,){
        var options = {
            isStatic : false
        }
        this.body = Bodies.rectangle(x, y, width ,height, options)
    this.width = width
    this.height = height
    
        this.image = loadImage("images/bullet.png")
    World.add(world, this.body)

    
    }

    

    display(){
        var pos = this.body.position;
        rectMode(CENTER)
        image(this.image, pos.x, pos.y, this.width, this.height)
        if(keyCode === 32){
            this.body.velocity.y= -10
          }

    }
    
}