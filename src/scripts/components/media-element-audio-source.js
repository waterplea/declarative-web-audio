import { InjectorElement } from "../injector-element.js";

export class WCMediaElementAudioSource extends InjectorElement(
  HTMLAudioElement
) {
  connectedCallback() {
    this.provide(
      new Map([
        [
          AudioNode,
          new MediaElementAudioSourceNode(this.inject(AudioContext), {
            mediaElement: this,
          }),
        ],
      ])
    );
  }
}
