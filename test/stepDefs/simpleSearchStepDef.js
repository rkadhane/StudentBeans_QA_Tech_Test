const { Given, When, Then } = require('cucumber')
const SimpleSearchPageObject = require('../pageObjects/simpleSearchPageObject')
const utils = require('../../utils/utils')

const simpleSearchPageObject = new SimpleSearchPageObject()
const utils1 = new utils()

Given('I am on the studentbeans homepage', function () {
  
  simpleSearchPageObject.goToHomePage()
  simpleSearchPageObject.verifyHomePage()
})
Given('I open the search bar', function () {
  browser.maximizeWindow();
  browser.pause(2000);
    
  let cookieDisplayed= $('#onetrust-accept-btn-handler').isDisplayed()
  if (cookieDisplayed == true)
      simpleSearchPageObject.acceptCookie.click()
    
    simpleSearchPageObject.searchBarInParent.waitForClickable({ timeout: 3000 });
    simpleSearchPageObject.searchBarInParent.click()
 
})
When('I enter {string}', function (NameStr) {
  
  simpleSearchPageObject.searchBar.setValue(NameStr) //enter search text in search text box

})
Then('I should be shown a search listing for {string}', function (NameStr) {
  browser.pause(2000);
  
  simpleSearchPageObject.leftDiv.filter(element => { // will run for all resulting list elements 

  let found = utils1.compareListwithString(element.getText(),NameStr) //function to check if partial text matches with the list element
  expect(found).to.equal(true) //check for all list items under disounts if it partially contains the search text
 
  })
})


