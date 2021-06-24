/* eslint-disable no-unused-expressions */

import Phaser from 'phaser';

export default class Starfield extends Phaser.Scene {
  constructor() {
    super({ key: 'Starfield', active: true });

    this.stars;

    this.distance = 300;
    this.speed = 250;

    this.max = 500;
    this.xx = [];
    this.yy = [];
    this.zz = [];
  }

  preload() {
    this.load.image('star', 'assets/sky.png');
  }

  create() {
    this.input.keyboard.enabled = false;

    this.stars = this.add.blitter(0, 0, 'star');

    for (let i = 0; i < this.max; i += 1) {
      this.xx[i] = Math.floor(Math.random() * 800) - 400;
      this.yy[i] = Math.floor(Math.random() * 600) - 300;
      this.zz[i] = Math.floor(Math.random() * 1700) - 100;

      const perspective = this.distance / (this.distance - this.zz[i]);
      const x = 400 + this.xx[i] * perspective;
      const y = 300 + this.yy[i] * perspective;

      this.stars.create(x, y);
    }
  }

  update(time, delta) {
    for (let i = 0; i < this.max; i += 1) {
      const perspective = this.distance / (this.distance - this.zz[i]);
      const x = 400 + this.xx[i] * perspective;
      const y = 300 + this.yy[i] * perspective;

      this.zz[i] += this.speed * (delta / 1000);

      if (this.zz[i] > 300) {
        this.zz[i] -= 600;
      }

      const bob = this.stars.children.list[i];

      bob.x = x;
      bob.y = y;
    }
  }
}

/* eslint-enable no-unused-expressions */
