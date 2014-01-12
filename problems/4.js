Euler.problems.push({
	num: 4,
	name: "Largest palindrome product",

	solution: function(){
		var numbers = _.range(100, 1000);
		var largestPal = 0;

		var isPalindrome = function(num){ return ( typeof num === "number"  && num.toString() === num.toString().split('').reverse().join(''));};

		numbers.forEach(function(numA){
			numbers.forEach(function(numB){
				var prod = numA*numB;
				if(isPalindrome(prod) && prod > largestPal) largestPal = prod;
			});
		});

		return largestPal;
	}
});