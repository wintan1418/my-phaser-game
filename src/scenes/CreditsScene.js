/* eslint-disable no-unused-expressions */
/* eslint-disable func-names */

import Phaser from 'phaser';
import config from '../config/config';

export default class CreditsScene extends Phaser.Scene {
  constructor() {
    super('Credits');
  }

  create() {
    this.creditsText = this.add.text(0, 0, 'Credits', {
      fontSize: '32px',
      fill: '#fff',
    });

    this.madeForText = this.add.text(0, 0, 'Microverse Capstone Project', {
      fontSize: '26px',
      fill: '#fff',
    });

    this.zone = this.add.zone(
      config.width / 2,
      config.height / 2,
      config.width,
      config.height,
    );

    Phaser.Display.Align.In.Center(this.creditsText, this.zone);

    Phaser.Display.Align.In.Center(this.madeForText, this.zone);

    // this.madeByText.setY(400);
    this.madeForText.setY(500);

    this.creditsTween = this.tweens.add({
      targets: this.creditsText,
      y: -100,
      ease: 'Power1',
      duration: 3000,
      delay: 1000,
    });

    this.madeForTween = this.tweens.add({
      targets: this.madeForText,
      y: -300,
      ease: 'Power1',
      duration: 5000,
      delay: 4000,
      onComplete: function () {
        this.madeForTween.destroy;
        this.scene.start('Title');
      }.bind(this),
    });
  }
}

/* eslint-enable no-unused-expressions */
/* eslint-enable func-names */
