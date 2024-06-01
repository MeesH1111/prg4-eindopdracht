import { Actor, EmitterType, EntityManager, ParticleEmitter, Vector, Color, Particle } from "excalibur";
import { Resources } from "./resources";
import { Enemy } from "./enemy";
import { Tower } from "./tower";

export class Bullet extends Actor {

    sprite

    constructor() {
        super({ width: Resources.Bullet.width, height: Resources.Bullet.height })
    }

    onInitialize(Engine) {
        this.sprite = Resources.Bullet.toSprite()
        this.graphics.use(this.sprite)

        this.vel = new Vector(-500, 0)

        this.on('collisionstart', (event) => this.Hit(event))

    }

    Hit(event) {
        const enemy = new Enemy
        this.kill()
        event.other.kill()

        // if (event.other instanceof enemy) {
        //     console.log('hit enemy')
        // }
    }
}