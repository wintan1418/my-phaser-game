import Phaser from 'phaser';
import Button from '../src/components/Button';

it('checks if the class Button is defined', () => {
  expect(Button).toBeDefined();
});

it('Button is a subclass of Phaser.GameObjects.Container', () => {
  expect(Button).toBeSubclassOf(Phaser.GameObjects.Container);
});
