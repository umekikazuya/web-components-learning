class CalloutBox extends HTMLElement {
  constructor() {
    super();
    this.root = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const heading = this.getAttribute("heading") ?? "Notice";

    this.root.innerHTML = `
      <style>
        :host {
          --callout-accent: #315efb;
          --callout-background: #eef3ff;
          --callout-text: #172033;
          display: block;
        }

        article {
          padding: 18px;
          border-left: 6px solid var(--callout-accent);
          border-radius: 16px;
          background: var(--callout-background);
          color: var(--callout-text);
        }

        h3 {
          margin: 0 0 10px;
        }

        p {
          margin: 0;
          line-height: 1.7;
        }
      </style>

      <article>
        <h3>${heading}</h3>
        <p><slot></slot></p>
      </article>
    `;
  }
}

customElements.define("callout-box", CalloutBox);

const calloutBox = document.querySelector("#callout-box");

const themes = {
  ocean: {
    accent: "#315efb",
    background: "#eef3ff",
    text: "#172033",
  },
  sunset: {
    accent: "#dd6b20",
    background: "#fff1e6",
    text: "#7a2e0b",
  },
  forest: {
    accent: "#0f9f6e",
    background: "#e7fff6",
    text: "#0b5d43",
  },
};

document.querySelectorAll("[data-theme]").forEach((button) => {
  button.addEventListener("click", () => {
    const theme = themes[button.dataset.theme];
    calloutBox.style.setProperty("--callout-accent", theme.accent);
    calloutBox.style.setProperty("--callout-background", theme.background);
    calloutBox.style.setProperty("--callout-text", theme.text);
  });
});
