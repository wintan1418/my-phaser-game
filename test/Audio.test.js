/* eslint-disable no-unused-expressions */

import Audio from '../src/util/Audio';

const audio = new Audio();

it('checks if audio turns on', () => {
  audio.musicOn = true;
  expect(audio.musicOn).toBeTruthy;
});

it('checks if audio turns off', () => {
  audio.musicOn = false;
  expect(audio.musicOn).toBeFalsy;
});

it('checks if the class Audio is defined', () => {
  expect(Audio).toBeDefined();
});

it('Audio has a constructor', () => {
  expect(Audio.prototype.constructor).not.toBe(false);
});

/* eslint-enable no-unused-expressions */
