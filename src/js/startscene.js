import { Scene, DisplayMode, Vector, Actor, Label, FontUnit, Font } from "excalibur";
import { Resources } from "./resources.js";
import { Playbutton } from "./playbutton.js";
import { Level } from "./level.js";

export class Startscene extends Scene {

    playbutton

    constructor() {
        super({
            width: 1024,
            height: 704,
            maxFps: 60,
            displayMode: DisplayMode.FitScreen
        })
    }

    onInitialize(Engine) {
        console.log('oninitialize')

        let name = new Label({
            text: 'Wizard Defense',
            pos: new Vector(310, 100),
            font: new Font({
                family: 'impact',
                size: 64,
                unit: FontUnit.Px
            })
        })

        let score = new Label({
            text: `Highscore: ${localStorage.getItem('highscore')}`,
            pos: new Vector(310, 200),
            font: new Font({
                family: 'impact',
                size: 32,
                unit: FontUnit.Px
            })
        })

        let gameinfo = new Label({
            text: 'Shoot the Slimes',
            pos: new Vector(430, 500),
            font: new Font({
                family: 'impact',
                size: 28,
                unit: FontUnit.Px
            })
        })

        const bg = new Actor()
        bg.graphics.use(Resources.Startscenebg.toSprite())
        bg.pos = new Vector(512, 352)
        this.add(bg)

        const button = new Actor()
        button.graphics.use(Resources.Playbutton.toSprite())
        button.pos = new Vector(512, 352)
        this.add(button)

        this.add(gameinfo)
        gameinfo.text = 'Shoot the Slimesd'

        this.add(score)
        score.text = `Highscore: ${localStorage.getItem('highscore')}`

        this.add(name)
        name.text = 'Wizard Defense'

        button.on("pointerup", (event) => this.switchScene())
    }

    // addButton() {
    //     const playbutton = new Playbutton
    //     this.add(playbutton)
    // }

    switchScene(Engine) {
        this.engine.goToScene('level')
    }


}

