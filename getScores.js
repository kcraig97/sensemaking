
var getScores = function(wordsFlat){
	var scores = wordsFlat.reduce (function(a,b){  
		if (b in a){
			a[b] +=1;
		}
		else {
			a[b] =1;
		}
		 
		return a;
	}, {})
	// -----------------------------------
	//  YOUR CODE
	//  Count the word frequency
	//  Return object with word counts
	// -----------------------------------	

	return scores;

}


module.exports = getScores;