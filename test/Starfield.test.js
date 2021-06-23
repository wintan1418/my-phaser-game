import Phaser from 'phaser';
import Starfield from '../src/scenes/Starfield';

it('checks if the class Starfield is defined', () => {
  expect(Starfield).toBeDefined();
});

it('Starfield is a subclass of Phaser.Scene', () => {
  expect(Starfield).toBeSubclassOf(Phaser.Scene);
});

it('Starfield has a constructor', () => {
  expect(Starfield.prototype.constructor).not.toBe(false);
});
