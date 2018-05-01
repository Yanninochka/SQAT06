const { Given, When, Then } = require('cucumber')
const chai = require('chai')
const should = chai.should()

"use strict";


Given('I go to duck duck go', function(callback) {
  this.browser
    .init()
    .url('https://duckduckgo.com/').then(function() {
      callback();
    })
})

When('I search for WebdriverIO', function(callback) {
  this.browser
    .setValue('#search_form_input_homepage', 'WebdriverIO')
    .click('#search_button_homepage').then(function(){
      callback();
    })
})

Then('I should see the search results', function(callback) {
  this.browser
    .getTitle().then(function(result){
        result.should.equal("WebdriverIO at DuckDuckGo");
        callback();
  }).catch(function(error){
    callback(error);
  })
})

Given('I go to figure1', function(callback) {
  this.browser
    .init()
    .url('https://app.figure1.com/account/register').then(function() {
      callback();
    })
})

When('I sign up with valid credentials', function(callback) {
  this.browser
    .waitForVisible('.register-page__username-input')
    .setValue('.register-pag__username-input', 'ghjghjsdfgjdfgdfjh')
    .setValue('.register-page__email-input', 'ghjghjsdfgjdfgdfjh@gmail.com')
    .setValue('.register-page__password-input', 'ghjghjsdfgjdfgdfjh')
    .setValue('.register-page__confirm-password-input', 'ghjghjsdfgjdfgdfjh')
    .addValue('.register-page__specialties-list', 'Physician')
    .addValue('.register-page__specialties-other-list', 'Anesthesiology')
    .scroll('.register-page__terms-checkbox')
    .click('.register-page__terms-checkbox')
    .click('.register-page__submit-button')
    .then(function(){
      callback();
    }).catch(function(error){
    callback(error);
  })
})



