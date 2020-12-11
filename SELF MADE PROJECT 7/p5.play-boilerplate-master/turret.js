class Turret{
    constructor(x, y, height, width,){
        var options = {
            isStatic : false
        }
        this.body = Bodies.rectangle(x, y, width ,height, options)
    this.width = width
    this.height = height
        this.image = loadImage("images/shooter.png")
    World.add(world, this.body)

    
    }

    display(){
        var pos = this.body.position;
        rectMode(CENTER)
        image(this.image, pos.x, pos.y, this.width, this.height)


    }
}