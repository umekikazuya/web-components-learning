class HelloGreeter extends HTMLElement {
  constructor() {
    super();
    this.renderCount = 0;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.renderCount += 1;
    const name = this.getAttribute("name") ?? "friend";

    this.innerHTML = `
      <article style="padding: 16px; border: 1px solid #d4dceb; border-radius: 16px; background: #ffffff;">
        <p style="margin: 0 0 8px; color: #315efb; font-weight: 700;">HelloGreeter</p>
        <h3 style="margin: 0 0 10px;">こんにちは、${name}さん</h3>
        <p style="margin: 0; color: #55627b;">render() 呼び出し回数: ${this.renderCount}</p>
      </article>
    `;
  }
}

customElements.define("hello-greeter", HelloGreeter);

const greeter = document.querySelector("#greeter");
const renderStatus = document.querySelector("#render-status");

document.querySelector("#toggle-name").addEventListener("click", () => {
  const nextName = greeter.getAttribute("name") === "Web Components" ? "Custom Elements" : "Web Components";
  greeter.setAttribute("name", nextName);
  renderStatus.textContent = "属性値は切り替わりましたが、render() は自動では走りません。";
});

document.querySelector("#rerender").addEventListener("click", () => {
  greeter.render();
  renderStatus.textContent = "render() を明示的に呼ぶと表示が更新されます。";
});
