//open brower

var webdriver = require('selenium-webdriver'),
           By = webdriver.By;
var driver = new webdriver.Builder()
                          .forBrowser('chrome')
                          .build();
//launch app
driver.get("https://www.amazon.com/");

//enter text
var loginTxt = driver.findElement(By.id("twotabsearchtextbox"));
loginTxt.sendKeys("camera");

//close browser
driver.quit();