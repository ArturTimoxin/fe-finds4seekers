// const withImages = require("next-images");
// const withSass = require("@zeit/next-sass");
// const withCSS = require("@zeit/next-css");

const withTM = require("next-transpile-modules")([
  "react-leaflet", // specifying just the "react-leaflet" won't work
  "@react-leaflet/core",
]);

module.exports = withTM({
  target: "serverless",
  env: {
    API_URL: "http://127.0.0.1:3001/",
    PORT: 80,
    ADMIN_EMAIL: "thefinds4seekers@gmail.com",
  },
  images: {
    domains: ["localhost"],
    disableStaticImages: false,
  },
  experimental: {
    esmExternals: "loose",
  },
});
