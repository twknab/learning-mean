/* JS File for Deck OF Cards Assignment */

/* BUG LIST:

	+ If 2 players have the same name, the deal/discard, etc will go to the last match

*/




/* GLOBAL VARIABLES */
// would have liked to find a better place for these vars but couldn't think of anything
var playerCount = 0;
var time = {
	getCurrentTime : function(){
		var now = new Date();
		var hour = now.toLocaleTimeString();
		var date = now.toLocaleDateString();
		return hour+' '+date;
	}
};

function update(message,deck){
	var currentTime = time.getCurrentTime();
	$('#status').prepend(currentTime+' '+message+'&#10;');
	if (typeof(deck) !== 'undefined'){
		deck.printCards( deck );
	};
}


/* CLASSES / OBJECT CREATION */
class Deck {
	constructor(){
		var __thisDeck = this;

		this.cards = this.__makeCards();
		this.discardPile = [];
		this.shuffle = function(){

			var shuffledCards = [];
			var randomIdxs = this.__randomArray(0, this.cards.length); // generates a random array of integers as long as the length of the cards array

			if (this.cards.length == 0){
				alert('Cannot shuffle an empty deck.');
			}

			for (var i = 0; i < randomIdxs.length; i++){ // using each random integer as an index value, cards from the original deck are pushed to a new array
				shuffledCards.push(__getCard( randomIdxs[i]));
			}

			function __getCard(index){ // this function gets the card of desired index from the original deck
				var card = __thisDeck.cards.slice(index);
				return card[0];
			}

			console.log('Deck is now shuffled!');
			this.cards = shuffledCards; // replaces the original deck (sorted) with the randomized deck
			$('#card').empty();
			update('Deck shuffled...',this);
			console.log(this);
			return __thisDeck.cards;
		};
	};


	printCards(deck){ // prints all cards in deck to page (not good for game play but for demo/visual)
		$('#card').empty();
		for (var i = 0; i < deck.cards.length; i++){
			$('#card').append('<li>'+deck.cards[i].hex+'</li>');
		}
	};


	__makeCards(){ // builds cards for each suite and adds to deck
		var cards = [];
		var hexVals = {
			/*
			note: the below was my best strategy for assigning each playing card their corresponding hex value.
			I've noted the range numbers to the right, as there are some numerical exclusions but this could
			be an area to refactor to perhaps generate these ranges, rather than write them in manually.
			numbers are in order of: ace, 2, 3...10, Jack, Queen, King 
			*/
			hexPrefix : '&#1271', /*  any way to generate the ranges below given excluding integers? */
			spades : ['37','38','39','40','41','42','43','44','45','46','47','49','50'], //37-50 (not 48)
			hearts : ['53','54','55','56','57','58','59','60','61','62','63','65','66'], //53-66 (not 64)
			diamonds : ['69','70','71','72','73','74','75','76','77','78','79','81','82'], //69-82 (not 80)
			clubs : ['85','86','86','88','89','90','91','92','93','94','95','97','98'], //85-98 (96)
			joker : ['99'],
			cardBack : ['36'],
		}

		function __makeSuite (suiteName, suiteArray){
			for (var i = 0; i < suiteArray.length; i++){
				var hexVal = hexVals.hexPrefix + suiteArray[i];
				if (i == 0){
					if (suiteArray == hexVals.joker){
						for (var j = 1; j <= 2; j++){
							cards.push( new Card('Joker', 'None', hexVal));
						};
						return cards;
					} else if (suiteArray == hexVals.cardBack) {
						cards.push(new Card('Card Back', 'None', hexVal));
						return cards;
					} else if (suiteArray !== hexVals.joker && suiteArray !== hexVals.cardBack) {
						cards.push(new Card('Ace', suiteName, hexVal));
					}; 
				} else if (i == 10){
					cards.push(new Card('Jack', suiteName, hexVal));
				} else if (i == 11){
					cards.push(new Card('Queen', suiteName, hexVal));
				} else if (i == 12){
					cards.push(new Card('King', suiteName, hexVal));
				} else {
					cards.push(new Card(i+1, suiteName, hexVal));
				};
			};
			return cards; // how can I return something here to chain the functions below?
		}; // end __makeSuite


		__makeSuite('Spade', hexVals.spades); // how can I chain these by modifying my function?
		__makeSuite('Heart', hexVals.hearts); // you need to move these functions out of __makeCards?
		__makeSuite('Diamond', hexVals.diamonds);
		__makeSuite('Club', hexVals.clubs);
		__makeSuite('Joker', hexVals.joker);
		return cards;
	};


