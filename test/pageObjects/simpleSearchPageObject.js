const ParentPageObject = require('./parentPageObject')

class simpleSearchPageObject extends ParentPageObject {
  goToHomePage () {
    // the below url call is relative to the base url in the wdio.conf.js so the below call will actually just result in going straight to the base url
    browser.url('')
  }

  verifyHomePage () {
    this.isElementEqualToExpected($('h2=Recommended For You'), 'Recommended For You')
  }

  get acceptCookie() { return  $('#onetrust-accept-btn-handler')} // accpt cookies
  get searchBarInParent() { return $('._tf5swf')} //search bar in home page
  get searchBar() { return  $('._1g5dvk1')} //search bar in second page
  get leftDiv() { return $('._i24b1r').$$('._63p46ei') } // list of elements in only left div under discounts
 
}

module.exports = simpleSearchPageObject
