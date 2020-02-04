import {
  AbstractTransitionController,
  IAbstractTransitionComponent,
} from 'vue-transition-component';
import { TimelineMax, Expo } from 'gsap';

export default class HeroTransitionController extends AbstractTransitionController {
  /**
   * Use this method to setup your transition in timeline
   *
   * @protected
   * @method setupTransitionInTimeline
   * @param {TimelineLite | TimelineMax} timeline The transition in timeline
   * @param {IAbstractTransitionComponent} parent The reference to the parent controller
   * @param {string} id The transition id that was provided when constructing the controller
   */
  protected setupTransitionInTimeline(
    timeline: TimelineMax,
    parent: IAbstractTransitionComponent,
    id: string,
  ): void {
    const { copy, name } = parent.$refs;

    timeline.fromTo(
      parent.$el,
      0.8,
      {
        scale: 0.9,
        autoAlpha: 0,
      },
      {
        scale: 1,
        autoAlpha: 1,
        ease: Expo.easeOut,
      },
    );

    timeline.fromTo(
      copy,
      1,
      {
        y: 100,
      },
      {
        y: 0,
        ease: Expo.easeOut,
      },
      0,
    );

    timeline.fromTo(
      name,
      1,
      {
        x: 400,
        autoAlpha: 0,
      },
      {
        x: 0,
        autoAlpha: 1,
        ease: Expo.easeOut,
      },
      '-=0.75',
    );
  }

  /**
   * Use this method to setup your transition out timeline
   *
   * @protected
   * @method setupTransitionOutTimeline
   * @param {TimelineLite | TimelineMax} timeline The transition in timeline
   * @param {IAbstractTransitionComponent} parent The reference to the parent controller
   * @param {string} id The transition id that was provided when constructing the controller
   */
  protected setupTransitionOutTimeline(
    timeline: TimelineMax,
    parent: IAbstractTransitionComponent,
    id: string,
  ): void {
    const { copy } = parent.$refs;
    timeline.to(copy, 0.5, {
      scale: 2,
      ease: Expo.easeOut,
      autoAlpha: 0,
    });
    timeline.to(
      parent.$el,
      0.5,
      {
        autoAlpha: 0,
        scale: 1.2,
        ease: Expo.easeOut,
      },
      '-=0.25',
    );
  }

  /**
   * Use this method to setup your looping timeline
   *
   * @protected
   * @method setupLoopingAnimationTimeline
   * @param {TimelineLite | TimelineMax} timeline The transition in timeline
   * @param {IAbstractTransitionComponent} parent The reference to the parent controller
   * @param {string} id The transition id that was provided when constructing the controller
   */
  protected setupLoopingAnimationTimeline(
    timeline: TimelineMax,
    parent: IAbstractTransitionComponent,
    id: string,
  ): void {}
}
