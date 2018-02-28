exports.config = {
  namespace: 'woptoasty',
  generateDistribution: true,
  serviceWorker: false,
  copy: [
    {
      src: 'assets'
    }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
};
