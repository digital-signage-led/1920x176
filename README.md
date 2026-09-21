# 1920x176

1920×176px デジタルサイネージ専用の本番リポジトリです。  
案件は番号（0001, 0002, …）で管理し、GitHub Pages で HTML を直接公開します。

このリポジトリ以外の解像度（512×128 など）は扱いません。

## 表示前提

- 幅 1920px / 高さ 176px 固定
- スクロールバー・余白・はみ出しなし
- サイネージ本体のブラウザで URL を直接開く

## フォルダ構成

```
1920x176/
├─ index.html                 # 公開確認用トップ（本番サイネージではない）
├─ README.md
├─ .nojekyll                  # GitHub Pages で Jekyll を無効化
├─ projects/
│   ├─ 0001/                  # 案件（index.html を直接表示）
│   │   ├─ index.html
│   │   ├─ project.json
│   │   └─ assets/            # その案件だけのロゴ・設定
│   └─ 0002/
├─ shared/
│   ├─ css/                   # 共通 CSS
│   ├─ js/                    # 共通 JavaScript
│   ├─ assets/                # 共通画像
│   └─ data/
│       ├─ projects.json      # 案件台帳（状態・次番号）
│       └─ site-config.template.js
```

## 共通ファイル

| 用途 | 場所 |
|---|---|
| 案件台帳 | `shared/data/projects.json` |
| 警報ヒーロー | `shared/js/warning-hero.js` / `shared/css/color-hero.css` / `shared/css/white-hero.css` |
| 気象庁警報種別 | `shared/js/jma-warning-kinds.js` |
| 1920×176 余白禁止 | `shared/css/stage.css` |
| 新規案件の位置設定ひな形 | `shared/data/site-config.template.js` |

案件フォルダへ CSS / JS をコピーして増やさないでください。  
`projects/0001/index.html` からは `../../shared/...` で参照します（GitHub Pages でもローカルでも同じ相対パス）。

## 案件番号ルール

- 4桁連番（`0001`, `0002`, `0003`, …）
- 欠番は埋めない
- 終了した番号は再利用しない（0007 が終わっても次は 0008 以降）
- 次に使う番号は `shared/data/projects.json` の `nextId`

## 新規案件の追加方法

1. `shared/data/projects.json` の `nextId` を確認する（例: `0003`）
2. `projects/0003/` を作り、`index.html` と `project.json` を置く
3. 案件固有のロゴ・地点設定だけ `projects/0003/assets/` に置く
4. 共通処理は `../../shared/css/` と `../../shared/js/` を参照する
5. `projects.json` に案件を追加し、`status` を `active` にする
6. `nextId` を次の未使用番号に進める（例: `0004`）

`project.json` の例:

```json
{
  "id": "0003",
  "name": "案件名",
  "status": "active",
  "resolution": "1920x176"
}
```

## 案件を終了するとき

物理削除しないでください。番号を残します。

1. `projects/<番号>/project.json` の `status` を `inactive` または `archived` にする
2. `shared/data/projects.json` の同じ案件も同じ状態にする
3. フォルダと番号はそのまま残す
4. 次の新規案件には新しい番号を使う

| status | 意味 |
|---|---|
| `active` | 運用中。サイネージ URL として使う |
| `inactive` | 一時停止。ファイルは残す |
| `archived` | 終了。参照用に残す |

## GitHub Pages

- ブランチ: `main`
- 公開フォルダ: `/`（リポジトリルート）
- Jekyll 無効（`.nojekyll`）

### 本番URLの規則

ベース:

`https://digital-signage-led.github.io/1920x176/`

| 画面 | URL |
|---|---|
| 確認用トップ | `https://digital-signage-led.github.io/1920x176/` |
| 案件 0001 | `https://digital-signage-led.github.io/1920x176/projects/0001/` |
| 案件 0002 | `https://digital-signage-led.github.io/1920x176/projects/0002/` |
| 以降 | `https://digital-signage-led.github.io/1920x176/projects/00xx/` |

サイネージ本体には案件URLを設定してください。ルート `index.html` は公開確認用です。
