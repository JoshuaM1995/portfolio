import { Octokit } from '@octokit/rest';
import { NextApiRequest, NextApiResponse } from 'next';

const octokit = new Octokit({
  //TODO: Move to env
  appId: 189106,
  privateKey: '51b7cc6b346d60b703281caef3229e6614c4f8e0',
});

const firstCommitHashes = [
  { repoName: 'spotalytics', hash: '8957d7c0d72e05d52c94e3a999022bfc697a50a3' },
  { repoName: 'pokedex', hash: 'de10e74c92a3a2e6f467f3df5fe69c6d2d8a54c3' },
];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { repo } = req.query;
  const firstCommitHash = firstCommitHashes.find(
    ({ repoName }) => repoName === repo
  )?.hash;

  if (!firstCommitHash) {
    res.status(500).json({ error: `Commit hash not found for repo: ${repo}` });
    return;
  }

  try {
    const commits = (
      await octokit.repos.listCommits({
        owner: 'JoshuaM1995',
        repo: repo as string,
        per_page: 1,
      })
    ).data;
    const latestCommit = commits[0];

    const {
      data: { ahead_by },
    } = await octokit.repos.compareCommits({
      owner: 'JoshuaM1995',
      repo: repo as string,
      base: firstCommitHash,
      head: latestCommit.sha,
    });
    res.status(200).json({ count: ahead_by });
  } catch (error) {
    console.error('Failed', error);
    res.status(500).json({ error });
  }
}
