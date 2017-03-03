//Practice with Arrays
//STEP1
//var movies = ["Homeland", "24", "Bones", "Titanic", "The Holiday"];
//window.console.log(movies[1]);

//STEP2
//var movies = [];
//movies [0] = "Homeland";
//movies [1] = "24";
//movies [2] = "Bones";
//movies [3] = "Titanic";
//movies [4] = "The Holiday";
//window.console.log(movies[0]);

//STEP3
//var movies = ["Homeland", "24", "Bones", "Titanic", "The Holiday"];
////splice(position, numberOfItemsToRemove, Item);
//movies.splice(3, 0, "Home alone");
//window.console.log(movies.length);
////window.console.log(movies);

//STEP4
//var movies = [];
//movies [0] = "Homeland";
//movies [1] = "24";
//movies [2] = "Bones";
//movies [3] = "Titanic";
//movies [4] = "The Holiday"; 
//delete movies[0];
//for (var i = 0; i < movies.length; i++){
//	window.console.log(i + " = " + movies[i]);
//}
////window.console.log(movies);

//STEP5
//var movies = [];
//movies [0] = "Homeland";
//movies [1] = "24";
//movies [2] = "Bones";
//movies [3] = "Titanic";
//movies [4] = "The Holiday"; 
//movies [5] = "Home alone";
//movies [6] = "War and Peace";
//for (var i = 0; i < movies.length; i++){
//	window.console.log(movies[i]);
//}

//STEP6
//var movies = [];
//movies [0] = "Homeland";
//movies [1] = "24";
//movies [2] = "Bones";
//movies [3] = "Titanic";
//movies [4] = "The Holiday"; 
//movies [5] = "Home alone";
//movies [6] = "War and Peace";
//for (var index in movies) {
//	window.console.log(movies[index]);
//}

//STEP7
//var movies = [];
//movies [0] = "Homeland";
//movies [1] = "24";
//movies [2] = "Bones";
//movies [3] = "Titanic";
//movies [4] = "The Holiday"; 
//movies [5] = "Home alone";
//movies [6] = "War and Peace";
//for (var index in movies) {
//	window.console.log(movies.sort()[index]);
//}

//STEP8
//var movies = [];
//movies [0] = "Homeland";
//movies [1] = "24";
//movies [2] = "Bones";
//movies [3] = "Titanic";
//movies [4] = "The Holiday"; 
//movies [5] = "Home alone";
//movies [6] = "War and Peace";
//window.console.log("Movies I like:" );
//for (var index in movies) {
//	window.console.log(movies[index]);
//}
//window.console.log("...");
//var leastFavMovies = [];
//leastFavMovies [0] = "Scandal";
//leastFavMovies [1] = "Scorpion";
//leastFavMovies [2] = "Grimm";
//window.console.log("Movies I regret watching:" );
//for (var index in leastFavMovies) {
//	window.console.log(leastFavMovies[index]);
//}

//STEP9
//var movies = [];
//movies [0] = "Homeland";
//movies [1] = "24";
//movies [2] = "Bones";
//movies [3] = "Titanic";
//movies [4] = "The Holiday"; 
//movies [5] = "Home alone";
//movies [6] = "War and Peace";
//
//var leastFavMovies = [];
//leastFavMovies [0] = "Scandal";
//leastFavMovies [1] = "Scorpion";
//leastFavMovies [2] = "Grimm";
//
//movies = movies.concat(leastFavMovies);
//for (var index in movies) {
//	window.console.log(movies.sort().reverse()[index]);
//}

//STEP10
//var movies = [];
//movies [0] = "Homeland";
//movies [1] = "24";
//movies [2] = "Bones";
//movies [3] = "Titanic";
//movies [4] = "The Holiday"; 
//movies [5] = "Home alone";
//movies [6] = "War and Peace";
//
//var leastFavMovies = [];
//leastFavMovies [0] = "Scandal";
//leastFavMovies [1] = "Scorpion";
//leastFavMovies [2] = "Grimm";
//
//movies = movies.concat(leastFavMovies);
//window.console.log(movies.sort().reverse().pop());

