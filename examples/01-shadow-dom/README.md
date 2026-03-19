# 01 Shadow DOM

Shadow DOM track では、「使わない場合」と「使う場合」を比較したあと、template と slots へ進みます。

## この track で掴むこと

- Shadow DOM を使う理由
- template を使うと何が整理されるか
- slot で外側と内側をどうつなぐか

## step-by-step の流れ

1. `01-without-shadow/` - まずは global CSS が漏れる状態を観察する
2. `02-first-shadow/` - 次に Shadow DOM で閉じ込める
3. `03-template/` - その DOM 構造を `<template>` に分離する
4. `04-default-slot/` - 外から 1 か所差し込む
5. `05-named-slots/` - 差し込み口を増やし、API 設計を考える

## 読むときのポイント

- `01` と `02` は「何が変わったか」を比較しながら読む
- slot は便利さだけでなく、component API が複雑になる面も意識する
- named slot まで進んだら、「どこまでを外側に任せるか」を考える
