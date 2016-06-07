import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    okay () {
      console.log('okay from outer');
      this.sendAction();
    },
  },
});
