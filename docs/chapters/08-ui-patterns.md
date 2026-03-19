# Chapter 08: UI patterns with standard APIs

## ねらい

標準 API だけでも、dialog / popover / tabs / menu button のような UI pattern を十分組み立てられることを確認します。

## キー API

- `<dialog>`, `showModal()`, `close()`
- `popover`, `popovertarget`
- `role="tablist"`, `role="tab"`, `role="tabpanel"`
- `aria-haspopup="menu"`, `role="menu"`, `role="menuitem"`
- `CustomEvent`

## 見るファイル

- `examples/07-ui-patterns/01-dialog-basics/index.html`
- `examples/07-ui-patterns/02-dialog-component/index.html`
- `examples/07-ui-patterns/03-popover-basics/index.html`
- `examples/07-ui-patterns/04-popover-menu/index.html`
- `examples/07-ui-patterns/05-tabs/index.html`
- `examples/07-ui-patterns/06-menu-button/index.html`

## この章で確認すること

- native dialog と custom element wrapper の責務分担
- popover API の最小パターン
- tabs や menu button のような composite widget では aria role と keyboard interaction が重要になること
