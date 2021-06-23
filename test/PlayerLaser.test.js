import PlayerLaser from '../src/objects/PlayerLaser';
import Base from '../src/Base';

it('checks if the class PlayerLaser is defined', () => {
  expect(PlayerLaser).toBeDefined();
});

it('PlayerLaser is a subclass of Base', () => {
  expect(PlayerLaser).toBeSubclassOf(Base);
});

it('PlayerLaser has a constructor', () => {
  expect(PlayerLaser.prototype.constructor).not.toBe(false);
});
