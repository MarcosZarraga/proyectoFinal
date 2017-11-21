import Ember from 'ember';

export default Ember.Controller.extend({
		actions : {
		createNewEmpleado(nombre, areas){
			this.get('model').save().then(()=>{
				swal(
  					'Correcto',
  					'Empleado añadido exitosamente',
  					'success'
			);
				this.transitionToRoute('main');
			})
		}
	}
});
