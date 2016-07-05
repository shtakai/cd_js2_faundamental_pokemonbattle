var initGame = function(){
  var game = {
    players: [],
    deck: [],
    addPlayer: function(player){
      this.players.push(player);
    }
  };

  function playerConstructor(name){
    player = {};
    player.name = name;
    player.hand = [];
    player.addCard = function(card){
      player.hand.push(card);
    };
    return player;
  }
  //example:
  game.addPlayer(playerConstructor('Joe'));
  game.addPlayer(playerConstructor('Sarah'));

  for(var i = 1; i <= 100; i++){
    game.deck.push(getCard());
  }

  console.log(game);

  return game;
}

// reminder of how to get things using jquery and AJAX!
$(document).ready(function(){
  var game = initGame();
  console.log(game);

  html_str = '';
  for(var idx in game.players){
    player = game.players[idx]
    html_str += '<div id="player_'+ (idx+1) +'">';
    html_str += '<h3>' + player.name + '</h3>';
    html_str += '<div id="hand_'+ (idx+1) +'">';
    for(var hand_idx in player.hand){
      //hand = player.hand[hand_idx];
      //console.log(player.hand[hand_idx]);
      //html_str += '<h4 id="pokemon' + hand_idx + '">' + hand.attack + '</h4>';
    }

    html_str += '</div>';

    html_str += '</div>';
  }
  //console.log(html_str);
  console.log(game.deck);
  $('#game').html(html_str);

});

var getCard = function(){
  var card;
  $.get("http://pokeapi.co/api/v1/pokemon/"+ getRandomInt(1, 500)  +"/", function(res) {
    card = res;
    console.log(card);
    return card
  }, "json");
}

// Returns a random integer between min (included) and max (excluded)
// Using Math.round() will give you a non-uniform distribution!
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