//STEP11
//var movies = [];
//movies [0] = "Homeland";
//movies [1] = "24";
//movies [2] = "Bones";
//movies [3] = "Titanic";
//movies [4] = "The Holiday"; 
//movies [5] = "Home alone";
//movies [6] = "War and Peace";
//
//var leastFavMovies = [];
//leastFavMovies [0] = "Scandal";
//leastFavMovies [1] = "Scorpion";
//leastFavMovies [2] = "Grimm";
//
//movies = movies.concat(leastFavMovies);
//window.console.log(movies.sort().reverse().shift());

//STEP12
//var movies = [];
//movies [0] = "Homeland";
//movies [1] = "24";
//movies [2] = "Bones";
//movies [3] = "Titanic";
//movies [4] = "The Holiday"; 
//movies [5] = "Home alone";
//movies [6] = "War and Peace";
//
//var leastFavMovies = [];
//leastFavMovies [0] = "Scandal";
//leastFavMovies [1] = "Scorpion";
//leastFavMovies [2] = "Grimm";
//
//movies = movies.concat(leastFavMovies);
//
//window.console.log(movies.indexOf("Scandal"));
//window.console.log(movies.indexOf("Scorpion"));
//window.console.log(movies.indexOf("Grimm"));
//movies.splice(7, 3, "Romen Holidays", "Star Wars", "Body of Proof");	
//window.console.log(movies);

//STEP13
//var employee1 = [];
//employee1["name"] = "Jhon Smith";
//employee1["title"] = "Med Doctor"
//employee1["department"] = "Cardiology";
//employee1["isCurrent"] = "true";
//
//var employee2 = [];
//employee2["name"] = "Isa White";
//employee2["title"] = "Opt Doctor"
//employee2["department"] = "Optometry";
//employee2["isCurrent"] = "true";
//
//var employee  = [];
//employee.push(employee1);
//employee.push(employee2);
////How to display associative array:
////for (var i = 0; i < employee.length; i++) {
////	window.console.log(employee[i].name + " " + employee[i].title + " " + employee[i].department + " " + employee[i].isCurrent)
////}
//window.console.log(employee[1].name);

//STEP14
//var employee1 = [];
//employee1["name"] = "Jhon Smith";
//employee1["title"] = "Med Doctor"
//employee1["department"] = "Cardiology";
//employee1["isCurrent"] = "true";
//
//var employee2 = [];
//employee2["name"] = "Isa White";
//employee2["title"] = "Opt Doctor"
//employee2["department"] = "Optometry";
//employee2["isCurrent"] = "true";
//
//var employee  = [];
//employee.push(employee1);
//employee.push(employee2);
//
//for (var i = 0; i < employee.length; i++) {
//	window.console.log(employee[i].name);
//}

//STEP15
//var employee1 = [];
//employee1["name"] = "Jhon Smith";
//employee1["title"] = "Med Doctor"
//employee1["department"] = "Cardiology";
//employee1["isCurrent"] = "true";
//
//var employee2 = [];
//employee2["name"] = "Isa White";
//employee2["title"] = "Opt Doctor"
//employee2["department"] = "Optometry";
//employee2["isCurrent"] = "true";
//
//var employee3 = [];
//employee3["name"] = "Paul Hass";
//employee3["title"] = "Med Doctor"
//employee3["department"] = "Surgery";
//employee3["isCurrent"] = "false";
//
//var employee  = [];
//employee.push(employee1);
//employee.push(employee2);
//employee.push(employee3);
//
//for (var i = 0; i < employee.length; i++) {
//	if (employee[i].isCurrent == "true") {
//		window.console.log(employee[i].name);
//	   } else {
//		   window.console.log("Others aren't current employees");
//	   }
//}

//STEP16
//var movies = ["Homeland", 1,"24", 3, "Bones", 5, "Titanic", 4, "The Holiday", 2];
//
//var movieName = movies.filter(function(item) {
//	return typeof item == "string";
//});
//window.console.log(movieName);

