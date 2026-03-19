# Chapter 06: Forms and ElementInternals

## ねらい

Web Components を form の一員として参加させる方法と、`ElementInternals` を使って value / validation / disabled state を扱う基本を段階的に確認します。

## キー API

- `static formAssociated = true`
- `attachInternals()`
- `setFormValue()`
- `setValidity()`
- `formResetCallback()`
- `formDisabledCallback()`

## 見るファイル

- `examples/05-forms-and-element-internals/01-associated-control/index.html`
- `examples/05-forms-and-element-internals/02-reset-callback/index.html`
- `examples/05-forms-and-element-internals/03-validation/index.html`
- `examples/05-forms-and-element-internals/04-disabled-callback/index.html`
- `examples/05-forms-and-element-internals/05-rating-input/index.html`

## この章で確認すること

- custom element が form submit に参加できること
- reset 時に内部 state を戻せること
- validity と error message を control 側で管理できること
- fieldset disabled と連動できること
- 小さな API を組み合わせると、実用的な form control が作れること
