import Base from '../Base';

export default class EnemyLaser extends Base {
  constructor(scene, x, y) {
    super(scene, x, y, 'enemy-laser');
    this.body.velocity.y = 200;
  }
}
