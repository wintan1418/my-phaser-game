import Phaser from 'phaser';
import config from '../config/config';
import { getScores, url } from '../components/api';
import Button from '../components/Button';

export default class LeaderBoard extends Phaser.Scene {
  constructor() {
    super('LeaderBoard');
  }

  create() {
    // Title
    this.add
      .text(config.width * 0.5, 50, 'Best scores', {
        fontSize: 40,
        color: '#fff',
      })
      .setOrigin();

    getScores(url).then((data) => {
      const arr = data;
      for (let i = 0; i < 7; i += 1) {
        if (!arr[i]) {
          break;
        }
        const userData = arr[i];
        this.add
          .text(
            config.width * 0.5,
            config.height * 0.3 + 30 * i,
            `${userData.user}: ${userData.score}`,
          )
          .setOrigin();
      }
    });