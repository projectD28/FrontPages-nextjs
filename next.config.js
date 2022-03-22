const withPlugins = require('next-compose-plugins');
const withCss = require('@zeit/next-css');
const withReactSvg = require('next-react-svg');
const withImages = require('next-images');

const path = require('path');

module.exports = withPlugins([
  withCss({}),
  withImages({
    fileExtensions: ["jpg", "jpeg", "png", "gif"],
    esModule: true,
    webpack(config, options) {
      return config
    }
  }),
  withReactSvg({
    include: path.resolve(__dirname, "./public/images"),
    webpack(config, options) {
      return config;
    }
  })
]), {
  reactStrictMode: true,
}