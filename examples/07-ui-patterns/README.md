# 07 UI Patterns

UI patterns track では、標準 API で組み立てやすい UI pattern を扱います。

## この track のゴール

- native dialog と custom wrapper の責務分担を見る
- popover を軽量 overlay として捉える
- tabs や menu button のような composite widget で aria role と keyboard support をどう組み立てるかを確認する

## step-by-step の流れ

1. `01-dialog-basics/` - まず native dialog をそのまま使う
2. `02-dialog-component/` - 次に dialog を custom element で包む
3. `03-popover-basics/` - 軽量 overlay として popover を試す
4. `04-popover-menu/` - popover を command menu へ広げる
5. `05-tabs/` - composite widget として tabs を組み立てる
6. `06-menu-button/` - menu button で focus management をもう一度確認する

## 読むときのポイント

- `01` と `02` は native primitive と wrapper の責務分担を比べる
- `03` と `04` は popover の最小例から発展例への差分を見る
- `05` と `06` は role よりも、focus と keyboard interaction の設計を見る

## Support note

- `dialog` は比較的扱いやすい native primitive です
- `popover` は新しめなので、support note を見ながら progressive enhancement 前提で読むと理解しやすいです
- tabs と menu button は API というより pattern の教材なので、role・state・keyboard interaction の組み合わせに注目してください
