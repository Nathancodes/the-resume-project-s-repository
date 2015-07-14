


var formattedName = HTMLheaderName.replace("%data%", "Kamala");
var formattedRole = HTMLheaderRole.replace("%data%", "Front-end developer");


$("#header").append(formattedName);
$("#header").append(formattedRole);





var bio = {
 "name": "Kamala Supanyapinit",
 "role": "Front-end Web developer",
 "contact": {
		"Email": "Kamala_l@hotmail.com",
		"github": "Woshilink",
		"twitter": "@LC",
	},
"picture URL": "Picture",
"welcome message" : "Hi all, welcome to my page",
"skills":[
           "HTML", "CSS", "Javascript", "Photoshop", "Illustrator"]
	 
	 }

var education = {
	"schools" : [
	{
	"name": "ASC",
	"city": "Bangkok",
	"degree": "Bachelor of Arts",
	"Majors": "Graphic Design",
	"Dates": 2008,
	"url": "http//"
},
{
	"name": "University of Portsmouth",
	"city": "Portsmouth",
	"degree": "Master of Arts",
	"Majors": "Digital Marketing",
	"Dates": 2012,
	"url": "http//" 
}
],
"onlineCourses": [
{
	"title": "Javascript Crash Course",
	"school": "Udacity",
	"dates": 2014,
	"url": "http://www.udacity.com"
}
]
}

var work = {
	"jobs": [
	{
		"employer": "Planet Express",
		"title": "Delivery Boy",
		"dates": "January 3000 - Future",
		"locations": "London, UK",
		"description": "Who moved my cheese cheesy feet cauliflower.I maintain organisation system and helping on recruiting process",

	},
	{
		"employer": "Gmm Grammy",
		"title": "Graphic Desinger",
		"dates": "January 3000 - Future",
		"locations": "Bangkok, Thailand",
		"description": "Who moved my cheese cheesy feet cauliflower.I maintain organisation system and helping on recruiting process",

	},
  ]
}

var projects = {
	"projects": [
	{
	"title": "Sample Project 1",
	"dates": "2014",
	"description": " This is my first project ever on Udacity.",
	"images":[
	"images.HTML.jpg"
	]
},
{
	"title": "Sample Project 1",
	"dates": "2014",
	"description": " This is my first project ever on Udacity.",
	"images":[
	"images.HTML.jpg"
	]
}
]
}

//if else 

if (bio.skills.length > 0) {
 $("header").append(HTMLskillsStart);

 var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);

 $("#skills").append(formattedSkill);

 formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
  $("#skills").append(formattedSkill);
 formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
  $("#skills").append(formattedSkill);
 formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);

 $("#skills").append(formattedSkill);
}


function displayWork() {
//for-In Loops Solution (working experience)
for (job in work.jobs) {
	$("#workExperience").append(HTMLworkStart);

	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer); 
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;
	

	$(".work-entry:last").append(
		formattedEmployerTitle);

	var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
	$(".work-entry:last").append(formattedWorkDates);

	var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
	$(".work-entry:last").append(formattedWorkDescription);
}
}

displayWork();

//collecting Click Locations Solution
$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x,y);
});

//Return Statements
function locationizer (work_obj) {
	location.push(work.jobs.location);
	return locationizer;
}

// Internationalize Names Quiz
//function inName(name) {
//	name = name.trim().split(" ");
//	console.log(name);
//	name[1] = name[1].toUpperCase();
//	name[0] = name[0].slice(0.1).toUpperCase() + name[0].slice(1).toLowerCase();

//	return name[0] +" "+name[1];
//}

//$("#main").append(InternationalizeButton);

// Encapsulating Function 

projects.display = function(){
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart); 

		var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription =HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		if (projects.projects[project].images.length > 0) {
			for (images in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
}
}

