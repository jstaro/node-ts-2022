module.exports = {
  esbuild: {
    target: 'ESNext',
    platform: 'node',
    format: 'esm',
  },
  prebuild() {
    console.log('prebuild');
  },
  postbuild() {
    console.log('postbuild');
  },
};
