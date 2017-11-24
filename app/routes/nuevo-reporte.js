import Ember from 'ember';

export default Ember.Route.extend({
	model(){
		// this.store.createRecord('admin', {
		// 	autor: 'Beno',
		// 	email: 'beno@beno.com'
		// }).save();
		return this.store.createRecord('reporte');
	},
	setupController (controller) {
		this._super(...arguments);
		this.store.findAll('admin').then((admins) => {
			controller.set('admins', admins)
		});
	},
});
