import Ember from 'ember';

export default Ember.Controller.extend({
	session: Ember.inject.service(),
	actions: {
		login(username, password){
		
			this.get('firebaseApp').auth().createUserWithEmailAndPassword(username, password).then(()=>{
				this.set('username', null);
				this.set('password', null);
			});
		}

	}
	
});
