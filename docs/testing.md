# Testing approach

この教材では、重い test runner を先に増やすのではなく、まず次の 3 段階で確認する方針を取っています。

## 1. Syntax and structure

```sh
npm run check
```

- inline script の構文確認
- HTML-first な sandbox にある `<script>` ブロックを直接走査する
- `vite.config.mjs` の構文確認

## 2. Smoke tests

```sh
npm test
```

- 主要 track が存在すること
- 主要 API を扱う example が含まれていること
- compatibility / testing docs が存在すること

## 3. Full build

```sh
npm run build
```

- Vite の multi-page build が通ること

## 将来の拡張候補

- component behavior を見るブラウザテスト
- accessibility assertion を含む E2E テスト
- compatibility matrix を CI 上で確認するテスト
