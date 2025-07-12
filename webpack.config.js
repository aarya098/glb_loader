const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    clean: true, // Ensures the dist directory is cleaned before each build
  },
  module: {
    rules: [
      {
        test: /\.(gltf|glb|obj)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "assets/models", // Ensures models are output to dist/assets/models
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".json", ".gltf", ".glb", ".obj"],
  },
  mode: "development", // Use 'production' for production builds
};
