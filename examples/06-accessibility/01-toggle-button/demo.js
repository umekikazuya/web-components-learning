class ToggleButton extends HTMLElement {
  static get observedAttributes() {
    return ["pressed", "label"];
  }

  constructor() {
    super();
    this.root = this.attachShadow({ mode: "open" });
  }

  get pressed() {
    return this.hasAttribute("pressed");
  }

  set pressed(value) {
    this.toggleAttribute("pressed", Boolean(value));
  }

  connectedCallback() {
    this.render();
    this.root.addEventListener("click", (event) => {
      if (event.target instanceof HTMLButtonElement) {
        this.pressed = !this.pressed;
        this.dispatch();
      }
    });
  }

  attributeChangedCallback() {
    this.render();
  }

  dispatch() {
    this.dispatchEvent(
      new CustomEvent("toggle-change", {
        detail: { pressed: this.pressed },
        bubbles: true,
        composed: true,
      }),
    );
  }

  render() {
    const label = this.getAttribute("label") ?? "切り替え";
    const stateLabel = this.pressed ? "ON" : "OFF";

    this.root.innerHTML = `
      <style>
        button {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          min-height: 48px;
          padding: 0 16px;
          border: 1px solid #c5d0e0;
          border-radius: 999px;
          background: ${this.pressed ? "#1f43c9" : "#ffffff"};
          color: ${this.pressed ? "#ffffff" : "#172033"};
          font: inherit;
          cursor: pointer;
        }

        .state {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 42px;
          min-height: 30px;
          border-radius: 999px;
          background: ${this.pressed ? "rgba(255, 255, 255, 0.24)" : "#eef3fb"};
          color: inherit;
          font-weight: 700;
        }
      </style>

      <button type="button" aria-pressed="${String(this.pressed)}">
        <span>${label}</span>
        <span class="state">${stateLabel}</span>
      </button>
    `;
  }
}

customElements.define("toggle-button", ToggleButton);

const newsletterToggle = document.querySelector("#newsletter-toggle");
const toggleState = document.querySelector("#toggle-state");

newsletterToggle.addEventListener("toggle-change", (event) => {
  toggleState.textContent = event.detail.pressed
    ? "現在は購読中です。状態は aria-pressed と属性の両方に反映されています。"
    : "現在は未購読です。Space キーでも切り替えられます。";
});
