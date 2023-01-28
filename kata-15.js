const organizeInstructors = function (instructors) {
	//initialize empty object to store instructors organized by course
	let organizeByCourse = {};

    //loop through list of instructors
	for (let i = 0; i < instructors.length; i++) {
		//check if organizeByCourse contain a property of the instructor course
		//if it doesn't, it creates a new property with that name and set it's value to array of instructor's name
		if (!organizeByCourse.hasOwnProperty(instructors[i].course)) {
			organizeByCourse[instructors[i].course] = [instructors[i].name];
		} else {
		//if course exists in object, we push the instructor name to the array of the property
			organizeByCourse[instructors[i].course].push(instructors[i].name);
		}
	}
	return organizeByCourse;
};

console.log(
	organizeInstructors([
		{ name: "Samuel", course: "iOS" },
		{ name: "Victoria", course: "Web" },
		{ name: "Karim", course: "Web" },
		{ name: "Donald", course: "Web" },
	])
);
// Output
//   {
//     iOS: ["Samuel"],
//     Web: ["Victoria", "Karim", "Donald"]
//   }

//   console.log(organizeInstructors([
//     {name: "Brendan", course: "Blockchain"},
//     {name: "David", course: "Web"},
//     {name: "Martha", course: "iOS"},
//     {name: "Carlos", course: "Web"}
//   ]));

//   {
//     Blockchain: ["Brendan"],
//     Web: ["David", "Carlos"],
//     iOS: ["Martha"]
//   }
