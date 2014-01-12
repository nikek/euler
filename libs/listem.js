


var problemList = {
	el: $('#answers'),
	addProblem: function(prob) {
		this.el.append("<li>" + prob.name + "<br><strong>" + prob.solution() + "</strong></li>");
	}
};

// List all problems
Euler.problems.forEach( problemList.addProblem, problemList );

