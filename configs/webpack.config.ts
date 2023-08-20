import { merge } from "webpack-merge";
import commonConfig from "./webpack.common";
import { Configuration } from "webpack";
import "webpack-dev-server";

interface ImportedWebpackConfig {
  config: Configuration;
}

export default async (
  envVars: Record<string, string>
): Promise<Configuration> => {
  const { env } = envVars;
  const { config } = (await import(
    `./webpack.${env}.ts`
  )) as ImportedWebpackConfig;
  return merge(commonConfig, config);
};
