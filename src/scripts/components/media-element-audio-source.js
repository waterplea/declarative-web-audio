import { InjectorElement } from "../injector-element.js";

export class WCMediaElementAudioSource extends InjectorElement(
  HTMLAudioElement
) {
  connectedCallback() {
    this.provide(
      new Map([
        [
          "node",
          new MediaElementAudioSourceNode(this.inject("context"), {
            mediaElement: this,
          }),
        ],
      ])
    );
  }
}
