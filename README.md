# Web Components Learning

ブラウザ標準の Web Components を、比較しながら学べる sandbox 形式の教材リポジトリです。

このリポジトリは `topic-first + step-by-step` で差分を追いやすい構成を採用しています。各トピックは小さな `index.html` だけで完結し、学習対象のコードがそのまま見えるようにしています。

## 対象読者

- HTML / CSS / JavaScript の基礎を理解している人
- フレームワーク非依存で Web Components を学びたい人
- 最新のブラウザ標準 API を広めに俯瞰したい人

## いま学べること

- Custom Elements の定義、lifecycle、属性反映
- Shadow DOM を使う / 使わない差分
- `<template>`, default slot, named slot の使いどころ
- CSS Custom Properties, `:host`, `:host-context`, `::part`, `adoptedStyleSheets`
- アクセシブルな名前、状態、関係性、操作パターンの基本
- form-associated custom elements と `ElementInternals`
- Declarative Shadow DOM, `dialog`, `popover`, tabs, menu button の基本パターン

## 使い方

1. 依存関係を入れます

```sh
npm install
```

1. Vite の開発サーバーを起動します

```sh
npm run dev
```

1. ブラウザで sandbox 一覧を開きます

```text
http://localhost:5173/examples/index.html
```

## 推奨する見方

学習の入口としては次の順番がおすすめです。

1. `examples/01-custom-elements/`
2. `examples/02-shadow-dom/`
3. `examples/03-accessibility/`
4. `examples/04-styling/`
5. `examples/05-forms-and-element-internals/`
6. `examples/06-advanced-shadow-dom/`
7. `examples/07-ui-patterns/`

## 学び方のおすすめ

この教材は、1 ファイルずつ順番に読むと理解しやすいように作っています。

1. まず track の `README.md` を読み、その track で何を比較するかを掴む
2. その track の `01-...` から順に `index.html` を開き、前の step との差分だけを見る
3. 「何が増えたか」「何のために増えたか」を確認してから次に進む
4. track を 1 つ見終わったら `exercises/README.md` から 1 つだけ課題を選んで小さく改造する
5. ある程度進んだら `docs/curriculum.md`, `docs/chapters/*.md`, `docs/compatibility.md`, `docs/testing.md` で考え方を整理する

## まずはこの 4 track

最初から全部を追わなくても大丈夫です。step-by-step で入るなら、まずは次の 4 track で十分です。

1. `examples/01-custom-elements/` で Web Components に入る最初の足場を作る
2. `examples/02-shadow-dom/` でカプセル化と composition を見る
3. `examples/03-accessibility/` で意味・状態・関係性を扱う
4. `examples/04-styling/` で component styling の選択肢を整理する

そのあとで `05-forms-and-element-internals`, `06-advanced-shadow-dom`, `07-ui-patterns` に進むと、発展トピックとして読みやすくなります。

## ディレクトリ構成

```text
docs/
  curriculum.md
  chapters/
  compatibility.md
  testing.md
examples/
  README.md
  index.html
  shared/
    example-page.css
  01-custom-elements/
  02-shadow-dom/
  03-accessibility/
  04-styling/
  05-forms-and-element-internals/
  06-advanced-shadow-dom/
  07-ui-patterns/
exercises/
  README.md
scripts/
  validate-examples.mjs
tests/
  sandbox-smoke.test.mjs
package.json
vite.config.mjs
```

## 追加した軽量ツール

Vite は「教材コードを隠すため」ではなく、次の体験をよくするためだけに使います。

- `npm run dev` ですぐ試せる
- ファイル保存時にリロードがかかる
- nested な `examples/**/index.html` をまとめて扱いやすい

source code 自体は素の HTML / CSS / JavaScript のままです。

## 検証コマンド

```sh
npm run check
npm test
npm run build
```

- `npm run check`: inline script と `vite.config.mjs` の構文確認
- `npm test`: sandbox 構成と主要 API カバレッジの smoke test
- `npm run build`: multi-page sandbox 全体の build 確認
