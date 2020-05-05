import { Config } from 'protractor';

export let config: Config = {
  // The address of a running selenium server.
  seleniumAddress: 'http://localhost:4444/wd/hub',
  //directConnect:true,

   // set to "custom" instead of cucumber.
   framework: 'custom',

   // path relative to the current config file
   frameworkPath: require.resolve('protractor-cucumber-framework'),

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    browserName: 'chrome'
  },

  // Spec patterns are relative to the configuration file location passed
  // to protractor (in this example conf.js).
  // They may include glob patterns.
  specs: ['../features/addingProducts.feature'],

  cucumberOpts: {

    tags:"@RegressionTesting",
    format:'json:./tmp/results.json',

    // require step definitions
    require: [
      './stepDefinitions/*.js' // accepts a glob
    ]
  },

  plugins: [{
    package: 'protractor-multiple-cucumber-html-reporter-plugin',
    options:{
          // read the options part for more options
          automaticallyGenerateReport: true,
          removeExistingJsonReportFile: true
    }
}]
 
};