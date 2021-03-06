const fetch = require('node-fetch');
const getRepos = (url) => {
  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      return data.map((repo) => repo.name);
    });
};

describe('repository name', () => {
  test('find repository', async () => {
    const repos = await getRepos('https://api.github.com/orgs/tryber/repos');
    expect(repos).toContain('sd-01-week4-5-project-todo-list');
    expect(repos).toContain('sd-01-week4-5-project-meme-generator');
  });
});
