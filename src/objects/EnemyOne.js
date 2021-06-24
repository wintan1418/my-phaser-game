import Phaser from 'phaser';
import Base from '../Base';
// import EnemyLaser from './EnemyLaser';

export default class EnemyOne extends Base {
  constructor(scene, x, y) {
    super(scene, x, y, 'conne', 'EnemyOne');

    this.body.velocity.y = Phaser.Math.Between(60, 100);

    this.shotFrequency = this.scene.time.addEvent({
      delay: 1100,

    });
  }
}
