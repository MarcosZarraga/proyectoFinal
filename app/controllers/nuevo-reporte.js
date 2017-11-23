import Ember from 'ember';

export default Ember.Controller.extend({
		actions : {
		createNewReport(nombre, grade, review ){
			console.log(review);
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
