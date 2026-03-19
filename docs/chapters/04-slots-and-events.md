# Chapter 04: slots とイベント通知

## ねらい

親から内容を差し込み、子から操作結果をイベントで返す、Web Components らしい composition を確認します。

## キー API

- `<slot>`
- named slots
- `CustomEvent`
- `bubbles`, `composed`

## 見るファイル

- `examples/01-shadow-dom/04-default-slot/index.html`
- `examples/01-shadow-dom/05-named-slots/index.html`

## この章で確認すること

- default slot と named slots の役割の違い
- コンポーネント内部の操作を `CustomEvent` で外へ返せること
- composition を使うと内部 DOM を固定しつつ内容だけ差し替えられること
