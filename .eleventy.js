const markdownShortCode = require("./src/markdownShortcode");  

module.exports = function(eleventyConfig) {  
    eleventyConfig.addShortcode("markdown", function(file) {
        markdownShortCode(this.dir.includes, file);
    });
};