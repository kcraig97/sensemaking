const cheerio = require('cheerio')
var titles =[]
var getTitles = function(mitcourses){
const $ = cheerio.load(mitcourses)
$('h3').each(function(i,element){
	titles.push($(element).text())
})

	return titles;
}

module.exports = getTitles;