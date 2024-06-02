import '../css/style.css'
import { Actor, Engine, Vector, DisplayMode } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Enemy } from './enemy.js'
import { Boss } from './boss.js'
import { Tower } from './tower.js'
import { Level } from './level.js'
import { Startscene } from './startscene.js'
import { Endscene } from './endscene.js'

export class Game extends Engine {

    constructor() {
        super({
            width: 1024,
            height: 704,
            maxFps: 60,
            displayMode: DisplayMode.FitScreen
        })
        this.start(ResourceLoader).then(() => this.startGame())
    }

    startGame() {
        this.add('level', new Level)
        this.add('startscene', new Startscene)
        this.add('endscene', new Endscene)
        this.goToScene('startscene')
    }
}

new Game()
