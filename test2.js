var webdriver = require('selenium-webdriver');

var driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();

driver.get("http:/www.google.com");

//wait until title contains qatools
driver.wait(function() {
    return driver.getTitle().then(function(title) {
        return title.indexOf('qatools') > -1;
    });
}, 10000);


var promise = driver.getTitle();

promise.then(function(title) 

{

console.log(title);

});

driver.quit();