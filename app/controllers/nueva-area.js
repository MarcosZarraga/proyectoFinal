import Ember from 'ember';

export default Ember.Controller.extend({
		actions : {
		createNewArea(name, info, ubication){
			this.get('model').save();
		}
	}
});
