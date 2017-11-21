import Ember from 'ember';

export default Ember.Controller.extend({
		actions : {
		createNewArea(name, info, ubication){
			this.get('model').save().then(
				swal(
  			'Correcto',
  			'La nueva area fue creada',
  			'success'
			));
			this.transitionToRoute('main');
		}
	}
});
