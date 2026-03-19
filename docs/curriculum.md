# Curriculum

sandbox は topic-first に並んでいますが、理解しやすい順番で見るなら `03-custom-elements` → `01-shadow-dom` → `04-accessibility` → `02-styling` → `05-forms-and-element-internals` → `06-advanced-shadow-dom` → `07-ui-patterns` がおすすめです。

## トラック構成

| Track | Focus | Steps | Related guides |
| --- | --- | --- | --- |
| `03-custom-elements` | 定義、lifecycle、属性反映、実践カード | 4 steps | `docs/chapters/01-custom-elements.md` |
| `01-shadow-dom` | カプセル化、template、slots | 5 steps | `docs/chapters/02-shadow-dom.md`, `03-templates.md`, `04-slots-and-events.md` |
| `04-accessibility` | semantic elements, aria state, relationships, disclosure, switch | 5 steps | `docs/chapters/05-accessibility-patterns.md` |
| `02-styling` | CSS Custom Properties, `:host`, `:host-context`, `::part` | 5 steps | `docs/chapters/02-shadow-dom.md`, `05-accessibility-patterns.md` |
| `05-forms-and-element-internals` | form association, reset, validation, disabled, composite control | 5 steps | `docs/chapters/06-forms-and-internals.md` |
| `06-advanced-shadow-dom` | `adoptedStyleSheets`, shared sheets, Declarative Shadow DOM | 5 steps | `docs/chapters/07-advanced-shadow-dom.md` |
| `07-ui-patterns` | `dialog`, `popover`, tabs, menu button | 6 steps | `docs/chapters/08-ui-patterns.md` |

## 見る順番

1. `examples/03-custom-elements/` で独自要素の定義と属性反映を掴む
2. `examples/01-shadow-dom/` で Shadow DOM, template, slots を比較する
3. `examples/04-accessibility/` で意味・状態・関係性をどう表現するかを見る
4. `examples/02-styling/` でスタイリング API を整理する
5. `examples/05-forms-and-element-internals/` で form 参加と `ElementInternals` を学ぶ
6. `examples/06-advanced-shadow-dom/` で最新の Shadow DOM 関連 API を試す
7. `examples/07-ui-patterns/` で実践的な UI pattern を標準 API で組み立てる
8. `exercises/README.md` の課題で自分の手で少し改造する
9. `docs/compatibility.md` と `docs/testing.md` で実運用上の補足を確認する

## step-by-step の読み方

- 各 track は `01` から順に読む前提です
- 1 つの step では「新しい要素を 1 個だけ増やす」感覚で差分を見るのがおすすめです
- track README には「なぜその順番か」を書いてあるので、迷ったら先に README を読みます
- 発展 track では API の暗記より、「基礎 track のどの知識が土台になっているか」を意識すると繋がりやすいです

## 最短ルート

まずは次の順番だけでも、この教材の軸は十分に掴めます。

1. `03-custom-elements`
2. `01-shadow-dom`
3. `04-accessibility`
4. `02-styling`

ここまで終えたら、用途に応じて次へ進みます。

- form と native integration を知りたいなら `05-forms-and-element-internals`
- 新しめの Shadow DOM API を見たいなら `06-advanced-shadow-dom`
- 実践 UI pattern を組みたいなら `07-ui-patterns`

## 基礎 / 発展 / 実運用

- **基礎**: `03-custom-elements`, `01-shadow-dom`, `04-accessibility`, `02-styling`
- **発展**: `05-forms-and-element-internals`, `06-advanced-shadow-dom`, `07-ui-patterns`
- **実運用**: `docs/compatibility.md`, `docs/testing.md`
