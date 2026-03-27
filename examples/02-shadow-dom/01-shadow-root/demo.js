class ShadowProfile extends HTMLElement {
  constructor() {
    super();
    this.root = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const name = this.getAttribute("name") ?? "Anonymous";
    const roleLabel = this.getAttribute("role-label") ?? "Component";

    this.root.innerHTML = `
      <style>
        :host {
          display: block;
        }

        article {
          padding: 16px;
          border-radius: 16px;
          background: linear-gradient(180deg, #132a63 0%, #27439d 100%);
          color: #ffffff;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        p {
          margin: 0;
          color: rgba(255, 255, 255, 0.84);
        }

        h3 {
          margin: 0 0 10px;
          font-size: 1.1rem;
        }
      </style>

      <article>
        <p>${roleLabel}</p>
        <h3>${name}</h3>
        <p>内部 DOM とスタイルは Shadow Root に閉じ込めています。</p>
      </article>
    `;
  }
}

customElements.define("shadow-profile", ShadowProfile);
