import { AbstractTransitionComponent } from 'vue-transition-component';
import NavigationTransitionController from './NavigationTransitionController';

// @vue/component
export default {
  name: 'Navigation',
  extends: AbstractTransitionComponent,
  methods: {
    handleAllComponentsReady() {
      this.transitionController = new NavigationTransitionController(this);
      this.isReady();
    },
  },
};
