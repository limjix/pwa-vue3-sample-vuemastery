module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  pwa: {
    manifestOptions: {
      name: "MyPWA",
      short_name: "MyPWA",
      icons: [
         {"src":"./img/icons/myicon.png","sizes":"512x512","type":"image/png"}
      ],
      background_color: "#12b0db",
      // display: "standalone",
      // theme_color: "#000000",
      // background_color: "red",
      // icons: [
      //   {
      //     src: "./favicon.svg",
      //     sizes: "512x512",
      //   },
      // ],
    },

    // configure the workbox plugin
    workboxPluginMode: 'GenerateSW',
    // workboxOptions: {
    //   // swSrc is required in InjectManifest mode.
    //   swSrc: 'src/service-worker.js',
    //   // ...other Workbox options...
    // }

    // appleMobileWebAppCapable: 'yes',
    // appleMobileWebAppStatusBarStyle: 'black',
  }
}
