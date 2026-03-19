# 06 Advanced Shadow DOM

Advanced Shadow DOM track では、最新寄りの Shadow DOM 関連 API を扱います。

## この track のゴール

- `<style>` 以外の styling 手段として `adoptedStyleSheets` を理解する
- shared stylesheet の利点と制約を確認する
- Declarative Shadow DOM が SSR / HTML-first な流れとどう接続するかを掴む

## step-by-step の流れ

1. `01-constructable-sheet/` - まず `CSSStyleSheet` を 1 component で使う
2. `02-shared-sheet/` - 次に 1 枚を複数 component で共有する
3. `03-updating-sheet/` - shared stylesheet を更新するとどう広がるかを見る
4. `04-declarative-shadow-dom/` - HTML 側で shadow root を宣言する
5. `05-upgrade-declarative-shadow/` - 最後に server-rendered markup と custom element upgrade をつなぐ

## 読むときのポイント

- `adoptedStyleSheets` は「style の書き方の違い」ではなく、共有モデルの違いとして読む
- Declarative Shadow DOM は support の有無だけでなく、HTML-first の設計として考える
- `05` では SSR と hydration ではなく、「HTML を先に出せること」に注目する

## Support note

この track は特に support note が重要です。

- `adoptedStyleSheets` は広く知られていますが、古い環境では fallback が必要です
- Declarative Shadow DOM はさらに新しめなので、対応ブラウザや配信形態を意識して読むと理解しやすいです
- この教材では「すぐ本番投入できるか」よりも、「どんな設計の選択肢が増えるか」を優先して扱っています
