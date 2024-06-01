import { Actor, Color, EmitterType, Keys, ParticleEmitter, Resource, Sprite, Vector } from "excalibur";
import { Resources } from "./resources";
import { Bullet } from "./bullet";


export class Tower extends Actor {

    sprite
    x = 400
    y = 352

    constructor(x, y) {
        super()
        this.pos.y = y
        this.pos.x = x
    }

    onInitialize() {
        this.sprite = Resources.Tower.toSprite()
        this.graphics.use(this.sprite)

        this.pos.y = this.y
        this.pos.x = this.x
        this.vel = new Vector(0, 0)



    }

    onPreUpdate(engine) {
        let xspeed = 0
        let yspeed = 0
        let kb = engine.input.keyboard

        if (kb.isHeld(Keys.W) || kb.isHeld(Keys.Up)) {
            yspeed = -300
        }
        if (kb.isHeld(Keys.S) || kb.isHeld(Keys.Down)) {
            yspeed = 300
        }
        if (kb.isHeld(Keys.A) || kb.isHeld(Keys.Left)) {
            xspeed = -300
            this.graphics.flipHorizontal = false     // flip de sprite
        }
        if (kb.isHeld(Keys.D) || kb.isHeld(Keys.Right)) {
            xspeed = 300
            this.graphics.flipHorizontal = true        // flip de sprite
        }
        this.vel = new Vector(xspeed, yspeed)

        if (kb.wasPressed(Keys.Space)) {
            this.Shoot()
        }
    }


    Shoot() {
        let bullet = new Bullet()
        bullet.graphics.use(Resources.Bullet.toSprite())

        bullet.vel = new Vector(-500, 0)
        this.addChild(bullet)  // Compostion met addchild()
        console.log('halloapadoasodasod')

        bullet
    }
}