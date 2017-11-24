import DS from 'ember-data';

export default DS.Model.extend({
	autor: DS.attr('string'),
	email: DS.attr('string'),
	reportes: DS.hasMany('reporte')

});
