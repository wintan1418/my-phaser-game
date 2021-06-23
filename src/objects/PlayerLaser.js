import Base from '../Base';

export default class PlayerLaser extends Base {
  constructor(scene, x, y) {
    super(scene, x, y, 'player-laser');
    this.setTexture('player-laser');
    this.setPosition(x, y);
    this.setScale(0.4);
    this.speed = 3;
    this.scene = scene;
    scene.physics.world.enable(this);
    scene.physics.add.collider(this, scene.enemies, this.shot, null, this);
  }

  preUpdate(time, delta) {
    if (this.active === false) {
      return;
    }
    super.preUpdate(time, delta);
    this.y -= this.speed;
  }
}
