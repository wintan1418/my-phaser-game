import Phaser from 'phaser';
import LeaderBoard from '../src/scenes/LeaderBoard';

it('checks if the class LeaderBoard is defined', () => {
  expect(LeaderBoard).toBeDefined();
});

it('LeaderBoard is a subclass of Phaser.Scene', () => {
  expect(LeaderBoard).toBeSubclassOf(Phaser.Scene);
});

it('LeaderBoard has a constructor', () => {
  expect(LeaderBoard.prototype.constructor).not.toBe(false);
});
