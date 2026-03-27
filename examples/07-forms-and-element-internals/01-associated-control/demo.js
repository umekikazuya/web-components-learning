const supportNote = document.querySelector("#support-note");
const formOutput = document.querySelector("#form-output");
const feedbackForm = document.querySelector("#feedback-form");

const supportsElementInternals =
  "ElementInternals" in window && "attachInternals" in HTMLElement.prototype;

if (!supportsElementInternals) {
  supportNote.textContent =
    "このブラウザでは ElementInternals をサポートしていないため、form-associated custom element の実例は利用できません。";
} else {
  class RatingInput extends HTMLElement {
    constructor() {
      super();
      this.root = this.attachShadow({ mode: "open" });
      this.internals = this.attachInternals();
      this.value = "3";
    }

    connectedCallback() {
      this.sync();
      this.root.addEventListener("click", (event) => {
        const button = event.target.closest("button[data-value]");
        if (!(button instanceof HTMLButtonElement)) {
          return;
        }

        this.value = button.dataset.value;
        this.sync();
      });
    }

    formResetCallback() {
      this.value = "3";
      this.sync();
    }

    sync() {
      this.internals.setFormValue(this.value);
      this.render();
    }

    render() {
      const label = this.getAttribute("label") ?? "Rating";
      const current = Number(this.value);

      this.root.innerHTML = `
        <style>
          fieldset {
            margin: 0;
            padding: 0;
            border: none;
            display: grid;
            gap: 10px;
          }

          .buttons {
            display: flex;
            gap: 8px;
          }

          button {
            width: 44px;
            min-height: 44px;
            border-radius: 999px;
            border: 1px solid #d4dceb;
            background: #ffffff;
            font: inherit;
            cursor: pointer;
          }

          button[aria-pressed="true"] {
            background: #315efb;
            color: #ffffff;
            border-color: #315efb;
          }
        </style>

        <fieldset>
          <legend>${label}</legend>
          <div class="buttons">
            ${[1, 2, 3, 4, 5]
              .map(
                (number) => `
                  <button
                    type="button"
                    data-value="${number}"
                    aria-pressed="${String(number === current)}"
                    aria-label="${number} / 5"
                  >
                    ${number}
                  </button>
                `,
              )
              .join("")}
          </div>
        </fieldset>
      `;
    }
  }

  RatingInput.formAssociated = true;

  customElements.define("rating-input", RatingInput);

  supportNote.textContent =
    "このブラウザは ElementInternals をサポートしています。rating-input の値は FormData に入ります。";
}

feedbackForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(feedbackForm);
  const entries = Array.from(formData.entries()).map(([key, value]) => `${key}: ${value}`);
  formOutput.textContent = entries.join("\n");
});

feedbackForm.addEventListener("reset", () => {
  requestAnimationFrame(() => {
    formOutput.textContent = "フォームをリセットしました。rating-input も初期値に戻ります。";
  });
});
