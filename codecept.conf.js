exports.config = {
  tests: './steps/*_test.js',
  output: './output',
  helpers: {
    Appium: {
      platform: 'Android',
      app: 'C:/Users/thayr/Documents/app-release.apk',
      desiredCapabilities: {
        appPackage: "com.qazandoapp",
        appActivity: "MainActivity",
        deviceName: "pixel",
        platformVersion: "9"
      }
    }
  },
  include: {
    I: './steps_file.js',
    login_page: './pages/login_page.js.js',
    home_page: './pages/home_page.js',
  },
  mocha: {},
  bootstrap: './server/server.js',
  teardown: './server/server.js',
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    retryFailedStep: {
      enabled: true
    }
  },
  name: 'qazando-automation'
}