//Practice with Functions
//STEP1
//x = " ";
////Anonymous Function
//var displayMessage = function(x) {
//	window.console.log("I like " + x + " movies");
//}
//displayMessage("fun");

//STEP2
//Named Function
//function calculate(x,y) {
//	var a = x % y;
//	window.console.log(a);
//}
//calculate(5, 2);

//STEP3
//var employees = ["Max", "Nick", "Mark", "Paola", "Kim"];
//var showEmployee = function(name) {
//	for (i = 0; i < employees.length; i++) {
//		window.console.log(name[i].toUpperCase());
//	}
//}
//showEmployee(employees);

//The Rock, Paper, Scissors Game
//var userChoice = prompt("Please choose rock, paper or scissors");
//var choice = " ";
//if (userChoice === "rock" || userChoice === "scissors" || userChoice === "paper") {
//	choice = "true";
//} else {
//	choice = "false";
//}
////alert(choice);
//var compChoice = Math.random();
//if (compChoice <= 0.34) {
//	compChoice = "rock";
//} else if (compChoice <= 0.67) {
//	compChoice = "paper";
//} else {
//	compChoice = "scissors";
//}
//alert(compChoice);
//
//switch (choice) {
//	case "true":
//if (userChoice === "rock" && compChoice === "scissors") {
//	alert("The user chooses 'rock', comp chooses 'scissors', user wins");
//} else if (userChoice === "scissors" && compChoice === "paper")	{
//	alert("The user chooses 'scissors', comp chooses 'paper', user wins");
//} else if (userChoice === "paper" && compChoice === "rock"){
//	alert("The user chooses 'paper', comp chooses 'rock', user wins");
//} else if (userChoice === compChoice) {
//	alert("It is tie");
//} else {
//	alert("Computer wins");
//}
//		break;
//	case "false":	
//	alert("Game is over. Please choose only rock, paper or scissors");
//		break;
//	default: 
//		alert();
//}

//The Basic Calculator 
//var a;
//function calculator() {
//var firstNumber = prompt("Pick a first number");
//var secondNumber = prompt("Pick a second number");
//var operation = prompt("What to perform: add, subtract, multiply, or divide");
//firstNumber = parseInt(firstNumber, 10);
//secondNumber = parseInt(secondNumber, 10);
//
//function calculate(x,y,z) {
//	switch (operation) {
//		case "add":
//			a = firstNumber + secondNumber;
//			alert(a);
//			break;
//		case "subtract":
//			a = firstNumber - secondNumber;
//			alert(a);
//			break;
//		case "multiply":
//			a = firstNumber * secondNumber;
//			alert(a);
//			break;
//		case "divide":
//			a = firstNumber / secondNumber;
//			alert(a);
//			break;
//		default:
//			alert("You have to choose only add, subtract, multiply, or divide");
//			this.calculator();
//			}
//}
//calculate(firstNumber, secondNumber, operation);
//} 
//calculator();

//Death by JavaScript
//STEP1
//function abc(str) {
//	return str.split('').sort().join('');
//}
//window.console.log(abc("school"));

//STEP2
//function toCapital(str) {
//	return str.replace(/\b\w/g, function(txt) {return txt.charAt(0).toUpperCase();});
//}
//window.console.log(toCapital('the quick brown fox'));

//STEP3
//function numVowels(str) {
//	return str.match(/[aeiou]/g).length;
//}
//window.console.log(numVowels('The quick brown fox' ));

//STEP4
//function generateId() {	
//	var text = "";
//    var choises = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
//
//    for( var i = 0; i < 8; i++ ) {
//        text += choises.charAt(Math.floor(Math.random() * choises.length));
//
//    return text;
//}
//}
//window.console.log(generateId());

//STEP5
//function countryNames(str) {
//	var countries = ["Germany", "United States of America", "Australia"];
//	var maxLength = 0;
//	var longestName = "";
//	
//	for (var i = 0; i < countries.length; i++) {
//		if (countries[i].length > maxLength) {
//			maxLength = countries[i].length;
//			longestName = countries[i];
//		}
//	}
//	return longestName;	
//}
//window.console.log(countryNames());