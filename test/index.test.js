import Game from '../src/index';

it('checks if the class Game is defined', () => {
  expect(Game).toBeDefined();
});

it('Game has a constructor', () => {
  expect(Game.prototype.constructor).not.toBe(false);
});
