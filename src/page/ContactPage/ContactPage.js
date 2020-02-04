import { AbstractPageTransitionComponent } from 'vue-transition-component';
import ContactPageTransitionController from './ContactPageTransitionController';
import ContactForm from '../../component/ContactForm';

// @vue/component
export default {
  name: 'ContactPage',
  components: {
    ContactForm,
  },
  extends: AbstractPageTransitionComponent,
  methods: {
    handleAllComponentsReady() {
      this.transitionController = new ContactPageTransitionController(this);
      this.isReady();
    },
  },
};
