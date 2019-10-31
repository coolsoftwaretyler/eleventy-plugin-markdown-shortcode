const MarkdownIt = require("markdown-it");
const fs = require('fs');  
const path = require('path');  

module.exports = {
    configFunction: function(eleventyConfig, options = {}) {
        const md = new MarkdownIt(options);
        eleventyConfig.addShortcode("markdown", function(file) {
            let relativeFilePath = `.${file}`  
            if (path.extname(file) != '.md') {  
                throw new Error("eleventy-plugin-markdown-shortcode requires a filetype of md");  
            }  
            let data = fs.readFileSync(relativeFilePath, function(err, contents) {    
                if (err) {  
                    throw new Error(err)  
                }  
                return contents; 
            });  
            return md.render(data.toString()); 
        });
    }
}
