import Ember from 'ember';

export default Ember.Controller.extend({
		actions : {
		selectAdmin (admin) {
			this.get('model').set('autor', admin);
		},
		createNewReport(nombre, grade, review ){
			this.get('model').save().then(()=>{
				swal(
  					'Correcto',
  					'Reporte creado exitosamente',
  					'success'
			);
				this.transitionToRoute('main');
			})
		}
	}
});
