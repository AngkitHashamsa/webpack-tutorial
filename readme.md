## entry

```js
module.exports = {

+  entry: "./src/index.js",

};
```

## output

```js
const path = require("path");
module.exports = {
  entry: "./src/index.js",
+   output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
};
```

## development

```js
const path = require("path");
module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
+ mode: 'development',
};

```

## devtool

### devtool in development set to none to prevent eval function to run

```js
const path = require("path");
module.exports = {
  entry: "./src/index.js",
+ devtool:"hidden",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
+ mode: 'development',
};

```

# Loaders

## css loader

#### css loader convert css to js

## StyleLoader

### enables to import styles

### important

#### css loader need to be transpile the css first but the entry point is from end thats y css loader is at end

start "css-loader" and then "style-loader"
["style-loader", "css-loader"] <---- entry from here

```js
module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
+  module: {
+    rules: [
+      {
+        test: /\.css$/i,
+        use: ["style-loader", "css-loader"],
+      },
+    ],
  },
};
```

### scss loader

npm install sass-loader sass webpack --save-dev

```js
const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
  },
};
```

### contenthash

It use to hash the main.js so that it does not remain a constant file as it can may cause unwanted cahce in browser

```js
module.exports = {
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist"),
  },
};
```

### clean

it deletes the previous hash file

```js
module.exports = {
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
};
```

### HtmlWebpackPlugin

The HtmlWebpackPlugin simplifies creation of HTML files to serve your webpack bundles. This is especially useful for webpack bundles that include a hash in the filename which changes every compilation. You can either let the plugin generate an HTML file for you, supply your own template using lodash templates, or use your own loader.

```js
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: "index.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "index_bundle.js",
  },
  plugins: [new HtmlWebpackPlugin({ template: "./src/template.html" })],
};
```

### Webpack merge

it is pakage install webpackmegre to merge the three diff webpack
https://www.npmjs.com/package/webpack-merge

npm i -D webpack-merge

## html loader

npm install --save-dev html-loader
