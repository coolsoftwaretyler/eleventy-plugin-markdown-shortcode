const fs = require('fs');  
const MarkdownIt = require("markdown-it");
const md = new MarkdownIt();
const path = require('path');  

module.exports = function(file) {  
    let relativeFilePath = `.${file}`  
    if (path.extname(file) != '.md') {  
        throw new Error("eleventy-plugin-markdown-shortcode requires a filetype of md");  
    }  
    let data = fs.readFileSync(relativeFilePath, function(err, contents) {    
        if (err) {  
            throw new Error(err)  
        }  
        
        return contents  
    });  
    return md.render(data);  
}