import DS from 'ember-data';

export default DS.Model.extend({
	areas: DS.belongsTo('area'),
	number: DS.attr('number')

});
