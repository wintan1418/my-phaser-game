const key = 'birecoxpwqeuqudn';
const url = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${key}/scores`;
const networkError = (response) => {
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response;
};

const getScores = () => {
  const response = fetch(url)
    .then(networkError)
    .then((response) => response.json())
    .then((data) => {
      if (data.result.length === 0) {
        throw new Error();
      }
      return data.result.sort((a, b) => b.score - a.score);
    });
  return response;
};

const postScores = (user, score, url) => fetch(url, {
  method: 'POST',
  mode: 'cors',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ user, score }),
}).then(networkError);

export { url, getScores, postScores };
