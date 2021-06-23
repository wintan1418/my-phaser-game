import Phaser from 'phaser';
import PreloaderScene from '../src/scenes/PreloaderScene';

it('checks if the class PreloaderScene is defined', () => {
  expect(PreloaderScene).toBeDefined();
});

it('PreloaderScene is a subclass of Phaser.Scene', () => {
  expect(PreloaderScene).toBeSubclassOf(Phaser.Scene);
});

it('PreloaderScene has a constructor', () => {
  expect(PreloaderScene.prototype.constructor).not.toBe(false);
});
