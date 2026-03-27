const template = document.querySelector("#profile-panel-template");

class ProfilePanel extends HTMLElement {
  constructor() {
    super();
    this.root = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.root.replaceChildren(template.content.cloneNode(true));
  }
}

customElements.define("profile-panel", ProfilePanel);
