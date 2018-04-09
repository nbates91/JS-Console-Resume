var myName = 'nicholas bates';
console.log(myName.toUpperCase());

console.log('Career: Covalence Student');

console.log(
	'Description: I am a goal-oriented and ambitious person with the desire to break into the field of programming as a Junior Developer.'
);

var interests = ['My family', 'My career', 'Learning to code'];

console.log('Interests');

function displayInterests() {
	for (var i = 0; i < interests.length; i++) {
		console.log('* ' + interests[i]);
	}
}
displayInterests();

var position = [
	{
		name: 'GNC',
		jobTitle: 'Manager',
		descriptions: 'I made schedules, implemented discipline when necessary, and drove sales for our store.',
	},

	{
		name: 'Vitamin Shoppe',
		jobTitle: 'Assistant Manager',
		descriptions:
			'I ensured store cleanliness standards were met, drove sales and special promos, and, in the absence of the Store Manager, I handled all management responsibilities.',
	},
];

console.log('Work History');

function displayPostion() {
	for (var i = 0; i < position.length; i++) {
		console.log('*Company: ' + position[i].name);
		console.log('*Title: ' + position[i].jobTitle);
		console.log('*Description: ' + position[i].descriptions);
	}
}

displayPostion();

var skills = [
	{
		name: 'Leadership',
		isCool: false,
	},
	{
		name: 'HTML/CSS Basics',
		isCool: true,
	},
	{
		name: 'Playing Bass',
		isCool: true,
	},
];

function displaySkills() {
	for (var i = 0; i < skills.length; i++) {
		if (skills[i].isCool === true) {
			console.log('*BAM: ' + skills[i].name);
		} else {
			console.log('* ' + skills[i].name);
		}
	}
}

displaySkills();
