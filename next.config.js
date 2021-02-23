const withTranspileModules = require("next-transpile-modules")(
  ["clean-stack"],
  { debug: true }
);

const customConfig = {
  target: "server",
  future: {
    webpack5: true,
  },
};

module.exports = withTranspileModules(customConfig);
