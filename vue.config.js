module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  pwa: {
    name: 'PWA-Vue3-Sample',
    themeColor: '#4DBA87',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',

    // configure the workbox plugin
    workboxPluginMode: 'GenerateSW',
    // workboxOptions: {
    //   // swSrc is required in InjectManifest mode.
    //   swSrc: 'src/service-worker.js',
    //   // ...other Workbox options...
    // }
  }
}
