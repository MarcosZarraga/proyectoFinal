import DS from 'ember-data';

export default DS.Model.extend({
	name : DS.attr('string'),
	asignado : DS.belongsTo('empleado'),
	tasks : DS.hasMany('task'),
	info : DS.attr('string'),
	ubication: DS.attr('string'),
});
