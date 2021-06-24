import Player from '../src/objects/Player';
import Base from '../src/Base';

it('checks if the class Player is defined', () => {
  expect(Player).toBeDefined();
});

it('Player is a subclass of Base', () => {
  expect(Player).toBeSubclassOf(Base);
});

it('Player has a constructor', () => {
  expect(Player.prototype.constructor).not.toBe(false);
});
