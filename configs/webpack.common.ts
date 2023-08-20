import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { Configuration, ProvidePlugin } from "webpack";

const commonConfig: Configuration = {
  entry: path.resolve(__dirname, "../src/index.tsx"),
  resolve: {
    extensions: [
      ".wasm",
      ".ts",
      ".tsx",
      ".jsx",
      ".mjs",
      ".cjs",
      ".js",
      ".json",
    ],
    alias: {
      "@Components": path.resolve(__dirname, "../src/components"),
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: "asset/resource",
        generator: {
          fileName: "images/[name][ext][query]",
        },
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: "asset/inline",
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, "../build"),
    filename: "bundle.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "..", "./public/index.html"),
    }),
    new ProvidePlugin({
      React: "react",
    }),
  ],
};

export default commonConfig;
