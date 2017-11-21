import DS from 'ember-data';

export default DS.Model.extend({
	autor: DS.attr('string'),
	review: DS.attr('string'),
	grade: DS.attr('string'),
	areaEvaluated: DS.belongsTo('area')

});
