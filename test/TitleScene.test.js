import Phaser from 'phaser';
import TitleScene from '../src/scenes/TitleScene';

it('checks if the class TitleScene is defined', () => {
  expect(TitleScene).toBeDefined();
});

it('TitleScene is a subclass of Phaser.Scene', () => {
  expect(TitleScene).toBeSubclassOf(Phaser.Scene);
});

it('TitleScene has a constructor', () => {
  expect(TitleScene.prototype.constructor).not.toBe(false);
});
