# Compatibility notes

この教材は「最新の標準 API を広く扱う」方針です。そのため、すべてのサンプルが同じブラウザ互換性を持つわけではありません。

## 比較的広く使いやすいもの

- Custom Elements
- Shadow DOM の基本
- `<template>`
- slots
- `<dialog>`
- 基本的な accessibility pattern

## 要 support note なもの

- `ElementInternals` / form-associated custom elements
- `adoptedStyleSheets`
- Declarative Shadow DOM
- `popover`

対応する track は次のとおりです。

- `05-forms-and-element-internals/`
- `06-advanced-shadow-dom/`
- `07-ui-patterns/` の popover examples

## 教材としての扱い方

- 「使える / 使えない」で切るのではなく、**どこなら使えるか** を説明する
- fallback を持てるか、build step が必要か、progressive enhancement できるかを示す
- 互換性が揺れる API は、README や各 track README で注意書きを添える
