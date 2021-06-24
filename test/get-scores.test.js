import { url, getScores } from '../src/components/api';

global.fetch = jest.fn(() => Promise.resolve({
  ok: true,
  json: () => Promise.resolve({ result: [{ user: 'wintan', score: 100 }] }),
}));

beforeEach(() => {
  fetch.mockClear();
});

it('checks if returns correct url', () => {
  getScores(url);
  expect(fetch).toHaveBeenCalledWith(url);
});

it('checks if wrong url is returned', () => {
  getScores(url);
  expect(fetch).not.toHaveBeenCalledWith('www.netlify.com');
});

it('retrieves data using the api and checks if it matches', () => {
  getScores(url).then((data) => {
    expect(data).toEqual([{ user: 'wintan', score: 100 }]);
  });
});
