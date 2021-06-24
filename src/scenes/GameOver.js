/* eslint-disable prefer-destructuring */

import Phaser from 'phaser';
import config from '../config/config';
import { postScores, url } from '../components/api';
import Button from '../components/Button';

export default class GameOver extends Phaser.Scene {
  constructor() {
    super({ key: 'GameOver' });
  }

  preload() {
    this.load.audio('sndOver', 'content/sndBtnOver');
    this.load.audio('sndDown', 'content/sndBtnDown');
  }

  create() {
    const score = this.sys.game.globals.score;
    this.scoreTotal = score;
    this.title = this.add.text(config.width * 0.5, 128, 'GAME OVER', {
      fontFamily: 'monospace',
      fontSize: 48,
      fontStyle: 'bold',
      color: '#ffffff',
      align: 'center',
    });
    this.title.setOrigin(0.5);

    this.add
      .text(
        this.scale.width * 0.5,
        this.scale.height * 0.3,
        `Final score: ${this.scoreTotal}`,
        { fontSize: 24 },
      )
      .setOrigin();

    const form = document.createElement('form');
    const input = document.createElement('input');
    const submit = document.createElement('button');
    input.setAttribute('type', 'text');
    input.setAttribute('placeholder', 'Enter your name..');
    input.setAttribute('id', 'name');
    input.required = true;
    input.setAttribute('minlength', '3');
    input.setAttribute('maxlength', '10');
    input.style.padding = '7px';
    submit.style.padding = '7px';
    submit.setAttribute('type', 'submit');
    submit.textContent = 'Submit';
    document.body.appendChild(form);
    document.body.appendChild(submit);
    form.appendChild(input);
    form.appendChild(submit);

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.querySelector('#name').value;
      postScores(name, score, url)
        .then(() => {
          this.scene.start('LeaderBoard');
        })
        .catch(() => {
          this.add
            .text(config.width * 0.5, config.height * 0.1, 'Network Error')
            .setOrigin();
        });
    });
    this.add.dom(config.width * 0.5, config.height * 0.5, form);

    this.menuButton = new Button(
      this,
      400,
      500,
      'blueButton1',
      'blueButton2',
      'Menu',
      'Title',
    );
  }
}

/* eslint-enable prefer-destructuring */
