class Alien{
    constructor(x,y,width,height){
        var options = {
            isStatic: false
        }
    
    this.body = Bodies.rectangle(x, y, width ,height, options)
    this.width = width
    this.height = height
    this.body.velocityX = -2
        this.image = loadImage("images/space invaders alien.png")
    World.add(world, this.body)

    }

    display(){
        var pos = this.body.position;
        rectMode(CENTER)
        image(this.image, pos.x, pos.y, this.width, this.height)


    }
    
}