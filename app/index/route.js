import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    signIn () {
      console.log('sign-in from route');
    },
  },
});
