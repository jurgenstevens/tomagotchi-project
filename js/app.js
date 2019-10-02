console.log("Tamagotchi project");

class Tamagotchi {
	constructor(name, age, hungry, bored){
		this.legs = 2;
		this.arms = 2;
		this.name = name;
		this.eyes = eyes;
		this.hungry = null;
		this.bored = null;
	}
	
	greet(tamagotchiName){
		console.log('Hello! I\'m ' + tamagotchiName + '!');
	}

	putToSleep(closeeyes){
		this.eyes = closeeyes;
		console.log('Yawn...');
	}
};


const game = {
// Time causes it to change. Stays within the game
// Create the functions (giveFood, flipTheSwitch, playWith) 
	// setInterval(() { 
	// 	console.log("Hello"); 
	// }, 30000);

	// giveFood(){

	// },

	// flipTheSwitch(){

	// },
	// playWith(){

	// },
// and connnect



};

// Listeners
$('form').on('submit', (e) => {
	console.log('Clicked! Woo!');
	console.log( $('#input-box').val());
	e.preventDefault();
});
// $().on(click.) => {}
// $().on(click.) => {}
// $().on(click.) => {}