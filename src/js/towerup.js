import { Actor, Color, EmitterType, Keys, ParticleEmitter, Resource, Sprite, Vector } from "excalibur";
import { Resources } from "./resources";
import { Bullet } from "./bullet";
import { Tower } from "./tower";



export class Towerup extends Tower /* Inherint class */ {
    constructor(x, y) {
        super(x, y)
    }

    onInitialize() {
        this.sprite = Resources.Towerup.toSprite()
        this.graphics.use(this.sprite)
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
            this.graphics.flipHorizontal = false
        }
        if (kb.isHeld(Keys.D) || kb.isHeld(Keys.Right)) {
            xspeed = 300
            this.graphics.flipHorizontal = true
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

        bullet
    }
}