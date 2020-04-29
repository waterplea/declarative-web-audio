import { WCAudioContext } from "./components/audio-context.js";
import { WCMediaElementAudioSource } from "./components/media-element-audio-source.js";
import { WCGain } from "./components/gain.js";
import { WCDestination } from "./components/destination.js";

customElements.define("audio-context", WCAudioContext);
customElements.define("gain-node", WCGain);
customElements.define("destination-node", WCDestination);
customElements.define(
  "media-element-audio-source-node",
  WCMediaElementAudioSource,
  {
    extends: "audio",
  }
);
