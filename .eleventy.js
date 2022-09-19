// @ts-check
/**
 * @type {import('@11ty/eleventy')}
 */
const pluginRss = require('@11ty/eleventy-plugin-rss');
const pluginNavigation = require("@11ty/eleventy-navigation");
const pluginPWA = require('11ty-plugin-pwa');
const markdownIt = require('markdown-it');
const markdownItAnchor = require('markdown-it-anchor');
const fs = require("fs");
const path = require("path");

//const ampPlugin = require('@ampproject/eleventy-plugin-amp');
const filters = require('./eleventy/filters.js');
const transforms = require('./eleventy/transforms.js');

const workboxOptions = {
  cacheId: 'emergency-site',
  swDest: './dist/sw.js',
  globPatterns: ['**/*.html', 'static/scripts/offline.js'],
  globIgnores: ['admin/**/*', 'email/**/*', '404/**/*'],
  importScripts: ['/static/scripts/worker.js'],
  skipWaiting: false,
};

require('dotenv').config();


//module.exports = function (eleventyConfig) {


module.exports = function (eleventyConfig) {
  eleventyConfig.addFilter("encodeURIComponent", function (str) {
    return encodeURIComponent(str);
  });


  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat(
      "dd LLL yyyy"
    );
  });

  // https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
  eleventyConfig.addFilter("htmlDateString", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("yyyy-LL-dd");
  });

  // Plugins
  eleventyConfig.addPlugin(pluginRss)
  eleventyConfig.addPlugin(pluginPWA, workboxOptions);

  // Filters
  Object.keys(filters).forEach((filterName) => {
    eleventyConfig.addFilter(filterName, filters[filterName]);
  });
  eleventyConfig.addFilter('json', (obj) => JSON.stringify(obj, null, 2));

  // Transform
  Object.keys(transforms).forEach((transformName) => {
    eleventyConfig.addTransform(transformName, transforms[transformName]);
  });

  // Markdown
  const mdlib = markdownIt({
    html: true,
    breaks: true,
    linkify: true,
    typographer: true,
  }).use(markdownItAnchor, {
    permalink: true,
    permalinkClass: 'anchor',
    permalinkSymbol: '#',
  });
  eleventyConfig.setLibrary('md', mdlib);

  // Layouts
  eleventyConfig.addLayoutAlias('base', 'base.njk');
  eleventyConfig.addLayoutAlias('post', 'post.njk');

  // Pass-through files
  eleventyConfig.addPassthroughCopy('admin');
  eleventyConfig.addPassthroughCopy('src/email');
  eleventyConfig.addPassthroughCopy('src/static');
  eleventyConfig.addPassthroughCopy('src/robots.txt');

  // Deep-Merge
  eleventyConfig.setDataDeepMerge(true);

  // Base eleventyConfig
  eleventyComputed: {
    eleventyNavigation: {
      key: (/** @type {{ title: any; }} */ data) => data.title;
      parent: (/** @type {{ parent: any; }} */ data) => data.parent;
    }
  }
  return {
    dir: {
      input: 'src',
      output: 'dist',
      includes: 'includes',
      layouts: 'layouts',
      data: 'data',
    },
    templateFormats: ['njk', 'md'],
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    passthroughFileCopy: true,
  };
};
