import { Actor, Vector } from "excalibur";
import { Resources } from "./resources";
import { Level } from "./level";

export class Playbutton extends Actor {

    sprite

    constructor() {
        super()
    }

    onInitialize(Engine) {
        this.sprite = Resources.Playbutton.toSprite()
        this.graphics.use(this.sprite)

        this.pos = new Vector(550, 365)
        this.vel = new Vector(0, 0)

        this.enableCapturePointer = true
        this.on("pointerup", (event) => this.switchScene())
    }

    switchScene() {
        console.log('WOWWW')
        this.add('level', new Level)
        this.goToScene(Level)
    }
}