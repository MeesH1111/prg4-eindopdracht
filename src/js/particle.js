import { Actor, Color, EmitterType, ParticleEmitter } from "excalibur";


export class Particle extends Actor {
    constructor() {
        super()
    }

    onInitialize(engine) {
        const emitter = new ParticleEmitter({})
        emitter.emitterType = EmitterType.Circle;
        emitter.radius = 5;
        emitter.minVel = 100;
        emitter.maxVel = 200;
        emitter.minAngle = 0;
        emitter.maxAngle = Math.PI * 2;
        emitter.emitRate = 300;
        emitter.opacity = 0.5;
        emitter.fadeFlag = true;
        emitter.particleLife = 1000;
        emitter.maxSize = 10;
        emitter.minSize = 1;
        emitter.particleColor = Color.Rose;
        emitter.isEmitting = true;

        this.addChild(emitter)
        console.log('particlae')
    }
}