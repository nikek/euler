Euler.problems.push({
	num: 7,
	name: "10001st prime",
	solution: function() {
		var primes = [2,3,5,7,11,13];
		var itNum = 13;
		var b = (function() {
			var a = true;
			return function(){
				a = !a;
				return a;
			};
		}());

		var isPrime = function(num){
			if(_(primes).all(function(prime){ return num % prime !== 0; })) return true;
			return false;
		};

		while(primes.length<10001){
			itNum += b() ? 2 : 4;

			if(isPrime(itNum)) primes.push(itNum);
		}
		return primes[primes.length-1];
	}
});