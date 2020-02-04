import { AbstractTransitionComponent } from 'vue-transition-component';
import HeroTransitionController from './HeroTransitionController';

// @vue/component
export default {
  name: 'Hero',
  extends: AbstractTransitionComponent,
  methods: {
    handleAllComponentsReady() {
      this.transitionController = new HeroTransitionController(this);
      this.isReady();
    },
  },
};
