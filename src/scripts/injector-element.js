export const InjectorElement = (element) =>
  class extends element {
    provide(map) {
      this.addEventListener("inject", (event) => {
        if (event.target !== this && map.has(event.detail.token)) {
          event.stopPropagation();
          event.detail.provider = map.get(event.detail.token);
        }
      });
    }

    inject(token) {
      const event = new CustomEvent("inject", {
        detail: { token },
        bubbles: true,
        cancelable: true,
      });

      this.dispatchEvent(event);

      return event.detail.provider;
    }
  };
