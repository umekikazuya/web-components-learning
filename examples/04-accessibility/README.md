# 04 Accessibility

Accessibility track では、「まず native 要素を使う」から始めて、`aria-*` による状態・関係性・操作パターンへ進みます。

## この track で掴むこと

- まず native 要素を選ぶべき理由
- state / relationship / pattern を ARIA でどう補うか
- 見た目より先に semantics を設計する感覚

## step-by-step の流れ

1. `01-native-button/` - まず native button を使う意味を見る
2. `02-aria-pressed/` - 次に toggle state を明示する
3. `03-described-by/` - help text / error text との関係をつなぐ
4. `04-disclosure/` - 開閉 UI に必要な state と relation を整理する
5. `05-switch/` - native ではない pattern を role と state で組み立てる

## 読むときのポイント

- ARIA は native の代替ではなく、足りない意味を補うものとして読む
- 各 step で「誰に何を伝える属性か」を意識する
- disclosure と switch では keyboard support も一緒に確認する
