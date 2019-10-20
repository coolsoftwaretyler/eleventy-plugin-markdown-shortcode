# eleventy-plugin-svg-contents

An [Eleventy](https://github.com/11ty/eleventy) plugin to render markdown as a shortcode within other templating engines. 

## Installation

Available on [npm](https://www.npmjs.com/package/eleventy-plugin-markdown-shortcode).

```
npm install eleventy-plugin-markdown-shortcode --save
```

Open up your Eleventy config file (probably `.eleventy.js`) and add the plugin:

```
const markdownShortcode = require("eleventy-plugin-markdown-shortcode");
module.exports = function(eleventyConfig) {
    eleventyConfig.addPlugin(markdownShortcode);
};
```


## Usage

This plugin is a [universal shortcode](https://www.11ty.io/docs/shortcodes/#universal-shortcodes), so it's available in the following templating engines:
   
* Liquid
* Nunjucks
* Handlebars
* JavaScript (New in 0.7.0)

In your (Nunjucks or Liquid) templates, use the following syntax to grab the contents from any SVG in your project path:

```
{% markdown '/path/to/markdown.md' %}
```