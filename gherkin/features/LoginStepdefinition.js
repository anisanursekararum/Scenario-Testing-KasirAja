var {Given, When, Then} = require('cucumber');  
  
  Given(/^user navigate to the KasirAja login website$/, function () {  
    // Write code here that turns the phrase above into concrete actions  
    return console.log('Given - user navigate to the KasirAja login website');  
  }); 

  Given(/^email not registered$/, function () {  
    // Write code here that turns the phrase above into concrete actions  
    return console.log('Given - email not registered');  
  }); 

  Given(/^email already registered$/, function () {  
    // Write code here that turns the phrase above into concrete actions  
    return console.log('Given - email already registered');  
  }); 
  
  When(/^user enters the "([^"]*)" email "([^"]*)" password$/, function (email, password) {  
    return console.log("When - user enters the "+ email+" email "+password+" password");  
  });  
  
  Then(/^user should "([^"]*)" successfully loggedin to the application$/, function (loginType) {  
    return console.log("Then - user should "+ loginType+" successfully loggedin to the application");  
  });