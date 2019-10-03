console.log("Tamagotchi project");

class Tamagotchi {
	constructor(name) {
		this.legs = 2;
		this.arms = 2;
		this.name = name;
		this.hunger = null;
		this.boredom = null;
		this.age = null;
		this.sleepiness = null;
		// this.eyes = eyes;
	}
}



const game = {

	theTama: null, 
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
			this.theTama.age += 1;
			this.theTama.boredom += 1;
			this.theTama.hunger += 1;
			this.theTama.sleepiness += 1;
			$timer.text(`TIMER: ${Math.floor(this.time)}s`)
			$age.text(`AGE: ${Math.floor(this.theTama.age)}`)
			$hunger.text(`HUNGER: ${Math.floor(this.theTama.hunger)}`)
			$sleepiness.text(`SLEEPINES: ${Math.floor(this.theTama.sleepiness)}`)
			$boredom.text(`BOREDOM: ${Math.floor(this.theTama.boredom)}`)
			// console.log('Looped!');
		}, 1000);
		this.time = tamagotchiTimer;
	},
	
	feedTamagatchi(){
		this.theTama.hunger -= .5;
	},

	playWithTamagotchi(){
		this.theTama.boredom -= .8;
	},

	goToSleepTamagotchi(){
		this.theTama.sleepiness -= .4;
		// 	
		// $('body').css()({
		// 		'background-color' : 'white',
		// 		'opacity': '.5'
		// })
	},
	wakeUpTamagotchi(){
		$('body').css({
			'background-color': 'white',
			'opacity': ''
		})
	},
	// evolveTamagotchi(){
	// 	if(){ //if tamagotchi hits a certain age (14) it evolves to
	// 		// a different one
	// 	} if else{ // if it hits a higher age (25) it evolves to an
	// 		// even bigger one
	// 	}
	// },
}


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

$('#feedTamagotchi').on('click', () => {
	console.log('Feed Tamagotchi is working!');
	game.feedTamagatchi();
})

$('#playWithTamagotchi').on('click', () => {
	console.log('Play with Tamagotchi');
	game.playWithTamagotchi();
})
$('#goToSleep').on('click', () => {
	console.log('Put him to sleep!');
	game.goToSleepTamagotchi();
})
$('#wakeUp').on('click', () => {
	console.log('Wake his a** up!');	
	game.wakeUpTamagotchi();
})









