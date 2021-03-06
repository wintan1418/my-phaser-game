import Phaser from 'phaser';
import CreditsScene from '../src/scenes/CreditsScene';

it('checks if the class CreditsScene is defined', () => {
  expect(CreditsScene).toBeDefined();
});

it('CreditsScene is a working subclass of Phaser.Scene', () => {
  expect(CreditsScene).toBeSubclassOf(Phaser.Scene);
});

it('CreditsScene has a functional constructor', () => {
  expect(CreditsScene.prototype.constructor).not.toBe(false);
});
