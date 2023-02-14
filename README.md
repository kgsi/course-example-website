# coloso-example-website

## Use Framework

- [Astro](https://astro.build/)

## 🚀 Project Structure

プロジェクトの中には、以下のようなフォルダとファイルがあります。

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Astro は `src/pages/` ディレクトリにある `.astro` または `.md` ファイルを探します。各ページは、そのファイル名に基づいてルートとして公開されます。
`src/components/` には特別なものはありませんが、Astro/React/Vue/Svelte/Preactのコンポーネントはここに置くのが好ましいでしょう。
画像のような静的なアセットがあれば、`public/` ディレクトリに置くことができます。

## 🧞 Commands

すべてのコマンドは、プロジェクトのルートで、ターミナルから実行されます。

| Command                | Action                                                      |
| :--------------------- | :---------------------------------------------------------- |
| `npm install`          | 依存関係のインストール                                      |
| `npm run dev`          | ローカルの開発サーバを `localhost:3000` で起動する。        |
| `npm run build`        | 本番用サイトを `./dist/` に構築する。                       |
| `npm run preview`      | デプロイする前に、ローカルでビルドをプレビューします。      |
| `npm run astro ...`    | `astro add`、`astro preview`などの CLI コマンドを実行する。 |
| `npm run astro --help` | Astro CLI の使用に関するヘルプを見る                        |
