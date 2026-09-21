# 1920x176 案件番号

- `0001` 神奈川 エネオス（磯子区）と `0002` 大阪 ダイキン工業淀川製作所は locked。上書き・削除・番号再利用は禁止。
- 新規案件は `shared/data/projects.json` の `nextId`（現在 `0003`）でフォルダを新しく作る。
- 地点・ロゴだけを `projects/<番号>/assets/` に置く。共通 CSS/JS は `shared/` を参照する。
- 変更後は `node scripts/check-locks.js` を通す。
