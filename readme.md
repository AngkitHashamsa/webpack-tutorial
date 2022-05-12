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
