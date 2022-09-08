import { GITHUB_ACCESS_TOKEN } from '$env/static/private';
import { Octokit } from 'octokit';

export default new Octokit({
  auth: GITHUB_ACCESS_TOKEN,
});
