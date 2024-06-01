import { Vector } from "excalibur";
import { Playbutton } from "./playbutton";
import { Resources } from "./resources";

export class Playbuttonend extends Playbutton {
    constructor() {
        super()
    }

    onInitialize() {
        this.sprite = Resources.Playbutton.toSprite()
        this.graphics.use(this.sprite)

        this.pos = new Vector(512, 352)

        this.enableCapturePointer = true
        // this.on("pointerup", (event) => this.switchScene())
    }
}