var Person = Backbone.Model.extend({
		defaults: {
			name: 'dave',
			age: 23,
			occupation: 'Worker'
		},

		validate: function(attributes) {
				if(attributes.age < 0) {
					return "age must be postive";
				}
				if (!attributes.name) {
					return 'you must have a name'
				}
		},

		work: function() {
				return this.get('name') + "is working";
		}
});

var PersonView = Backbone.View.extend({
  tagName: 'li',

  template: _.template( $('#personTemplate').html()),

  initialize: function(){
      this.render();
  },

  render: function(){
      this.$el.html( this.template(this.model.toJSON()));
  }
});
