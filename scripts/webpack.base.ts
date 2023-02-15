import MiniCssExtractPlugin from "mini-css-extract-plugin";
import path from "path";
import ForkTsCheckerPlugin from "fork-ts-checker-webpack-plugin";
import { WebpackPluginInstance } from "webpack";
import { WebpackConfiguration } from "webpack-dev-server";

const config: (
  env: { dev: boolean },
  morePlugins?: WebpackPluginInstance[]
) => WebpackConfiguration = ({ dev }, morePlugins = []) => ({
  mode: dev ? "development" : "production",
  devtool: dev ? "inline-source-map" : undefined,
  module: {
    exprContextCritical: false,
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        exclude: /node_modules/,
        loader: "ts-loader",
        options: {
          transpileOnly: true,
        },
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        loader: "file-loader",
      },
    ],
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx"],
  },
  output: {
    path: path.join(__dirname, "../dist"),
    filename: "[name].js",
  },
  plugins: [new ForkTsCheckerPlugin(), ...morePlugins],
});

export default config;
