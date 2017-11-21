import Ember from 'ember';

export default Ember.Controller.extend({
	actions : {
		goToNuevoReporte(){
			this.transitionToRoute('nuevo-reporte');
		}
	}
});
