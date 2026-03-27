class StatusBadge extends HTMLElement {
  static get observedAttributes() {
    return ["label", "tone"];
  }

  get label() {
    return this.getAttribute("label") ?? "";
  }

  set label(value) {
    this.setAttribute("label", value);
  }

  get tone() {
    return this.getAttribute("tone") ?? "idle";
  }

  set tone(value) {
    this.setAttribute("tone", value);
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback() {
    this.render();
  }

  render() {
    const palette = {
      ready: { bg: "#dcfce7", fg: "#166534" },
      warn: { bg: "#fef3c7", fg: "#92400e" },
      idle: { bg: "#e5e7eb", fg: "#374151" },
    };

    const colors = palette[this.tone] ?? palette.idle;

    this.innerHTML = `
      <span style="display: inline-flex; align-items: center; gap: 8px; min-height: 40px; padding: 0 14px; border-radius: 999px; background: ${colors.bg}; color: ${colors.fg}; font-weight: 700;">
        <span style="width: 10px; height: 10px; border-radius: 50%; background: currentColor;"></span>
        ${this.label}
      </span>
    `;
  }
}

customElements.define("status-badge", StatusBadge);

const badge = document.querySelector("#badge");
const labelInput = document.querySelector("#label-input");
const toneSelect = document.querySelector("#tone-select");

labelInput.addEventListener("input", () => {
  badge.setAttribute("label", labelInput.value);
});

toneSelect.addEventListener("change", () => {
  badge.setAttribute("tone", toneSelect.value);
});

document.querySelector("#apply-property").addEventListener("click", () => {
  badge.label = labelInput.value || "Build";
  badge.tone = toneSelect.value;
});
