/**
 * Created by School on 2/28/2017.
 */
import Ember from 'ember';
import {module, test} from 'qunit';
import startApp from '../helpers/start-app';

var App;

module('Integration - Landing Page', {
  beforeEach: function() {
    App=startApp();
  },
  afterEach:function(){
  Ember.run(App, 'destroy');
  }
});

test('Should welcome me to boston ember', function(assert){
  visit('/').then(function(){
    assert.equal(find('h2#title').text(), 'Welcome to Boston Ember');
  });
});
