import Ember from 'ember';
import startApp from '../helpers/start-app';

var App;

module('Integration - About Page' , {
  beforeEach: function(){
    App = startApp();
  },
  afterEach: function() {
    Ember.run(App, 'destroy');
  }
});

test('Should Navigate to the About Page', function(){
  visit('/').then(function(assert){
    click("a:contains('About')").then(function(assert){
      assert.equal(find('h3').text(), 'About');
    });
  });
});
