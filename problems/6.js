Euler.problems.push({
	num: 6,
	name: "Sum square difference",
	solution: function() {

		var numbers = _.range(1, 101);

		var sumOfSqrs = _(numbers).chain().map(function(num){return num*num;}).reduce(ne.add).value();
		var sqrOfSums = _(numbers).reduce(ne.add)*_(numbers).reduce(ne.add);

		return sqrOfSums-sumOfSqrs;
	}
});