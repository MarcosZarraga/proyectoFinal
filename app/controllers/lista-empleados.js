import Ember from 'ember';

export default Ember.Controller.extend({
		actions : {
		goToNuevoEmpleado(){
			this.transitionToRoute('nuevo-empleado');
		}
	}

});
