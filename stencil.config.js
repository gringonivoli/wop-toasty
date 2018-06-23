exports.config = {
  namespace: 'woptoasty',
  outputTargets:[
    {
      type: 'dist'
    },
    {
      type: 'www',
      serviceWorker: false
    }
  ],
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
