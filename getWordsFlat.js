
var getWordsFlat = function(words){
	var wordsFlat = words.reduce(function(a,b){
		return a.concat(b);

	},[])

	// -----------------------------------
	//  YOUR CODE
	//  Flatten the 2D words array using reduce
	//  Return flat words array
	// -----------------------------------	

	return wordsFlat;
}


module.exports = getWordsFlat;