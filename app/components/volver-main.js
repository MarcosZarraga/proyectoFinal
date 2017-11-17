import Ember from 'ember';

export default Ember.Component.extend({
	actions : {
		goToMain(){
			this.transitionTo('main');
		}
	}
});
