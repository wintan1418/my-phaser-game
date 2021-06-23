import Phaser from 'phaser';

export default class Base extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, key, type) {
    super(scene, x, y, key);

    this.setData('Dead', false);
    this.setData('type', type);
    this.scene = scene;
    this.scene.add.existing(this);
    this.scene.physics.world.enableBody(this, 0);
  }

  dead(destroy) {
    if (!this.getData('Dead')) {
      if (this.shotFrequency !== undefined) {
        if (this.shotFrequency) {
          this.shotFrequency.remove(false);
        }
      }

      if (destroy) {
        this.destroy();
      } else {
        this.setVisible(false);
      }

      this.setData('Dead', true);
    }
  }
}
