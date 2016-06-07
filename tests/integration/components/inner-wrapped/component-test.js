import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('inner-wrapped', 'Integration | Component | inner wrapped', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{inner-wrapped}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#inner-wrapped}}
      template block text
    {{/inner-wrapped}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
