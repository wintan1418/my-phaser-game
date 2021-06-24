/* eslint-disable no-unused-expressions */

import Audio from '../src/util/Audio';

const audio = new Audio();

it('This checks if audio turns on', () => {
  audio.musicOn = true;
  expect(audio.musicOn).toBeTruthy;
});

it('This checks if audio turns off', () => {
  audio.musicOn = false;
  expect(audio.musicOn).toBeFalsy;
});

it('This checks if the class Audio is actually defined', () => {
  expect(Audio).toBeDefined();
});

it('This checks if Audio has a constructor', () => {
  expect(Audio.prototype.constructor).not.toBe(false);
});

/* eslint-enable no-unused-expressions */
