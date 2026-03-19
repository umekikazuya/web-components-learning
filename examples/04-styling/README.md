# 04 Styling

Styling track では、Shadow DOM 内コンポーネントをどうテーマ変更するかを API ごとに比べます。

## この track で掴むこと

- component の見た目をどこまで外に公開するか
- CSS custom properties / `:host` / `::part()` の使い分け
- styling API は設計の一部だという感覚

## step-by-step の流れ

1. `01-css-custom-properties/` - まずは値だけを外に公開する
2. `02-host-selector/` - 次に host attribute で variant を切り替える
3. `03-host-context/` - 周辺の context に応じた見た目を試す
4. `04-part/` - 内部要素そのものを `::part()` で公開する
5. `05-combined/` - 最後に複数手法の役割分担を見る

## 読むときのポイント

- 「どれが強いか」ではなく、「どこまで公開したいか」で選ぶ
- step が進むほど、外側に渡す責務が増えていく
- `05-combined` では API を増やしすぎない設計感覚も見る
