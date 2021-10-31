# Webpack + TypeScript + PostCSS のテンプレート

WebpackとTypeScriptとPostCSSを組み合わせた場合のテンプレートになります。

## 依存関係

package.jsonにある通りです。

```terminal
npm init -y

# Webpack関連
npm install --save-dev webpack webpack-cli webpack-merge

# 開発用サーバー
npm install --save-dev webpack-dev-server

# TypeScript関連
npm install --save-dev typescript ts-loader

# CSS関連
npm install --save-dev style-loader css-loader

# PostCSS関連
npm install --save-dev postcss-loader postcss
npm install --save-dev autoprefixer # 好きなの入れておいて
```

## ディレクトリ構成

```txt
develop-root/
  ├ src/
  │   ├ components/
  │   └ index.ts 
  ├ dist/
  │   ├ js/
  │   └ index.html
  ├ tsconfig.json
  ├ postcss.config.js
  ├ webpack.common.js
  ├ webpack.dev.js
  └ webpack.prod.js
```

## 使い方

```terminal
# 開発用ビルド
npm run build:dev

# 開発用サーバー立ち上げ
npm run serve

# 本番用ビルド
npm run build
```
