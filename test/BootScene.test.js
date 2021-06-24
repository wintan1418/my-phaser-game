import Phaser from 'phaser';
import BootScene from '../src/scenes/BootScene';

it('Scans to check if the class BootScene is defined', () => {
  expect(BootScene).toBeDefined();
});

it('BootScene is a subclass of Phaser.Scene', () => {
  expect(BootScene).toBeSubclassOf(Phaser.Scene);
});

it('BootScene has a constructor', () => {
  expect(BootScene.prototype.constructor).not.toBe(false);
});
