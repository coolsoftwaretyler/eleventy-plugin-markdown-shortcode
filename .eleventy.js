const markdownShortCode = require("./src/markdownShortcode");  

module.exports = function(eleventyConfig) {  
    eleventyConfig.addShortcode("markdown", markdownShortCode);
};