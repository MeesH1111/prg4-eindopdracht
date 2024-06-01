import { Actor, Vector } from "excalibur";
import { Resources } from "./resources";
import { Enemy } from "./enemy";
import { Level } from "./level";

export class Placehold extends Actor {
    constructor() {
        super()
    }

    onInitialize(Engine) {
        this.sprite = Resources.Placehold.toSprite()
        this.graphics.use(this.sprite)

        this.enableCapturePointer = true
        this.on("pointerup", (event) => this.switchScene())

        this.pos = new Vector(500, 500)
    }

    switchScene() {
        console.log('hallo')
    }
}