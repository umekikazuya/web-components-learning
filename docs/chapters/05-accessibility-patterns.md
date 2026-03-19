# Chapter 05: アクセシビリティを意識したコンポーネント設計

## ねらい

Web Components を「動く UI」で終わらせず、名前・状態・関係性・操作方法が伝わる UI として組み立てる基本を sandbox で確認します。

## キー API / 属性

- native `button`, `label`, `input`
- `aria-pressed`
- `aria-describedby`
- `aria-expanded`, `aria-controls`
- `role="switch"`, `aria-checked`
- `CustomEvent`

## 見るファイル

- `examples/04-accessibility/01-native-button/index.html`
- `examples/04-accessibility/02-aria-pressed/index.html`
- `examples/04-accessibility/03-described-by/index.html`
- `examples/04-accessibility/04-disclosure/index.html`
- `examples/04-accessibility/05-switch/index.html`

## この章で確認すること

- まず native 要素を使うと、キーボード操作や基本の意味付けを無料で得やすいこと
- 見た目の ON / OFF と `aria-*` 上の状態を一致させること
- help text や error text を `aria-describedby` で結びつけられること
- disclosure のようなパターンでは、状態と対象領域を同時に公開すること
- Shadow DOM 内の状態変更を `CustomEvent` で外へ返しつつ、意味も壊さないこと

## 次に広げやすいテーマ

- dialog, tabs, menu button などの複合 widget
- `ElementInternals` を使った form-associated custom elements
- アクセシビリティ観点を含む component tests
