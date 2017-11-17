import Ember from 'ember';

export default Ember.Controller.extend({
	session: Ember.inject.service(),
	actions : {
		login(provider)
		{
			this.get('session').open('firebase' ,  
				{
					provider : 'password',
					email : this.get('email'),
					password : this.get('password')
				}).then(()=>{
					return this.transitionToRoute('main')
				}).catch(()=>{
					swal(
  						'Oops...',
  						'Los datos no son correctos :(',
  						'error'
						)

				})
					
			}
		}
	
	
});
