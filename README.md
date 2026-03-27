# Web Components Learning

フロントエンド経験者向けに、Web Components をステップ・バイ・ステップで学べる教材です。

このリポジトリでは、仕様の説明だけでなく「最小の動くサンプル」を通して `Custom Elements`、`Shadow DOM`、`slot`、イベント設計、スタイリング、アクセシビリティ、フォーム連携まで順番に学べます。

## 使い方

静的ファイルだけで構成しているため、任意のローカルサーバーでそのまま表示できます。

```bash
python3 -m http.server 8000
```

起動後に `http://localhost:8000` を開いてください。

## 学習の進め方

1. `index.html` から全体像を確認する
2. `examples/index.html` で学習トラックを順番に進める
3. 各ステップページで「学習目標」「ライブデモ」「ソース」「確認ポイント」を見る
4. `demo.js` を読みながら手元で変更して挙動を確認する

## 収録トラック

1. Custom Elements の基本
2. Attributes / Properties による API 設計
3. Shadow DOM によるカプセル化
4. Template / Slot による構造の再利用
5. CustomEvent と外部 API
6. CSS カスタムプロパティとテーマ変更
7. アクセシブルなカスタム UI
8. `ElementInternals` を使ったフォーム連携

## ディレクトリ構成

```text
.
├── index.html
├── styles.css
├── examples/
│   ├── index.html
│   ├── shared/
│   │   └── example-page.css
│   ├── 01-custom-elements/
│   ├── 02-shadow-dom/
│   ├── 03-template-and-slot/
│   ├── 04-events-and-api/
│   ├── 05-styling/
│   ├── 06-accessibility/
│   └── 07-forms-and-element-internals/
└── LICENSE
```

## ねらい

- 標準 API だけでコンポーネントを組み立てる感覚を掴む
- フレームワーク固有の知識ではなく、ブラウザ標準の責務分離を理解する
- 実務で必要になりやすいアクセシビリティやフォーム連携まで一通り触れる
