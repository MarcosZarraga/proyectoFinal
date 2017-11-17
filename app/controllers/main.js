import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		goToListaReportes(){
			this.transitionToRoute('lista-reportes')
		},
		goToListaEmpleados(){
			this.transitionToRoute('lista-empleados')
			
		},
		goToListaAreas(){
			this.transitionToRoute('lista-areas')
			
		},
		logOut(){
			debugger;
		}
	}
});