	__randomArray (min, max){ // creates a random array of non-duplicate numbers in a range
		for (var i = min, numbArr = []; i < max; i++) {
		    numbArr[i] = i;
		};

		 // randomize the array
		numbArr.sort(function () {
			return Math.random() - 0.5;
		});

		return numbArr;
	};


	__randomNumber (min, max){ // create random number in a range
	    return Math.floor(Math.random() * (max - min + 1)) + min;
	}
}; // end class Deck


class Card {
	constructor(value, suite, hex){
		this.value = value;
		this.suite = suite;
		this.hex = hex;
	};
}; // end class Card


class Player {
	constructor( name, id ){
		this.id = id;
		this.name = name;
		this.hand = [];
		$('#clear').show();
		$('#playerTitle').show();
		$('#players').append( '<li>'+name+'</li>');
		update('Player '+this.name+' created...', undefined);
	};
}; // end class Player


class Game {
	constructor(){
		this.players = [];
		this.deck = [];
		var __thisGame = this;
	};

	
	buildSortedDeck(){ // game starts without a deck, this function creates deck when button is clicked
		this.deck = new Deck();
		if (this.players.length > 0){
			for (var i = 0; i < this.players.length; i++){
				if ( this.players[i].hand.length !== 0 ){
					for (var j = 0; j < this.players[i].hand.length; j++){
						// go through all cards in deck
						// if hex number matches
						// splice the card out

						for (var k = 0; k < this.deck.cards.length; k++){
							if(this.deck.cards[k].hex == this.players[i].hand[j].hex){
								console.log('match');
								this.deck.cards.splice(k,1);
							}
						}
					}
				}
			}
		}
		update('Deck sorted (or new deck built if first deck)...',this.deck);
		this.__buttons('show');
	};


	deal(){ // deal a random card from the deck to player of choice
		var randomIdx = this.deck.__randomNumber(0, this.deck.cards.length);
		var player = this.__findPlayer(function(player, deck){
			player.hand.push( deck.cards.splice(randomIdx, 1)[0]);
			console.log( player );
			$('#discard').show();
			update(player.name+' drew a card...', deck);
		} );
	};


	discard(){ // discard bottom card in hand of player of choice
		/* 
		note: right now this just discards the bottom card drawn, this could be extended to allow user
		the option of which card to remove (maybe even incorporate visual hand and clicks to discard)
		*/
		var player = this.__findPlayer(function(player,deck){
			console.log(player, deck);
			if (player.hand.length !== 0){
				deck.discardPile.push(player.hand.pop());
				update(player.name+' discarded...', deck);
			} else {
				alert(player.name+' doesn\'t have any cards in hand to discard.')
			}
		});

	};

	resetDeck(){
		var newDeck = new Deck();
		this.deck = newDeck;
		update('Deck reset...',this.deck);
		if (this.players.length > 0){
			for (var i = 0; i < this.players.length; i++){
				// pop all cards in each player hand
				if (this.players[i].hand.length > 0){
					for (var j = 0; j < this.players[i].hand.length; j++){
						this.players[i].hand.pop();
						update('Player hands cleared...',this.deck);
						console.log(this);
					};
				};
			};

		};
	};

