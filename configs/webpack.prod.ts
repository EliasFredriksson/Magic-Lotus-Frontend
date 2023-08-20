import { DefinePlugin, Configuration } from "webpack";

export const config: Configuration = {
  mode: "production",
  devtool: "source-map",
  plugins: [
    new DefinePlugin({
      "process.env.name": JSON.stringify("Codevolution"),
    }),
  ],
};
