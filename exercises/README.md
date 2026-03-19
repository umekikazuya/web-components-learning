# Exercises

topic-first sandbox に合わせて、小さな改造課題をトラックごとにまとめています。

## 進め方

exercise は全部やる前提ではなく、各 track を読み終えたあとに 1 つだけ選ぶ想定です。

1. まず track の step を順番に読む
2. その track で一番理解を確かめたい課題を 1 つだけ選ぶ
3. 変更前と変更後で、どの API / attribute / role の責務が増えたかを言葉にする

## 最初の 4 問

step-by-step で進めるなら、まずは次の 4 問がおすすめです。

1. `01-custom-elements/03-attributes` の `size` 属性を追加する
2. `02-shadow-dom/03-template` に badge や subtitle を足す
3. `03-accessibility/03-described-by` で help text / error text を切り替える
4. `04-styling/02-host-selector` で `size="compact"` を試す

この 4 問で「定義する」「閉じ込める」「意味をつなぐ」「見た目を公開する」の基本を復習できます。

## 01 Custom Elements

- `03-attributes` の `status-pill` に `size` 属性を追加する
- `04-practical-card` に `href` 属性を追加し、CTA の行き先を変えられるようにする
- `02-lifecycle` に `adoptedCallback` の説明を追記し、iframe や別 document の移動時を調べる

## 02 Shadow DOM

- `01-without-shadow` と `02-first-shadow` の両方で同じ global CSS を追加し、差を説明する
- `03-template` に badge や subtitle を追加し、template の保守性を体感する
- `05-named-slots` に extra な named slot を足し、API が複雑になりすぎない境界を考える

## 03 Accessibility

- `01-native-button` を `div tabindex="0"` ベースでも作ってみて、native button と何が違うか整理する
- `02-aria-pressed` に `disabled` 属性を追加し、見た目と `disabled` / `aria-disabled` の扱いを考える
- `03-described-by` で help text と error text を出し分け、`aria-describedby` の値を切り替える
- `04-disclosure` にキーボードショートカットを加える前に、それが本当に必要かを検討する
- `05-switch` を `ElementInternals` に発展させるなら、どこを internal state に寄せるか考える

## 04 Styling

- `01-css-custom-properties` に spacing 用の custom property を追加する
- `02-host-selector` で `size="compact"` を受け取り、`:host([size="compact"])` を試す
- `04-part` で `::part()` を使った hover / focus style を追加する

## 05 Forms and ElementInternals

- `01-associated-control` の値を hidden state ではなく複数値として submit する方法を調べる
- `03-validation` に pattern や maxlength のような条件を追加する
- `04-disabled-callback` で readOnly 相当の扱いをどう設計するか考える
- `05-rating-input` を `ElementInternals` の `states` や追加の validity 条件に広げられるか試す

## 06 Advanced Shadow DOM

- `03-updating-sheet` に typography token も追加し、shared stylesheet の更新範囲を広げる
- `04-declarative-shadow-dom` で support がないときの fallback UI を改善する
- `05-upgrade-declarative-shadow` で server-rendered content と client-side enhancement の境界を説明する

## 07 UI Patterns

- `01-dialog-basics` に `returnValue` を使ったパターンを追加する
- `03-popover-basics` で light-dismiss の扱いを観察する
- `05-tabs` を manual activation に切り替えるなら、どのキー操作と state 管理が必要か考える
- `06-menu-button` に disabled item を追加し、Arrow navigation でどうスキップするか考える

## 発展の入口

- `07-ui-patterns` の次に treeview か combobox のどちらを足すと学習価値が高いか考える
- `ElementInternals` を forms 以外の track とどう接続できるか考える