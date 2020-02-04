import { AbstractTransitionComponent } from 'vue-transition-component';
import ContactFormTransitionController from './ContactFormTransitionController';

// @vue/component
export default {
  name: 'ContactForm',
  extends: AbstractTransitionComponent,
  data() {
    return {
      fields: [{ name: 'foo' }, { name: 'foo' }, { name: 'foo' }],
    };
  },
  methods: {
    handleAllComponentsReady() {
      this.transitionController = new ContactFormTransitionController(this);
      this.isReady();
    },
  },
};
