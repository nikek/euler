Euler.problems.push({
	num: 5,
	name: "Smallest multiple",
	solution: function() {
		var numbers = _.range(1,20).reverse();
		var itadd = 20*19*17*13*11*9*7;
		var it = itadd;
		var magic = false;

		var divisible = function(it){
			return function(num){
				return it % num === 0;
			};
		};

		while(magic === false){
			if( _(numbers).all(divisible(it)) ) magic = it;
			else it+=itadd;
		}

		return magic;
	}
});