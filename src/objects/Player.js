import Phaser from 'phaser';
import Base from '../Base';
import config from '../config/config';
import PlayerLaser from './PlayerLaser';

export default class Player extends Base {
  constructor(scene, x, y, key) {
    super(scene, x, y, key, 'Player');

    this.deltaX = 5;
    this.deltaY = 5;
    this.setData('shooting', false);
    this.setData('shotFrequency', 20);
    this.setData('shootTime', this.getData('shotFrequency') - 1);
  }

  up() {
    if (this.y > 0) {
      this.y -= this.deltaY;
    }
  }

  down() {
    if (this.y < config.height) {
      this.y += this.deltaY;
    }
  }

  left() {
    if (this.x > 0) {
      this.x -= this.deltaX;
    }
  }

  right() {
    if (this.x < config.width) {
      this.x += this.deltaX;
    }
  }

  shot() {
    this.scene.time.addEvent({
      delay: 1000,
      callback() {
        this.scene.scene.start('GameOver');
      },
      callbackScope: this,
      loop: false,
    });
  }

  update() {
    this.body.setVelocity(0, 0);

    this.y = Phaser.Math.Clamp(this.y, 0, config.height);
    this.x = Phaser.Math.Clamp(this.x, 0, config.width);

    if (this.getData('shooting')) {
      if (this.getData('shootTime') < this.getData('shotFrequency')) {
        this.setData('shootTime', this.getData('shootTime') + 1);
      } else {
        const laser = new PlayerLaser(this.scene, this.x, this.y - 30);
        this.scene.playerLasers.add(laser);

        this.scene.sfx.laser.play();
        this.setData('shootTime', 0);
      }
    }
  }
}
