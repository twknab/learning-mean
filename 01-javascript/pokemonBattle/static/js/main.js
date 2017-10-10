
// is there a better way to organize my helper functions or variables?
var myHelpers = {
  randomNumber : function(min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
  pokeFlash : function(player){
    $('#pokemonPlayer'+player.id).fadeOut('slow').fadeIn('slow').fadeOut('slow').fadeIn('slow');
  },
  healthFlash : function(player){
    $('#player'+player.id+'Health').fadeOut('fast').fadeIn('fast').fadeOut('fast').fadeIn('fast');
  },
  updateHTML : function(id, text){
    document.getElementById(id).innerHTML = text;
  },
  updateClass : function(id, newClass){
    document.getElementById(id).className = newClass;
  },
  hideOrShow : function(id, displayStatus){
    document.getElementById(id).style.display = displayStatus;
  },
  game : [],
};

// construct individual pokemon cards
class Card {
  constructor(id, name, image, hp, attack){
    this.id = id;
    this.name = name;
    this.image = image;
    this.hp = hp;
    this.attack = attack;
  };
};

// constructs deck out of cards
class Deck {
  constructor(onDeckLoad){
    myHelpers.updateHTML('status','Shuffling and building deck...this may take a moment to fetch data');
    myHelpers.updateClass('status','alert');
    this.cards = [];
    // builds 6 cards for pokemon between 1 and 150
    for(var i=1; i<=6; i++){
      this.__makeCard(myHelpers.randomNumber(1,150), onDeckLoad);
    };
  };

  // gets pokemon api data and creates card and pushes into deck until deck length is 6 cards
  __makeCard(pokemonNumber, onDeckLoad){
    var deckLoaded = false;
    var api = 'http://pokeapi.co/api/v1/pokemon/' + pokemonNumber;
    var thisDeck = this;
    $.get(api, function(pokemonObject){
      var card = new Card(pokemonNumber, pokemonObject['name'], pokemonObject.sprites[0]['resource_uri'], pokemonObject['hp'], pokemonObject['attack']);
      thisDeck.cards.push(card)
      if (thisDeck.cards.length == 6){
        onDeckLoad(thisDeck); // only runs after all 6 cards are created
      } else {
        myHelpers.updateHTML('status', 'Shuffling and building deck...still fetching....');
        myHelpers.updateClass('status', 'alert');
      };
    }, 'json');
  };
  // pulls card from deck and pushes into player hand
  drawCard(){
    return this.cards.pop();
  };
};

// constructs players
class Player {
  constructor(id, name, hand, score){
    this.id = id;
    this.name = prompt('Please enter a name for Player '+id+':', 'Player ' + id);
    this.hand = [];
    this.inPlay = [];
    this.score = 0;
    myHelpers.updateHTML('player'+id, this.name);
    myHelpers.updateClass('player'+id+'Wrap', 'player');
    myHelpers.updateHTML('score'+id, '<h2>Score: '+this.score+'</h2>');
  };
};

// creates game with two player instances, one randomized deck instance and deals 3 cards to each player
class Game {
  constructor(){
    this.player1 = new Player(1);
    this.player2 = new Player(2);
    this.battleStarted = false;
    this.attacker = '';
    this.defender = '';
    this.__makeDeck();
  }; // end constructor


  // creates deck instance, deals cards to each player, flips first card in hand to play
  __makeDeck(){
    var thisGame = this;
    var myDeck = new Deck(function(deck){
      var deckLoaded = true;
      myHelpers.updateHTML('status', 'Deck now loaded...');
      // document.getElementById('status').innerHTML = 'Deck now loaded.';

      // makes sure number of cards in deck are even before dealing them out
      if ( deck.cards.length % 2 === 0 ) {
        // goes through all cards and 'deals' one to each player,
        // similar to a real dealer giving one card to each player alternating
        for (var i=0; i<=deck.cards.length; i++){
          // is there some way to push a card into each player
          // hand a better way than the two lines below?
          thisGame.player1.hand.push(myDeck.drawCard());
          thisGame.player2.hand.push(myDeck.drawCard());
        };
        // flips card
        thisGame.__flipCard(thisGame.player1);
        thisGame.__flipCard(thisGame.player2);
        // totals card in hand and cards in play for each player and updates
        // card count and displays battle button
        var player1TotalCards = thisGame.player1.hand.length+thisGame.player1.inPlay.length;
        var player2TotalCards = thisGame.player2.hand.length+thisGame.player2.inPlay.length;
        myHelpers.updateHTML('cards'+thisGame.player1.id, '<h3>Cards Remaining: '+player1TotalCards+'</h3>');
        myHelpers.updateHTML('cards'+thisGame.player2.id, '<h3>Cards Remaining: '+player2TotalCards+'</h3>');
        myHelpers.updateHTML('status', 'Cards ready, click "battle" to begin...');
        myHelpers.updateClass('status', 'ready');
        myHelpers.hideOrShow('battle', 'block');
      } else {
        console.log('Uneven number of cards in deck!')
        alert('Contact app developer, the card deck isn\'t right.')
      };
    }); // end myDeck
  }; // end __makeDeck


  // removes card from hand and puts into play
  __flipCard(player){
    var thisGame = this;
    player.inPlay.pop(); // removes any card currently in play
    player.inPlay.push(player.hand.shift()); // takes first card in hand and pushes into play
    player.hp = player.inPlay[0].hp; // updates health to reflect pokemon health
    var html_str = '';
    html_str += '<h2 class="pokeattribute">'+player.inPlay[0].name+'</h2>';
    // sprite images must be obtained through a second API query
    // improve this by maybe grabbing these images when the first deck of cards builds
    $.get('http://pokeapi.co'+player.inPlay[0].image, function(sprite){
      html_str += '<img src="http://pokeapi.co'+sprite.image+'" alt="'+player.inPlay[0].name+'">';
      html_str += '<h3>Attack points: '+player.inPlay[0].attack+'</h3>';
      myHelpers.updateHTML('pokemonPlayer'+player.id, html_str);
      myHelpers.updateHTML('player'+player.id+'Health', '<h3>'+player.inPlay[0].name+' Health: '+player.hp+'</h3>');
    }, 'json');

  }; // end __flipCard


  // creates battle and battle interactions
  battle(){
    var attackResult;
    var thisGame = this;

    // if first battle, '__flipCoin' to see who goes first
    if (thisGame.battleStarted == false){
      this.__flipCoin(function(){ // callback function after coin flip
        myHelpers.pokeFlash(thisGame.attacker);
        return thisGame;
      });
    } else {
      myHelpers.pokeFlash(thisGame.attacker);
      attackResult = myHelpers.randomNumber(1, thisGame.attacker.inPlay[0].attack); // randomizes number in pokemon attack range
      thisGame.defender.hp -= attackResult; // takes generated value away from defender's hp
      myHelpers.updateHTML('status', thisGame.attacker.inPlay[0].name+' has attacked! ... '+attackResult+' damage given out of a possible '+thisGame.attacker.inPlay[0].attack+' ...');
      myHelpers.updateClass('status','alert');

      // if defender hp is still positive after attack
      if (thisGame.defender.hp > 0){
        if (thisGame.defender.hp < 20){
          console.log('player'+thisGame.defender.id+'Health');
          myHelpers.updateClass('player'+thisGame.defender.id+'Health','pokeattribute lowHealth');
          myHelpers.updateHTML('player'+thisGame.defender.id+'Health','<h3>Health: '+thisGame.defender.hp+'</h3>');
        }
        // updates pokemon health and switches players
        myHelpers.updateHTML('player'+thisGame.defender.id+'Health','<h3> Health: '+thisGame.defender.hp+'</h3>');
        myHelpers.healthFlash(thisGame.defender)
        var changePlayer = thisGame.attacker;
        thisGame.attacker = thisGame.defender;
        thisGame.defender = changePlayer;
        setTimeout(function(){
          myHelpers.updateHTML('status', thisGame.attacker.inPlay[0].name+"'s turn now...");
          myHelpers.updateClass('player'+thisGame.attacker.id+'Wrap','player turn');
          myHelpers.updateClass('player'+thisGame.defender.id+'Wrap','player');
        }, 3000);
      } else { // if defender health is below 0 after attack: show defeated and play next card, updated score
        myHelpers.healthFlash(thisGame.defender);
        myHelpers.updateHTML('status', thisGame.defender.inPlay[0].name+' defeated ... '+attackResult+' damage taken out of a possible '+thisGame.attacker.inPlay[0].attack+' ...');
        myHelpers.updateHTML('player'+thisGame.defender.id+'Health', '<h3>Health: Defeated</h3>');
        myHelpers.updateClass('player'+thisGame.defender.id+'Health', 'pokeattribute lowHealth');
        thisGame.attacker.score += 1;
        myHelpers.updateHTML('score'+thisGame.attacker.id, '<h2>Score: '+thisGame.attacker.score+'</h2>');
        setTimeout(function(){
          // if player cards are all gone, end game:
          if (thisGame.defender.hand.length == 0){
            alert('Match over, '+thisGame.attacker.name+' has won. Press Start Battle again to play another match.');
            myHelpers.game.pop();
            thisGame.gameStarted = false;
            console.log(myHelpers.game);
            return undefined;
          }
          // flip new card for defender, update card count and change players
          thisGame.__flipCard(thisGame.defender);
          myHelpers.updateClass('player'+thisGame.defender.id+'Health','pokeattribute')
          var cardsLeft = thisGame.defender.hand.length + thisGame.defender.inPlay.length;
          myHelpers.updateHTML('cards'+thisGame.defender.id, '<h3>Cards Remaining: '+cardsLeft+'</h3>');
          var changePlayer = thisGame.attacker;
          thisGame.attacker = thisGame.defender;
          thisGame.defender = changePlayer;
          setTimeout(function(){
            myHelpers.updateClass('player'+thisGame.attacker.id+'Wrap','player turn');
            myHelpers.updateClass('player'+thisGame.defender.id+'Wrap','player');
            myHelpers.updateHTML('status', thisGame.attacker.inPlay[0].name+"'s turn now...");
          }, 2000);
        }, 2000);

      };
    };

    return thisGame;

  }; // end of battle

  // coin flip for who goes first: number between 1-100 is generated,
  // if less than 50 = player 1 goes first, if greater than 50 = player 2 goes first
  __flipCoin(coinFlipped){
    var thisGame = this;
    var whoGoesFirst = myHelpers.randomNumber(1,100);
    thisGame.battleStarted = true;

    setTimeout(function(){
      if (whoGoesFirst < 50){
        myHelpers.updateHTML('status', thisGame.player1.name + ' won coin toss and goes first...click battle to Fight!');
        myHelpers.updateClass('status', 'ready');
        myHelpers.updateClass('player1Wrap', 'player turn');
        myHelpers.updateClass('player2Wrap', 'player');
        thisGame.attacker = thisGame.player1;
        thisGame.defender = thisGame.player2;
      } else {
        myHelpers.updateHTML('status', thisGame.player2.name + ' won coin toss and goes first...click battle to Fight!');
        myHelpers.updateClass('status', 'ready');
        myHelpers.updateClass('player2Wrap', 'player turn');
        myHelpers.updateClass('player1Wrap', 'player');
        thisGame.attacker = thisGame.player2;
        thisGame.defender = thisGame.player1;
      };
      coinFlipped(); // call back function to run after coin flip to show whom goes first
    }, 2000);
    myHelpers.updateHTML('status','Flipping coin to see who goes first...');
    myHelpers.updateClass('status','alert');
  }

};





// once document loads, start instance of game or click to battle:
$(document).ready(function(){

  $('#startGame').click(function(){
    if ( myHelpers.game.length < 1 ){
      var myGame = new Game();
      myHelpers.game.push(myGame);
    } else {
      alert('You cannot start two games at once. To end the current game, reload the page or finish first!');
      return undefined;
    }
    $('#battle').click(function(){
      myGame.battle();
    });

  });



}); // end document ready




/*

///////////////////////////
//
// How this game works:
//
///////////////////////////

  1. let players pick name and construct person //DONE
  2. create a deck of 6 random pokemon cards //DONE
  3. give 3 cards to each person's hand and remove them from the deck //DONE
  4. flip 1 card from each hand and reduce hand by 1 //DONE
  5. when card is flipped, show attributes of pokemon //DONE
  7. update health of player to reflect health of pokemon //DONE
  8. ...battle (how do you want this to go down?)... //DONE
  9. ...card defeated...remove card, award point to winner... //DONE
  10. ...if loser, a new card flips, if winner you stay on the same card... //DONE
  11. ...continue battling...//DONE
  12. ...card defeated...remove card, award point to winner...loser flips new card...new battle begins... //DONE
  13. ...once one person is defeated, message pops up //DONE


  14. ...new game starts when start game is pressed (BUGGY)




///////////////////////////
//
// Bug List:
//
///////////////////////////


Bug 1: Clicking 'start game' the first time works fine. Clicking 'start game' a second time during game play should prevent a new game from starting. however, once game is completed, clicking 'start game' to start a new game does not work as expected. Desired: upon game completion, existing game (inside of a global variable called myHelpers.game) is popped, and a new game should start (along with a new deck and an innerHTML update of all poke attributes)

Bug 2: Pokemon sprites are obtained via a second API request when each player's card is "flipped" for play. This API request can lag: it might be better to create an attribute/property for each card, and call the second API request after the primary pokemon data is returned, storing that url in each card and referencing it later.

//DONE Bug 3: Fix it so card count is the actual number of cards including the one on the table.

Bug 4: Instead of replacing each message, can you create a message log?

*/
