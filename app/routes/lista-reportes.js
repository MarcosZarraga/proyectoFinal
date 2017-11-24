import Ember from 'ember';

export default Ember.Route.extend({
	model(){
		let reportes = this.store.findAll('reporte');
		let admins = this.store.findAll('admin');

		return Ember.RSVP.hash({
			reportes,
			admins
		});

		 // return this.store.findAll('reporte');
	}
});
