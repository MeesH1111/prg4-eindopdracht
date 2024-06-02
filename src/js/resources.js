import { ImageSource, Sound, Resource, Loader, FontSource, Font } from 'excalibur'

const Resources = {
    Fish: new ImageSource('images/fish.png'),
    Map: new ImageSource('images/top_down_map.png'),
    Enemy: new ImageSource('images/enemy.png'),
    Boss: new ImageSource('images/boss.png'),
    Placehold: new ImageSource('images/platform.png'),
    Tower: new ImageSource('images/wizardtower.png'),
    Towerup: new ImageSource('images/wizardtowerup.png'),
    Bullet: new ImageSource('images/bullet.png'),
    Playbutton: new ImageSource('images/playbutton1.png'),
    Startscenebg: new ImageSource('images/top_down_map_with_blur2.png'),
    Endscenebg: new ImageSource('images/top_down_map_with_blur.png'),
    Gameover: new ImageSource('images/gameover2.png')
}




const ResourceLoader = new Loader()
for (let res of Object.values(Resources)) {
    ResourceLoader.addResource(res)
}

export { Resources, ResourceLoader }