# Chapter 01: Custom Elements の基本

## ねらい

独自要素の登録から lifecycle、属性反映までの基本を段階的に確認します。

## キー API

- `customElements.define()`
- `connectedCallback()`
- `disconnectedCallback()`
- `observedAttributes`
- `attributeChangedCallback()`

## 見るファイル

- `examples/01-custom-elements/01-define-element/index.html`
- `examples/01-custom-elements/02-lifecycle/index.html`
- `examples/01-custom-elements/03-attributes/index.html`
- `examples/01-custom-elements/04-practical-card/index.html`

## この章で確認すること

- カスタム要素名にハイフンが必要なこと
- mount / unmount で lifecycle が呼ばれること
- 属性変更を契機に UI を再描画できること
- 小さな API を積み上げると実践的なコンポーネントになること