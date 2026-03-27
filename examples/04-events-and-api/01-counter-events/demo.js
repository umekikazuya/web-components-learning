class CounterPanel extends HTMLElement {
  constructor() {
    super();
    this.value = 0;
    this.root = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
    this.root.addEventListener("click", (event) => {
      if (!(event.target instanceof HTMLButtonElement)) {
        return;
      }

      if (event.target.dataset.action === "increment") {
        this.value += 1;
      }

      if (event.target.dataset.action === "decrement") {
        this.value -= 1;
      }

      this.sync();
    });
  }

  reset() {
    this.value = 0;
    this.sync();
  }

  sync() {
    this.render();
    this.dispatchEvent(
      new CustomEvent("count-change", {
        detail: { value: this.value },
        bubbles: true,
        composed: true,
      }),
    );
  }

  render() {
    this.root.innerHTML = `
      <style>
        article {
          display: grid;
          gap: 12px;
          padding: 18px;
          border-radius: 18px;
          background: #ffffff;
          border: 1px solid #d4dceb;
        }

        .value {
          margin: 0;
          font-size: 2rem;
          font-weight: 800;
        }

        .actions {
          display: flex;
          gap: 10px;
        }

        button {
          min-height: 40px;
          padding: 0 14px;
          border: none;
          border-radius: 999px;
          background: #315efb;
          color: #ffffff;
          font: inherit;
          cursor: pointer;
        }
      </style>

      <article>
        <p style="margin: 0; color: #55627b;">count-change を発火するカウンター</p>
        <p class="value">${this.value}</p>
        <div class="actions">
          <button type="button" data-action="decrement">-1</button>
          <button type="button" data-action="increment">+1</button>
        </div>
      </article>
    `;
  }
}

customElements.define("counter-panel", CounterPanel);

const counterPanel = document.querySelector("#counter-panel");
const counterOutput = document.querySelector("#counter-output");

counterPanel.addEventListener("count-change", (event) => {
  counterOutput.textContent = `count-change を受信しました。detail.value = ${event.detail.value}`;
});

document.querySelector("#reset-counter").addEventListener("click", () => {
  counterPanel.reset();
  counterOutput.textContent = "外側から reset() を呼んで 0 に戻しました。";
});
