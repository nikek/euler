Euler.problems.push({
	num: 1,
	name: "Multiples fo 3 and 5",
	solution: function() {
		var numbers = _.range(1000);

		var addIfMultiple = function(sum, current){
			return (current % 3 === 0 || current % 5 === 0 ) ? sum+current : sum;
		};

		return _.reduce(numbers, addIfMultiple);
	}
});