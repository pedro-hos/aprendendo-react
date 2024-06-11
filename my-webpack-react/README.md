Example of creating a simple project by using only webpack, instead of CRA, Vite or Nextjs.

**Install the following dependencies**

```
npm init -y
npm install webpack
npm install webpack-dev-server webpack-cli -D
npm install @babel/core @babel/preset-env
npm install @babel/preset-react babel-loader
npm install css-loader style-loader -D
npm install html-webpack-plugin
npm install react react-dom
```

**Create the file `webpack.config.js` with the following content**

```
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    devServer: {
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /nodeModule/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    pugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public/index.html'),
            filename: "index.html"
        })
    ]
}
```

**Create the `./src/index.js` with the following content**

```

```

**Create the `./public/index.html` with the HTML 5 default content**
**Create the file `.babelrc` with the following content**

```
{
    "presets": [
        [
            "@babel/preset-env",
            {
                "module": false,
                "targets": {
                    "browsers": [
                        "last 2 Chrome versions",
                        "last 2 Firefox versions",
                        "last 2 Safari versions",
                        "last 2 iOS versions",
                        "last 2 Android versions",
                        "last 2 ChromeAndroid versions",
                        "ie 11"
                    ]
                }    
            }
        ],
        "@babel/preset-react"
    ]
}
```
**Edit the `package.json` and add the following under `scripts:`**

```
 "dev": "webpack server --open"
```


