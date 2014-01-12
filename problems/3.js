Euler.problems.push({
	num: 3,
	name: "Largest prime factor",

	solution: function(){
		var num = 600851475143;
		var factor = 5;

		while(num > (factor+=2)) {
			if (num % factor === 0) num /= factor;
		}
		return num;
	}
});