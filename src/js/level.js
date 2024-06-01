import '../css/style.css'
import { Actor, Engine, Vector, DisplayMode, Scene, Timer, Label, Font, FontUnit, Color, CollisionEndEvent, Particle } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Enemy } from './enemy.js'
import { Boss } from './boss.js'
import { UI } from './ui.js'
import { Tower } from './tower.js'
import { Playbutton } from './playbutton.js'
import { Placehold } from './placehold.js'
import { Bullet } from './bullet.js'
import { Towerup } from './towerup.js'

// import { Level } from './level.js'

export class Level extends Scene {

    sprite
    score
    mylabel
    enemy
    boss
    enemytimer
    bosstimer
    enemyspeed = 150
    bossspeed = 100

    constructor() {
        super({
            width: 1024,
            height: 704,
            maxFps: 60,
            displayMode: DisplayMode.FitScreen
        })
    }

    onInitialize(Engine) {
        const bg = new Actor()
        bg.graphics.use(Resources.Map.toSprite())
        bg.pos = new Vector(512, 352)
        this.add(bg)

        this.mylabel = new Label({
            text: `Score: ${this.score}`,
            pos: new Vector(100, 100),
            font: new Font({
                family: 'impact',
                size: 40,
                unit: FontUnit.Px,
                color: Color.White
            })
        })

        this.startGame()

        this.enemytimer = new Timer({
            fcn: () => this.spawnEnemy(),
            interval: 2000,
            repeats: true
        })
        this.add(this.enemytimer)
        this.enemytimer.start()

        this.bosstimer = new Timer({
            fcn: () => this.spawnBoss(),
            interval: 11000,
            repeats: true
        })
        this.add(this.bosstimer)
        this.bosstimer.start()

        if (localStorage.getItem('highscore') === null) {
            localStorage.setItem('highscore', 0)
        }

    }


    startGame() {

        this.score = 0
        this.add(this.mylabel)

        this.spawnTower()


    }

    spawnEnemy() {

        this.enemyspeed += 10

        this.enemy = new Enemy(this.enemyspeed)

        this.enemy.on("exitviewport", (event) => this.engine.goToScene('endscene'))
        this.add(this.enemy)

        this.updateScore()

    }

    spawnBoss() {

        this.bossspeed += 100
        this.boss = new Boss(this.bossspeed)

        this.boss.on("exitviewport", (event) => this.engine.goToScene('endscene'))
        this.add(this.boss)

        this.updateScore()
        this.updateScore()
        this.updateScore()

        for (let i = 0; i < 4; i++) {
            this.spawnEnemy()
        }
    }

    spawnTower() {
        const tower = new Tower
        this.add(tower)
    }

    spawnTowerup() {
        const towerup = new Towerup
        const tower = new Tower
        this.add(towerup)
        towerup.pos = new Vector(tower.x, tower.y)
    }

    switchScene() {
        console.log('hallo')
        this.engine.goToScene('endscene')

    }

    updateScore() {
        this.score++
        this.mylabel.text = `Score: ${this.score}`

        if (this.score === 10) {
            this.spawnTowerup()
            const tower = new Tower
            tower.kill()
            console.log('tower2')

        }
    }

    onDeactivate() {
        console.log(this.score)
        console.log(localStorage.getItem('highscore'))

        if (this.score > localStorage.getItem('highscore')) {
            localStorage.setItem('highscore', this.score)
        }

        this.enemytimer.cancel()
        this.bosstimer.cancel()

        this.actors.forEach(actor => {
            this.remove(actor)
        })

        this.score = 0

        this.onInitialize(this.engine)

    }


}

