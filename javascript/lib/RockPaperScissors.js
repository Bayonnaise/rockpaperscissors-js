function Player(name) {
  // 'initialize' method goes here!
  this.name = name;
}

Player.prototype.picks = function(pick) {
  this.pick = pick;
};

function Game(player1, player2) {
  this.player1 = player1;
  this.player2 = player2;
}

Game.prototype.winner = function() {

	var beats = { 'rock' : ['scissors', 'lizard'],
								'scissors' : ['paper', 'lizard'],
								'paper' : ['rock', 'spock'],
								'lizard' : ['paper', 'spock'],
								'spock' : ['scissors', 'rock']
							};

  if (this.same_pick()) {
  	return null;
  }
  else if ((beats[this.player1.pick]).indexOf(this.player2.pick) > -1) {
  	return this.player1;
  }
  else {
  	return this.player2;
  }
}

Game.prototype.same_pick = function() {
	return (this.player1.pick == this.player2.pick);
};