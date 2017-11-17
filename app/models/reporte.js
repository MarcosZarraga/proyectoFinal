import DS from 'ember-data';

export default DS.Model.extend({
	admins: DS.belongsTo('admin'),
	review: DS.attr('string')

});
