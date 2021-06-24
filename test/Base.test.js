import Phaser from 'phaser';
import Base from '../src/Base';

it('checks if the class Base is defined', () => {
  expect(Base).toBeDefined();
});

it('Base is a subclass of Phaser.GameObjects.Sprite', () => {
  expect(Base).toBeSubclassOf(Phaser.GameObjects.Sprite);
});

it('Base has a constructor', () => {
  expect(Base.prototype.constructor).not.toBe(false);
});
