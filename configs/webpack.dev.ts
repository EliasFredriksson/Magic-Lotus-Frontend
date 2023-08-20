import { Configuration, DefinePlugin } from "webpack";
import "webpack-dev-server";

export const config: Configuration = {
  mode: "development",
  devtool: "cheap-module-source-map",
  devServer: {
    hot: true,
    open: false,
  },
  plugins: [
    new DefinePlugin({
      "process.env.name": JSON.stringify("Vishwas"),
    }),
  ],
};
