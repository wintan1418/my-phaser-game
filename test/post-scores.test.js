import { url, postScores } from '../src/components/api';

global.fetch = jest.fn(() => Promise.resolve({
  ok: true,
  json: () => Promise.resolve({ result: 'You have successfully uploaded your scores' }),
}));

beforeEach(() => {
  fetch.mockClear();
});

it('checks if fetches once', () => {
  postScores(url);
  expect(fetch).toHaveBeenCalledTimes(1);
});

it('checks if function does not call for another url', () => {
  postScores(url);
  expect(fetch).not.toHaveBeenCalledWith('www.youtube.com');
});

it('checks if score was uploaded', () => {
  postScores()
    .then((response) => response.json())
    .then((data) => {
      expect(data.result).toEqual('You have successfully uploaded your scores');
    });
});
