import { InjectorElement } from "../injector-element.js";

export class WCDestination extends InjectorElement(HTMLElement) {
  connectedCallback() {
    this.inject("node").connect(this.inject("context").destination);
  }
}
