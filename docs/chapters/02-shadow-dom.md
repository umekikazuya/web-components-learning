# Chapter 02: Shadow DOM とカプセル化

## ねらい

Shadow DOM を使う / 使わない差分を比較し、DOM とスタイルの隔離が何を守るのかを理解します。

## キー API

- `attachShadow({ mode: "open" })`
- Shadow Root 内の `<style>`
- `:host`
- slot による内容の差し込み

## 見るファイル

- `examples/01-shadow-dom/01-without-shadow/index.html`
- `examples/01-shadow-dom/02-first-shadow/index.html`
- `examples/01-shadow-dom/04-default-slot/index.html`
- `examples/01-shadow-dom/05-named-slots/index.html`

## この章で確認すること

- Shadow DOM を使わないとページ側 CSS がそのまま入り込むこと
- Shadow DOM を使うと内部スタイルを閉じ込められること
- slot によって外部コンテンツを差し込めること
