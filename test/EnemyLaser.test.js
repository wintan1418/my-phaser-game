import EnemyLaser from '../src/objects/EnemyLaser';
import Base from '../src/Base';

it('checks if the class EnemyLaser is defined', () => {
  expect(EnemyLaser).toBeDefined();
});

it('EnemyLaser is a subclass of Base', () => {
  expect(EnemyLaser).toBeSubclassOf(Base);
});
