# 05 Forms and ElementInternals

Forms track では、form-associated custom elements を段階的に見ます。

## この track のゴール

- custom element を form submit に参加させる
- reset / disabled / validation を native form と接続する
- `ElementInternals` があると何が楽になり、ないと何が難しいかを掴む

## step-by-step の流れ

1. `01-associated-control/` - まず form submit に参加する最小例だけを見る
2. `02-reset-callback/` - 次に reset で state を戻す
3. `03-validation/` - その上で validity を form に伝える
4. `04-disabled-callback/` - native form の disabled 状態と連動する
5. `05-rating-input/` - 最後に複数の責務をまとめて実践例にする

## 読むときのポイント

- 各 step で native input のどの責務を再現しているかを見る
- `ElementInternals` は「便利な魔法」ではなく、form と接続する窓口として読む
- `05-rating-input` では、前の 4 step がどう統合されているかに注目する

## Support note

この track は `ElementInternals` と form-associated custom elements に依存するため、ブラウザ差が出やすいです。

- support がある環境では、form submit / reset / validity の連携をそのまま観察できます
- support がない環境では、demo の見た目は読めても form 参加は fallback になりやすいです
- 学習時は「API があるとどう設計できるか」に注目するのがおすすめです
