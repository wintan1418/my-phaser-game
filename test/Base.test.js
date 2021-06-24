import Phaser from 'phaser';
import Base from '../src/Base';

it('This checks if the class Base is properly defined', () => {
  expect(Base).toBeDefined();
});

it('Base is a subclass of Phaser.GameObjects.Sprite', () => {
  expect(Base).toBeSubclassOf(Phaser.GameObjects.Sprite);
});

it('Base has a working  constructor', () => {
  expect(Base.prototype.constructor).not.toBe(false);
});