	resetGame(){ // clears deck, players, discard pile - fresh slate

		var cardLength;
		var playerLength;
		var discardLength
		if (typeof(this.deck.cards) == 'undefined' ){ // undefined checks in these next sections are to handle different scenarios (ie, new deck created but not players, or players created but not deck)
			cardLength = 0;
		} else { 
			cardLength = this.deck.cards.length;
			this.__buttons('hide');
		};

		if (typeof(this.players) == 'undefined' ){
			playerLength = 0;
		} else {
			playerLength = this.players.length;
		};

		if (typeof(this.deck.discardPile) == 'undefined' ){
			discardLength = 0;
		} else {
			discardLength = this.deck.discardPile.length;
		};

		for (var i = 0; i < cardLength; i++){ this.deck.cards.pop() };
		for (var j = 0; j < playerLength; j++){ this.players.pop() };
		for (var k = 0; k < discardLength; k++){ this.deck.discardPile.pop() };
		console.log(this);
		$('#status').empty();
		this.__buttons('hide');
	};


	__findPlayer(successFunct){ // look for a player 
		var playerFound = false;
		var player = prompt('Enter player name (case sensitive)...');

		for (var i = 0; i < this.players.length; i++){
			if (player == this.players[i].name){
				playerFound = true;
				successFunct(this.players[i], this.deck);
				return this.players[i];
			}; 
		};

		if (playerFound == false) {
			alert('Name was not found in current list of players.');
			return undefined;
		};
	};


	__buttons(status){ // hide or show buttons
		/* 
		Note: this is not bomber proof (does not catch anything other than show / hide but works as a helper function 
		for the time being. Not sure how secure private functions must be if they're for specific internal-uses?
		*/
		if (status == 'show'){
			$('#clear').show();
			$('#deal').show();
			$('#resetDeck').show();
		};

		if (status == 'hide'){
			$('#clear').hide();
			$('#playerTitle').hide();
			$('#deal').hide();
			$('#shuffle').hide();
			$('#discard').hide();
			$('#resetDeck').hide();
			$('#players').empty();
			$('#card').empty();
		};
	};
}; // end class Game


/* USER INTERACTIVITY AND BUTTON CLICKS */
$(document).ready(function(){
	var myGame = new Game(); //create game
	console.log(myGame);

	$('#sorted').click(function(){ //create sorted deck/reset
		myGame.buildSortedDeck();
		$('#shuffle').show();
	});

	$('#shuffle').click(function(){ //shuffle existing deck
		myGame.deck.shuffle();	
	});

	$('#player').click(function(){ //add player
		playerCount++;
		myGame.players.push( new Player(prompt('Please enter your name:'), playerCount));
		console.log(myGame);
	});

	$('#deal').click(function(){ //deal to player
		console.log(myGame);
		myGame.deal();
	})

	$('#discard').click(function(){ //discard card
		console.log(myGame);
		myGame.discard();
	})

	$('#resetDeck').click(function(){ //clear game
		myGame.resetDeck();
	});

	$('#clear').click(function(){ //clear game
		myGame.resetGame();
		playerCount = 0;
	});

});
/*
////////////////////////
//
//	PROJECT NOTES
//
////////////////////////

	//DONE Create a Deck object constructor. A deck should have the following functionality:

	//DONE The Deck should contain the 52 standard cards

	//DONE The Deck should be able to shuffle
	//DONE The Deck should be able to reset
	//DONE The Deck should be able to deal a random card
	//DONE Deal should return the card that was dealt and remove it from the deck
	//DONE Now create a Player object constructor. A Player should have the following functionality:

	//DONE The Player should have a name
	//DONE The Player should have a hand
	//DONE The Player should be able to take a card (use the deck.deal method)
	//DONE The Player should be able to discard a card
	//DONE Timestamp and log?

	Optional:
	+ Create a blackjack game with your deck of cards!
*/