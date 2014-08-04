function Player(name) {
  // 'initialize' method goes here!
  this.name = name;
}

Player.prototype.picks = function(pick) {
  this.pick = pick;
};

Player.prototype._defeats = function(opponent) {
	return Game.prototype.beats[this.pick].indexOf(opponent.pick) > -1;
};

Player.prototype._victory_verb_over = function(opponent) {
	var verb_index = Game.prototype.beats[this.pick].indexOf(opponent.pick) - 1;
	return Game.prototype.beats[this.pick][verb_index];
};

function Game(player1, player2) {
  this.player1 = player1;
  this.player2 = player2;
}

Game.prototype.beats = { 'rock' : ['blunts', 'scissors', 'crushes', 'lizard'],
								'scissors' : ['cut', 'paper', 'decapitate', 'lizard'],
								'paper' : ['covers', 'rock', 'disproves', 'Spock'],
								'lizard' : ['eats', 'paper', 'poisons', 'Spock'],
								'Spock' : ['smashes', 'scissors', 'vapourises', 'rock']
							};

Game.prototype.winner = function() {
  if (this._isSamePick()) {
  	return null;
  }
  else if (this.player1._defeats(this.player2)) {
  	return this.player1;
  }
  else {
  	return this.player2;
  }
};

Game.prototype.loser = function() {
	if (this.winner() === this.player1) {
		return this.player2;
	} else if (this.winner() === this.player2) {
		return this.player1;
	}
};

Game.prototype._isSamePick = function() {
	return this.player1.pick === this.player2.pick;
};

Game.prototype.victoryMessage = function() {
	var method = this.winner()._victory_verb_over(this.loser());
	return this.winner().name + "'s " + this.winner().pick + " " + method + " " + this.loser().name + "'s " + this.loser().pick ;
};