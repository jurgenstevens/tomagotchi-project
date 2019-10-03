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
		
		const tamagotchiTimer = setInterval( () => {
			this.time++
			this.theTama.age += .2;
			this.theTama.boredom += .8;
			this.theTama.hunger += .6;
			this.theTama.sleepiness += .4;
			// let the user know values have changed
			this.printStats();
			// Evolution
			if (this.theTama.age >= 4){
				$('.crash-bored').attr("src", "crash-images/crash-spin.gif").css('top', '232px');
			};
			if (this.theTama.age >= 8){
				$('.crash-bored').attr("src", "crash-images/crash-bored.gif").css('top', '232px');
			};
			// Crash/Tamagotchi Dies
			if (this.theTama.sleepiness >= 10){
				this.endGame();
				clearInterval(tamagotchiTimer);
			};
			// if any of the values are >= 10
				// stop interval
				// this.endGame()
			
		}, 1000);
		this.time = tamagotchiTimer;
	},

	// this function prints stats -- shows the user the values for hunger, sleepiness, age, bordedom, time, 
	// call it to notify the user whenever the values change
	printStats() {
		const $timer = $('#timer');
		const $age = $('#age');
		const $hunger = $('#hunger');
		const $sleepiness = $('#sleepiness');
		const $boredom = $('#boredom');
		$timer.text(`TIMER: ${this.time}s`)
		$age.text(`AGE: ${Math.floor(this.theTama.age)}`)
		$hunger.text(`HUNGER: ${this.theTama.hunger.toFixed(1)}`)
		$sleepiness.text(`SLEEPINES: ${this.theTama.sleepiness.toFixed(1)}`)
		$boredom.text(`BOREDOM: ${this.theTama.boredom.toFixed(1)}`)
	},

	feedTamagatchi(){
		this.theTama.hunger -= .8;
		this.printStats()
	},

	playWithTamagotchi(){
		this.theTama.boredom -= 1;
		this.printStats()
	},

	goToSleepTamagotchi(){
		this.theTama.sleepiness -= .7;
		// 	
		// $('body').css()({
		// 		'background-color' : 'white',
		// 		'opacity': '.5'
		// })
	},
	wakeUpTamagotchi(){
		// this.printStats()
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

	endGame() {
		console.log("GAME OVER");
		$('.crash-bored').attr("src", "crash-images/crash-dies02.gif").css('top', '232px');
	}
}


// Listeners
$('form').on('submit', (e) => {
	e.preventDefault();
	$('form').hide()
	// console.log('Clicked! Woo!');
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









