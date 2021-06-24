import Phaser from 'phaser';
import GameScene from '../src/scenes/GameScene';

it('checks if the class GameScene is defined', () => {
  expect(GameScene).toBeDefined();
});

it('GameScene is a subclass of Phaser.Scene', () => {
  expect(GameScene).toBeSubclassOf(Phaser.Scene);
});

it('GameScene has a constructor', () => {
  expect(GameScene.prototype.constructor).not.toBe(false);
});
