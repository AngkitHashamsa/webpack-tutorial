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
