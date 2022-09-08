import octokit from 'src/utils/octokit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async function () {
  const avatarURL = octokit.rest.users
    .getByUsername({
      username: 'RayhanHamada',
    })
    .then((res) => res.data.avatar_url);

  return {
    avatarURL,
  };
};
