import { Actor, Vector } from "excalibur";
import { Resources } from "./resources";
import { vector } from "excalibur/build/dist/Util/DrawUtil";
import { Enemy } from "./enemy";


export class Boss extends Actor {

    sprite
    speed = 100

    constructor(speed) {
        super({ width: Resources.Boss.width, height: Resources.Boss.height })
        this.speed = speed
    }

    onInitialize(Engine) {
        this.sprite = Resources.Boss.toSprite()
        this.graphics.use(this.sprite)

        this.pos = new Vector(0, 352)
        this.vel = new Vector(20, 0)

        this.actions.
            moveTo(new Vector(225, 350), this.speed).
            moveTo(new Vector(225, 160), this.speed).
            moveTo(new Vector(480, 160), this.speed).
            moveTo(new Vector(480, 540), this.speed).
            moveTo(new Vector(800, 540), this.speed).
            moveTo(new Vector(800, 350), this.speed).
            moveTo(new Vector(1080, 350), this.speed)


    }

}