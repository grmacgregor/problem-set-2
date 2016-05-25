// Problem 1

var problem1 = "evian";

function firstReverse(str) {
	return str.split('').reverse().join('');
};

console.log(firstReverse(problem1));

// Problem 2

var hello = "Hello World"

function swapCase(str) {
	var newString = '';
	for (var i=0; i<=str.length; i++) {
		if(str.charAt(i) === str.charAt(i).toUpperCase()) {
			newString += str.charAt(i).toLowerCase();
		} else if(str.charAt(i) === str.charAt(i).toLowerCase()) {
			newString += str.charAt(i).toUpperCase();
		}
	}
	return newString;
};

console.log(swapCase(hello));
Array.prototype.unique = function(){return this.sort().filter( function(v,i,o){if(i>=0 && v!==o[i-1]) return v;});}

var example = "This was quite literally the worst problem ever!";
function letterCount(str) {
	var wordArr = str.split(' ')
	var indexArr = []
	var newArr  = []
	// [Today, is, the, greatest, day, ever]
	for (var i = 0; i < wordArr.length; i++) {
		var letterArr = wordArr[i].split('').sort();
		var dupArr =[]
		for (var x = 0; x < letterArr.length; x++) {
			if(letterArr[x]===letterArr[x+1]) {
				dupArr.push(letterArr[x]);
			}
		}
		dupArr = dupArr.unique()
		if(dupArr.length > newArr.length){
			newArr = dupArr
			indexArr = wordArr[i]
		}else if( dupArr.length === newArr.length){
			newArr.push(dupArr)
			indexArr= indexArr + ',' + wordArr[i]
		}

	}
	return indexArr
};

console.log(letterCount(example));
