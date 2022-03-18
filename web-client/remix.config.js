/**
 * @type {import('@remix-run/dev/config').AppConfig}
 */
module.exports = {
  ignoredRouteFiles: ['.*'],
  server: process.env.NODE_ENV === 'development' ? undefined : 'server.js',
};
