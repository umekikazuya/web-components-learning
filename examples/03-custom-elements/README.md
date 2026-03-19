# 03 Custom Elements

Custom Elements track は、sandbox の入口です。定義 → lifecycle → attributes → 実践的な card の順に進みます。

## この track で掴むこと

- custom element はどう定義されるか
- DOM への接続 / 切断で何が起きるか
- 属性変更をどう受け取るか
- 小さな UI としてまとめると、どこまでが element の責務になるか

## step-by-step の流れ

1. `01-define-element/` - まずは「独自タグが動く」最小例だけを見る
2. `02-lifecycle/` - 次に接続 / 切断のタイミングを観察する
3. `03-attributes/` - その上で外から値を渡して再描画する
4. `04-practical-card/` - 最後に小さな UI component にまとめる

## 読むときのポイント

- step ごとに「新しく増えた責務」を 1 つだけ拾う
- lifecycle は API 名より、「いつ呼ばれるか」を意識する
- attributes 以降は「外から変えられる値」と「内部で持つ状態」を分けて考える
