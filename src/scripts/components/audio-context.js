import { InjectorElement } from "../injector-element.js";

export class WCAudioContext extends InjectorElement(HTMLElement) {
  connectedCallback() {
    this.provide(new Map([[AudioContext, new AudioContext()]]));
  }
}
