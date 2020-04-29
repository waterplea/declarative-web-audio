import { InjectorElement } from "../injector-element.js";

export class WCDestination extends InjectorElement(HTMLElement) {
  connectedCallback() {
    this.inject(AudioNode).connect(this.inject(AudioContext).destination);
  }
}
