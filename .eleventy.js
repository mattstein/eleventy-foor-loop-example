const EleventyWebcPlugin = require("@11ty/eleventy-plugin-webc");

module.exports = function (config) {
  config.addPlugin(EleventyWebcPlugin);

  return {
    dir: {
      input: "src",
    },
    dataTemplateEngine: "webc",
    htmlTemplateEngine: "webc",
    markdownTemplateEngine: "webc",
    templateFormats: ["webc"],
  };
};
