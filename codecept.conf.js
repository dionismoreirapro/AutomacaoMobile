const {
  setHeadlessWhen,
  setCommonPlugins
} = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './steps/*_test.js',
  output: './output',
  helpers: {
    Appium: {
      app: '/Users/dionismoreira/Documents/Outsera/automacaoMobile/apk/app-release.apk',
      platform: 'Android',
      device: 'emulator'
    }
  },
  include: {
    I: './steps_file.js',


    login_pagePage: "./pages/login_page.js",
    home_pagePage: "./pages/home_page.js",
  },
  name: 'automacaoMobile'
}