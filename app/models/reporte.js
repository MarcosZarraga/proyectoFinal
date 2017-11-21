import DS from 'ember-data';

export default DS.Model.extend({
	autor: DS.belongsTo('admin'),
	review: DS.attr('string'),
	grade: DS.attr('number')

});
