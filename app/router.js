import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('login' , {path : '/'});
  this.route('main');
  this.route('lista-reportes');
  this.route('lista-empleados');
  this.route('lista-areas');
  this.route('nueva-area');
});

export default Router;
