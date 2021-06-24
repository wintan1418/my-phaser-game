import Phaser from 'phaser';
import GameOver from '../src/scenes/GameOver';

it('checks if the class GameOver is defined', () => {
  expect(GameOver).toBeDefined();
});

it('GameOver is a subclass of Phaser.Scene', () => {
  expect(GameOver).toBeSubclassOf(Phaser.Scene);
});

it('GameOver has a constructor', () => {
  expect(GameOver.prototype.constructor).not.toBe(false);
});
