# Chapter 03: HTML Template による再利用

## ねらい

`<template>` を使って DOM 構造を再利用し、手書きの文字列結合より安全に UI を複製する考え方を掴みます。

## キー API

- `<template>`
- `template.content.cloneNode(true)`
- `DocumentFragment`

## 見るファイル

- `examples/01-shadow-dom/03-template/index.html`

## この章で確認すること

- template はそのままでは描画されないこと
- clone した要素にデータを差し込めること
- DOM 構造を 1 箇所で管理しやすくなること
