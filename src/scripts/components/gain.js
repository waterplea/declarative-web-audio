import { InjectorElement } from "../injector-element.js";

export class WCGain extends InjectorElement(HTMLElement) {
  #node = new GainNode(this.inject(AudioContext));

  connectedCallback() {
    this.provide(new Map([[AudioNode, this.#node]]));
    this.inject(AudioNode).connect(this.#node);
  }

  attributeChangedCallback(name, _, value) {
    this.#node[name].value = parseFloat(value);
  }

  static get observedAttributes() {
    return ["gain"];
  }
}
