var webdriver = require('selenium-webdriver');
 
var driver = new webdriver.Builder().
withCapabilities(webdriver.Capabilities.chrome()).

// config wait time
//driver.manage().setTimeouts({implicit: 10000, pageLoad: 10000});
   build();
console.log("Starting test");
driver.get('https://demoqa.com/');

driver.quit();