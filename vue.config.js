module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/vuep.run/" : "/",
  lintOnSave: false,
  productionSourceMap: false,
  outputDir: "docs"
};
