import {After,Before, Status} from "cucumber";
import { browser } from "protractor";

Before({tags: "@CalculatorTesting"}, function () {
  browser.manage().window().maximize();
});

Before({tags: "@RegressionTesting"}, function () {
  browser.manage().window().maximize();
});

After(async function (scenario) {

  if (scenario.result.status === Status.FAILED) {
    
      const screenshot= await browser.takeScreenshot();
      this.attach(screenshot,"image/png");
  }

});