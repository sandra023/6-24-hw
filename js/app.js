// 1. Data types
// Refresher
// So far we have seen:

// Strings
// Numbers
// Booleans
// Arrays
// Objects
// When these datatypes are combined, we get a data structure, 
// for example, an array that contains objects that each contain booleans.

// Suppose you are tasked with creating some software, and it is up to you
//  to determine which datatypes and what data structure to use. For each 
//  of the following, write which data types you would use to represent 
//  the data, and then give a small example of the data structure:

// A light switch that can be either on or off.
	const lightSwitch = true; 
	//boolean

// A user's email address.
	email: "hello@email.com" 
	//string

// A spaceship with a hull, laser blasters, tractor beam, and warp drive.
	const spaceship = ["hull", "laser blasters", "tractor beam", "warp drive"] 
	//array

// A list of student names from our class.
	const students = ["Sara", "John", "James"] 
	//array


// A list of student names from our class, each with a location.
	const studentsInfo = [{
	 	name: "Sara",
		location: "Tokyo"	},
	{ 	name: "John",
		location: "Ireland"  },
	{ 	name: "James",
		location: "Dallas"	
	}]
	//object

// A list of student names from our class, each with a location and each 
//with a list of favorite tv shows.
		const studentsUpdatedInfo = [{
	 	name: "Sara",
		location: "Tokyo",
		favoriteTvShow: "Buffy"	},
	{ 	name: "John",
		location: "Ireland",
		favoriteTvShow: "Elementary"  },
	{ 	name: "James",
		location: "Dallas",
		favoriteTvShow: "Star Trek"	
	}]
	//object



// 	2. Take it Easy
// Make an array that holds all of the colors of the rainbow.
const rainbow = ["Red", "Yellow", "Green", "Blue", "Orange", "Indigo", "Violet"];

// Write code that will access "blue" from the rainbow array.
console.log(rainbow[3]);

// Make an object that is called your name and holds the information 
// about your favorite food, a hobby, the name of the town that you 
// live in currently, and your favorite datatype.
const sandra = {
	hobby: "Reading",
	favoriteFood: "Japanese",
	location: "Denver",
	favoriteDataType: "Objects"
}

// Write code that will access your hobby from the object that 
// you just created.

console.log(sandra.hobby);




