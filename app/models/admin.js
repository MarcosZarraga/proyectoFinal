import DS from 'ember-data';

export default DS.Model.extend({
	nombre: DS.attr('string'),
	email: DS.attr('email'),
	reporte: DS.hasMany('reporte')

});
