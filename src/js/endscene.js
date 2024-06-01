import { Scene, DisplayMode, Actor, Vector, Font, FontUnit, Label, Color } from "excalibur";
import { Resources } from "./resources.js";
import { Playbutton } from "./playbutton.js";
import { Playbuttonend } from "./playbuttonend.js";

export class Endscene extends Scene {
    constructor() {
        super({
            width: 1024,
            height: 704,
            maxFps: 60,
            displayMode: DisplayMode.FitScreen
        })
    }

    onInitialize(Engine) {
        console.log('AFLKASFLKASFLKAF')
        const bg = new Actor()
        bg.graphics.use(Resources.Endscenebg.toSprite())
        bg.pos = new Vector(512, 352)
        this.add(bg)

        const gm = new Actor()
        gm.graphics.use(Resources.Gameover.toSprite())
        gm.pos = new Vector(520, 130)
        this.add(gm)
        // let gameover = new Label({
        //     text: 'GAME OVER',
        //     pos: new Vector(275, 120),
        //     font: new Font({
        //         family: 'impact',
        //         size: 96,
        //         unit: FontUnit.Px,
        //         color: Color.Red
        //     })
        // })

        let playagain = new Label({
            text: 'PLAY AGAIN?',
            pos: new Vector(415, 270),
            font: new Font({
                family: 'impact',
                size: 40,
                unit: FontUnit.Px,
                color: Color.Black
            })
        })

        // this.add(gameover)
        // gameover.text = 'GAME OVER'

        this.add(playagain)
        playagain.text = 'PLAY AGAIN?'

        const playbutton = new Playbuttonend
        this.add(playbutton)
        playbutton.on("pointerup", (event) => this.switchScene())
    }

    switchScene() {
        this.engine.goToScene('startscene')
    }


}