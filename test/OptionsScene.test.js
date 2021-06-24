import Phaser from 'phaser';
import OptionsScene from '../src/scenes/OptionsScene';

it('checks if the class OptionsScene is defined', () => {
  expect(OptionsScene).toBeDefined();
});

it('OptionsScene is a subclass of Phaser.Scene', () => {
  expect(OptionsScene).toBeSubclassOf(Phaser.Scene);
});

it('OptionsScene has a constructor', () => {
  expect(OptionsScene.prototype.constructor).not.toBe(false);
});
