import { Actor, Vector, Scene, } from "excalibur";
import { Resources } from "./resources";
import { Startscene } from "./startscene";
import { Endscene } from "./endscene";


export class Enemy extends Actor {

    sprite
    speed = 150

    constructor(speed) {
        super({ width: Resources.Enemy.width, height: Resources.Enemy.height })
        this.speed = speed
    }

    onInitialize(Engine) {
        this.sprite = Resources.Enemy.toSprite()
        this.graphics.use(this.sprite)

        this.pos = new Vector(0, Math.random() * (380 - 320) + 320)
        this.vel = new Vector(35, 0)

        this.actions.
            moveTo(new Vector(Math.random() * (250 - 200) + 200, Math.random() * (380 - 320) + 320), this.speed).
            moveTo(new Vector(Math.random() * (260 - 190) + 190, Math.random() * (180 - 140) + 140), this.speed).
            moveTo(new Vector(Math.random() * (500 - 460) + 460, Math.random() * (190 - 130) + 130), this.speed).
            moveTo(new Vector(Math.random() * (510 - 450) + 450, Math.random() * (560 - 520) + 520), this.speed).
            moveTo(new Vector(Math.random() * (820 - 780) + 780, Math.random() * (570 - 510) + 510), this.speed).
            moveTo(new Vector(Math.random() * (830 - 770) + 770, Math.random() * (375 - 325) + 325), this.speed).
            moveTo(new Vector(Math.random() * (1120 - 1080) + 1080, Math.random() * (380 - 320) + 320), this.speed)

    }
}