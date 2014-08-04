function Player(name) {
  // 'initialize' method goes here!
  this.name = name;
}

Player.prototype.picks = function(pick) {
  this.pick = pick;
};

Player.prototype._defeats = function(opponent) {
	return Object.keys(Game.prototype.PAIRS[this.pick]).indexOf(opponent.pick) > -1;
};


function Game(player1, player2) {
  this.player1 = player1;
  this.player2 = player2;
}

Game.prototype.PAIRS = {
	rock: { scissors: 'blunts', lizard: 'crushes' },
	scissors: { paper: 'cut', lizard: 'decapitate' },
	paper: { rock: 'covers', Spock: 'disproves' },
	lizard: { paper: 'eats', Spock: 'poisons' },
	Spock: { scissors: 'smashes', rock: 'vapourises' }
};

Game.prototype.winner = function() {
  if (this._isSamePick()) {
  	return null;
  } else if (this.player1._defeats(this.player2)) {
  	return this.player1;
  } else {
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
	var method = this.PAIRS[this.winner().pick][this.loser().pick];
	return this.winner().name + "'s " + this.winner().pick + " " + method + " " + this.loser().name + "'s " + this.loser().pick;
};