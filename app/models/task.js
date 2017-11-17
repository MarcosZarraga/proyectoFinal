import DS from 'ember-data';

export default DS.Model.extend({
	areas : DS.belongsTo('area'),
	toDo: DS.attr('string')

});
