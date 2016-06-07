import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    signIn () {
      console.log('sign-in from inner');
      this.sendAction();
    },
  },
});
