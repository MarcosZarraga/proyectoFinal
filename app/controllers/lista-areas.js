import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		goToNuevaArea(){
			this.transitionToRoute('nueva-area')
		}
	}

});
