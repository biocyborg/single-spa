const { StatsWriterPlugin } = require("webpack-stats-plugin");

module.exports = {
  webpack: function (config, env) {
    require("react-app-rewire-postcss")(config, {
      plugins: (loader) => {
        return [
          require("postcss-flexbugs-fixes"),
          require("postcss-preset-env")({
            autoprefixer: {
              flexbox: "no-2009",
            },
          }),
          require("postcss-selector-namespace")({
            namespace(css) {
              // 前缀，如果有全局样式不需要添加的，也可以在这里过滤
              return ".react";
            },
          }),
        ];
      },
    });

    config.output.libraryTarget = "umd";

    config.externals = ["react", "react-dom", "react-router-dom"];

    config.plugins.push(
      new StatsWriterPlugin({
        fields: ["entrypoints", "publicPath"],
        filename: "manifest.json",
      })
    );

    return config;
  },

  devServer: function (configFunction) {
    return function (proxy, allowedHost) {
      const config = configFunction(proxy, allowedHost);

      console.log(config);

      return config;
    };
  },
};
