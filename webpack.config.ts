import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import "webpack-dev-server";
import webpack from "webpack";
import path from "node:path";
import url from "node:url";

const isProduction = process.env.MODE == "PROD";
// const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

const stylesHandler = isProduction
  ? MiniCssExtractPlugin.loader
  : "style-loader";

const config: webpack.Configuration = {
  mode: undefined,
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    chunkFilename: "[name].js",
  },
  devServer: {
    open: true,
    host: "localhost",
    port: 3000,
    hot: true,
  },
  devtool: "source-map",
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html",
    }),

    // Add your plugins here
    // Learn more about plugins from https://webpack.js.org/configuration/plugins/
  ] as any[],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/i,
        loader: "ts-loader",
        exclude: "/node_modules/",
      },
      {
        test: /\.s[ac]ss$/i,
        use: [stylesHandler, "css-loader", "sass-loader"],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: "asset",
      },

      // Add your rules for custom modules here
      // Learn more about loaders from https://webpack.js.org/loaders/
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", "..."],
  },
};

export default () => {
  if (isProduction) {
    config.mode = "production";
    config.plugins?.push(new MiniCssExtractPlugin());
  } else {
    config.mode = "development";
  }
  return config;
};
