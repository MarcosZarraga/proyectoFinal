import Ember from 'ember';

export default Ember.Controller.extend({
		actions : {
		createNewReport(autor, grade, preview ){
			this.get('model').save();
		}
	}
});
