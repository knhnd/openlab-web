# OpenLab Web

- Site URL: [https://knhnd.github.io/openlab-web/](https://knhnd.github.io/openlab-web/)

## Project Structure

- `astro.config.mjs`: ページ全体の設定
- `src/content/docs/`: マークダウンでページを作成

## Server

### Local Server

- `npm run dev`

### Deploy

- [公式ドキュメント](https://docs.astro.build/ja/guides/deploy/github/)を参考に GitHub Pages にデプロイ

## Trouble Shooting

### 開発と本番環境でPATHが変わってしまう

#### ローカルサーバ（`npm run dev`）と本番環境（GitHub Pages）で URL が変わるためパスが合わなくなりリンクや画像が機能しない

- `basePath` を設定して開発と本番環境で自動でパスが合うように設定する
    - `src/utils` というフォルダを作成
    - `basePath.jd` ファイルを作成し以下を記述
    ```js
      export const basePath = import.meta.env.BASE_URL;
    ```
    - `astro.config.mjs` の site と base をそれぞれ以下のように修正
    ```js
      site: 'https://knhnd.github.io/openlab-web/',
      base: '/openlab-web/',  // GitHub Pages 用のベースパス
    ```
- 各ドキュメントファイル (`mdx`) では始めに `import { basePath } from '../../utils/basePath';` のように書く（import path はそれぞれの位置で変わるので注意）
- リンクは `<a href={`${basePath}courses/`}>Courses</a>` のようにアンカータグを使う

## Links

- [Astro](https://astro.build/)
