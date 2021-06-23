import Phaser from 'phaser';
import Button from '../components/Button';

export default class OptionsScene extends Phaser.Scene {
  constructor() {
    super('Options');
  }

  create() {
    this.audio = this.sys.game.globals.audio;

    this.text = this.add.text(300, 100, 'Options', { fontSize: 40 });
    this.musicButton = this.add.image(200, 200, 'checkedBox');
    this.musicText = this.add.text(250, 190, 'Music Enabled', { fontSize: 24 });

    this.soundButton = this.add.image(200, 300, 'checkedBox');
    this.soundText = this.add.text(250, 290, 'Sound Enabled', { fontSize: 24 });

    this.musicButton.setInteractive();
    this.soundButton.setInteractive();

    this.musicButton.on('pointerdown', () => {
      this.audio.musicOn = !this.audio.musicOn;
      this.updateAudio();
    });

    this.soundButton.on('pointerdown', () => {
      this.audio.soundOn = !this.audio.soundOn;
      this.updateAudio();
    });

    this.updateAudio();

    this.menuButton = new Button(
      this,
      400,
      500,
      'blueButton1',
      'blueButton2',
      'Menu',
      'Title',
    );

    this.updateAudio();
  }