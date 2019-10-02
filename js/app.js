console.log("Tamagotchi project");

class Tamagotchi {
	constructor(name) {
		this.legs = 2;
		this.arms = 2;
		this.name = name;
		this.hungry = 0;
		this.bored = 0;
		this.age = 0;
		// this.eyes = eyes;
	}
	
	// greet(tamagotchiName){
	// 	console.log('Hello! I\'m ' + tamagotchiName + '!');
	// }

	// putToSleep(closeeyes){
	// 	this.eyes = closeeyes;
	// 	console.log('Yawn...');
	// }

}



const game = {

	theTama: [], 

	time: 0, 

	makeTamagotchi(tamaName) {

		// instantiate the Tama class, pass in tamaName
		const tamagotchi = new Tamagotchi(tamaName);
		// console.log(tamagotchi);
		this.theTama = tamagotchi;
		this.startTimer();
		// so that your instance will ahve that name
		// console.log the instantiated object to check
	},

	startTimer() {
		const $timer = $('#timer');
		const $age = $('#age');
		const $hunger = $('#hunger');
		const $sleepiness = $('#sleepiness');
		const $boredom = $('#boredom');
		const tamagotchiTimer = setInterval( () => {
			this.time++
			// this.Tamagotchi.timer = 1;
			// this.Tamagotchi.age += .5;
			// this.Tamagotchi.hunger += 1;
			// this.Tamagotchi.sleepiness += 1;
			// this.Tamagotchi.boredom += 2;
			$timer.text(`timer: ${this.time}s`)
			console.log('Looped!');
		}, 1000);
		this.time = tamagotchiTimer;

	},
	// feedTamagatchi(){

	// },

	// flipTheSwitch(){

	// },
	// playWith(){

	// },
}




// Time causes it to change. Stays within the game
// Create the functions (giveFood, flipTheSwitch, playWith) 
	// setInterval(() { 
	// 	console.log("Hello"); 
	// }, 30000);
// and connnect



// };

// Listeners
$('form').on('submit', (e) => {
	e.preventDefault();
	console.log('Clicked! Woo!');
	console.log( $('#input-box').val() );
	const tamaName = $('#input-box').val();
	game.makeTamagotchi(tamaName)
	// call the make tamagatchi method in the game object
	// pass in tamaName as a parameter

});

// $('#start').on('click', (e) => {
// 	console.log('Let\'s begin.');
// 	e.preventDefault();
// });

// $().on(click.) => {}
// $().on(click.) => {}
// $().on(click.) => {}









