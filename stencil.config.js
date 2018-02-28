exports.config = {
  namespace: 'woptoasty',
  generateDistribution: true,
  serviceWorker: false,
  copy: [
    {
      src: 'components/wop-toasty-assets'
    }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
};
