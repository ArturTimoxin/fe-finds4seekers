const withImages = require("next-images");
const withSass = require("@zeit/next-sass");
const withCSS = require("@zeit/next-css");

module.exports = withCSS(
  withSass(
    withImages({
      target: "serverless",
      env: {}, // your env variables here from .env.example
    })
  )
);
