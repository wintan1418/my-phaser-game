import Phaser from 'phaser';

export default class BootScene extends Phaser.Scene {
  constructor() {
    super({ key: 'Boot', active: true });
  }

  create() {
    this.scene.start('Preloader');
  }
}
