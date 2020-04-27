import { InjectorElement } from "../injector-element.js";

export class WCGain extends InjectorElement(HTMLElement) {
  #node;

  connectedCallback() {
    this.#node = new GainNode(this.inject("context"));
    this.provide(new Map([["node", this.#node]]));
    this.inject("node").connect(this.#node);
  }

  attributeChangedCallback(name, _, value) {
    this.#node[name].value = parseFloat(value);
  }

  static get observedAttributes() {
    return ["gain"];
  }
}
