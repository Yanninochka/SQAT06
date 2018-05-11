const { Given, When, Then } = require('cucumber')
const chai = require('chai')
const should = chai.should()

"use strict";


Given('I go to Figure1', function(callback) {
  this.browser
    .init()
    .url('https://app.figure1.com/account/register').then(function() {
      callback();
    })
})

When('I regester and go into', function(callback) {
  this.browser
    .waitForVisible('.register-page__username-input',5000)
    .setValue('.register-page__username-input',Math.random().toString(36).substring(7))
    .setValue('.register-page__email-input', Math.random().toString(36).substring(2,11) + '@gmail.com')
    .setValue('.register-page__password-input ', '101010')
    .setValue('.register-page__confirm-password-input', '101010')
    .addValue('.register-page__specialties-list', 'Physician')
    .addValue('.register-page__specialties-other-list', 'Cardiology')
    .scroll('.register-page__terms-checkbox')
    .click('.register-page__terms-checkbox')
    .click('.register-page__submit-button')
    .then(function(){
      callback();
    }).catch(function(error){
    callback(error);
  })
})

Then('I should see confirm Figure1', function(callback) {
  this.browser
  .waitForVisible(".feed-wrapper",5000)
  .isVisible(".feed-wrapper").then(function(result){
        result.should.be.true;
        callback();
  }).catch(function(error){
    callback(error);
  })
})

// Then('I should see confirm Figure1', function(callback) {
//   this.browser
//    .getTitle().then(function(result){
//         result.should.equal("Figure 1");
//         callback();
//   }).catch(function(error){
//     callback(error);
//   })})