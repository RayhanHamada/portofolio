const mapToDeviconPath = (icon: string) => {
  const [first, ...last] = icon.split('-');

  return `${first}/${first}-${last.join('-')}`;
};

/**
 * @see https://devicon.dev/
 */
export const deviconLogos = [
  'html5-original',
  'css3-original',
  'typescript-original',
  'javascript-original',
  'react-original',
  'dart-original',
  'flutter-original',
  'npm-original-wordmark',
  'yarn-original',
  'postgresql-original',
  'googlecloud-original',
  'git-original',
].map(mapToDeviconPath);

export const links = [
  {
    link: 'https://github.com/RayhanHamada',
    logo: 'github-original',
  },
  {
    link: 'https://www.linkedin.com/in/muhammad-rayhan-hamada-budiman-033021194/',
    logo: 'linkedin-original',
  },
].map((e) => {
  e.logo = mapToDeviconPath(e.logo);

  return e;
});

export const cvLink =
  'https://1drv.ms/b/s!AkHRxXV_ERCXihIgArOYtt3qfha9?e=aCYYs1';
