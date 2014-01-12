Euler.problems.push({
	num: 2,
	name: "Even Fibonacci numbers",

	solution: function(){
		var F = [1, 2];
		var i = 1;
		var next = 3;

		while(next < 4000000){
			F[i+=1] = next;
			next = F[i] + F[i-1];
		}

		return _(F).filter(ne.isEven).reduce(ne.add);
	}
});