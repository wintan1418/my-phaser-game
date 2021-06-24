import EnemyOne from '../src/objects/EnemyOne';
import Base from '../src/Base';

it('checks if the class EnemyOne is defined', () => {
  expect(EnemyOne).toBeDefined();
});

it('EnemyOne is a subclass of Base', () => {
  expect(EnemyOne).toBeSubclassOf(Base);
});

it('EnemyOne has a constructor', () => {
  expect(EnemyOne.prototype.constructor).not.toBe(false);
});
