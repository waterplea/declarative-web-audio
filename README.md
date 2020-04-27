# Declarative Web Audio API

This is a proof of concept repository showing how you
can use [Web Audio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API)
in a declarative fashion with native
[Web Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components).
Here's an example of a custom volume control:

```html
<audio-context>
  <audio is="media-element-audio-source-node" src="src/assets/demo.mp3">
    <gain-node gain="0.5">
      <destination-node />
    </gain-node>
  </audio>
</audio-context>
```

For a complete solution in a form of Angular library see
[@ng-web-apis/audio](https://ng-web-apis.github.io/audio)
