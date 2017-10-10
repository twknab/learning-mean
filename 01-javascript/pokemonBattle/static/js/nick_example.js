"use strict";

//We need a card class.
	//Each card will have:
		//this.id = int, id of pokemon.
		//this.name = str, name of pokemon.
		//this.health = int, health of pokemon.
		//this.attack = int, attack of pokemon.
class Card {
	constructor(id, name, health, attack) {
		this.id = id;
		this.name = name;
		this.health = health;
		this.attack = attack;
	}
}



//A deck class.
	//Init method:
		//Loads all values of all 150 cards.
	//Pop:
		//Pops off the top of the deck.
class Deck {
	
	constructor(onDeckLoad) {
		
		this.cards = [];
		this.__loadCard(1, onDeckLoad);
	}
	
	__loadCard(id, onDeckLoad) { //Helper function for loadCards().
		var api = 'http://pokeapi.co/api/v1/pokemon/' + id.toString();
		var thisObj = this;
		
		var req = new XMLHttpRequest();
		
		req.onreadystatechange = function() {
			if (req.readyState == 4 && req.status == 200) {
				var data = JSON.parse(req.responseText);
				
				var newCard = new Card(id, data['name'], data['hp'], data['attack']);
				
				thisObj.cards.push( newCard );
				
				if (thisObj.cards.length < 3) {
					thisObj.__loadCard(id+1, onDeckLoad);
				}
				else {
					onDeckLoad(thisObj);
				}
			}
		}
		
		req.open("GET", api, true);
		
		req.send(null);
	}

	drawCard() {
		return this.cards.pop()
	}
}


var a = new Deck( function(thisObj) {
	for (var i = 0; i < thisObj.cards.length; i++) {
		console.log( thisObj.cards[i] );
	}
});


//A user class.
	//this.hand?
	//this.field? or maybe just hand.
	//this.name
class Player {
	constructor(id) {
		this.name = prompt("Enter a name: ");
		this.id = id;
		this.hand = [];
	}
	
}
	
//A game class.
	//this.turn
	//this.players
class Game {
	constructor() {
		this.player1 = new Player(1);
		this.player2 = new Player(2);
		
		this.deck = new Deck(this.startGame);
	}
	
	startGame(deck) {
		
	}
}

/*
How this game works:

//DONE1. let players pick name and construct person
2. create a deck of 150 random pokemon cards
3. give 6 cards to each person's hand and remove them from the deck
3. each card should be a data set returned by the pokemon api
4. have a button that flips the shows card in player hand displaying Pokemon
5. battle by choosing an attack and the resulting party receives damage
6. once hp count is gone have the pokemon die
7. once pokemon dies, winner is awarded one point, each player gets next card
*/