import Phaser from 'phaser';
import EnemyTwo from '../objects/EnemyTwo';
import EnemyOne from '../objects/EnemyOne';
import config from '../config/config';
import Player from '../objects/Player';

export default class GameScene extends Phaser.Scene {
  constructor() {
    super({ key: 'GameScene' });

    this.scoreTotal = 0;
  }

  preload() {
    this.load.image('background', 'assets/images/sky.png');
    this.load.image('conne', 'assets/objects/corona1.png');
    this.load.image('conne1', 'assets/objects/corona22.png');
    this.load.image('enemy-laser', 'assets/objects/red-laser.png');
    this.load.image('player-laser', 'assets/objects/blue-laser.png');
    this.load.image('player', 'assets/objects/red1.png');
    this.load.audio('laser-sound', 'assets/sounds/laser-sound.ogg');
    this.load.audio('game-over-sound', 'assets/sounds/game-over.ogg');
    this.sys.game.globals.bgMusic.stop();
  }

  create() {
    // Background Image
    const img = this.add.image(
      this.cameras.main.width / 2,
      this.cameras.main.height / 2,
      'background',
    );

    const scaleX = this.cameras.main.width / img.width;
    const scaleY = this.cameras.main.height / img.height;
    const scale = Math.max(scaleX, scaleY);
    img.setScale(scale).setScrollFactor(0);

    // Scores Display
    this.scoreText = this.add.text(40, 40, '', {
      font: '24px Courier',
      fill: '#00ff00',
    });
