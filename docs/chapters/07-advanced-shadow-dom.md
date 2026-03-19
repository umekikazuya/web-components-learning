# Chapter 07: Advanced Shadow DOM

## ねらい

Shadow DOM の基礎から一歩進んで、constructable stylesheets と Declarative Shadow DOM を使った最新パターンを確認します。

## キー API

- `CSSStyleSheet`
- `replaceSync()`
- `shadowRoot.adoptedStyleSheets`
- `<template shadowrootmode="open">`
- 既存 shadow root の upgrade

## 見るファイル

- `examples/06-advanced-shadow-dom/01-constructable-sheet/index.html`
- `examples/06-advanced-shadow-dom/02-shared-sheet/index.html`
- `examples/06-advanced-shadow-dom/03-updating-sheet/index.html`
- `examples/06-advanced-shadow-dom/04-declarative-shadow-dom/index.html`
- `examples/06-advanced-shadow-dom/05-upgrade-declarative-shadow/index.html`

## この章で確認すること

- `<style>` 文字列ではなく stylesheet object を共有できること
- 1 枚の stylesheet 更新が複数 component に反映されること
- Declarative Shadow DOM が HTML ベースの初期レンダリングと相性がよいこと
- 最新 API ほど support note を明示する必要があること
