# eleventy-plugin-markdown-shortcode

An [Eleventy](https://github.com/11ty/eleventy) plugin to render markdown as a shortcode within other templating engines. 

Thanks to Bryan Robinson for the [Eleventy Plugin tutorial](https://bryanlrobinson.com/blog/creating-11ty-plugin-embed-svg-contents/)

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
* JavaScript

In your templates, use the following syntax to grab the contents from any markdown file in your project path:

```
{% markdown '/path/to/markdown.md' %}
```

### Frontmatter

We handle (read: ignore) frontmatter with the [markdown-it-front-matter](https://www.npmjs.com/package/markdown-it-front-matter) plugin. You can include standard frontmatter like so: 

```
---
title: Frontmatter test
---

## This is from the frontmatter test file

It should *not* include anything that says `title` or the frontmatter dashes.
```

And the plugin will skip the frontmatter, as long as it's [valid](https://www.npmjs.com/package/markdown-it-front-matter#valid-front-matter)

## Configuration 

You can also pass in [markdown-it configuration](https://www.npmjs.com/package/markdown-it#init-with-presets-and-options) like so: 

```
eleventyConfig.addPlugin(markdownShortcode, {
    html: true,
    linkify: true,
});
```

## Example

[View a live demo](https://trusting-feynman-f2e3c6.netlify.app/)

[Read the live demo source code](https://github.com/ogdenstudios/eleventy-plugin-markdown-shortcode-example)

## Issues 

Having problems? [File an issue on GitHub](https://github.com/ogdenstudios/eleventy-plugin-markdown-shortcode)