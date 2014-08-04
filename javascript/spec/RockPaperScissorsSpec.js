describe("Rock-Paper-Scissors-Lizard-Spock", function() {

  var player1, player2, game;
  
  beforeEach(function() {
    player1 = new Player('Alex');
    player2 = new Player('Bob');
    game = new Game(player1, player2);
  });

  describe('winning and losing', function() {

    describe('rock', function() {

      it('should beat scissors', function() {

        player1.picks('rock');
        player2.picks('scissors');
        expect(game.winner()).toBe(player1);
        expect(game.victoryMessage()).toBe("Alex's rock blunts Bob's scissors");

      });

      it('should beat lizard', function() {

        player1.picks('rock');
        player2.picks('lizard');
        expect(game.winner()).toBe(player1);
        expect(game.victoryMessage()).toBe("Alex's rock crushes Bob's lizard");
      });

      it('should lose to paper', function() {

        player1.picks('rock');
        player2.picks('paper');
        expect(game.winner()).toBe(player2);
        expect(game.victoryMessage()).toBe("Bob's paper covers Alex's rock");

      });

      it('should lose to spock', function() {

        player1.picks('rock');
        player2.picks('Spock');
        expect(game.winner()).toBe(player2);
        expect(game.victoryMessage()).toBe("Bob's Spock vapourises Alex's rock");

      });

    });

    describe('paper', function() {

      it('should beat rock', function() {

        player1.picks('paper');
        player2.picks('rock');
        expect(game.winner()).toBe(player1);
        expect(game.victoryMessage()).toBe("Alex's paper covers Bob's rock");

      });

      it('should beat spock', function() {

        player1.picks('paper');
        player2.picks('Spock');
        expect(game.winner()).toBe(player1);
        expect(game.victoryMessage()).toBe("Alex's paper disproves Bob's Spock");

      });

      it('should lose to scissors', function() {

        player1.picks('paper');
        player2.picks('scissors');
        expect(game.winner()).toBe(player2);
        expect(game.victoryMessage()).toBe("Bob's scissors cut Alex's paper");

      });

      it('should lose to lizard', function() {

        player1.picks('paper');
        player2.picks('lizard');
        expect(game.winner()).toBe(player2);
        expect(game.victoryMessage()).toBe("Bob's lizard eats Alex's paper");

      });

    });

    describe('scissors', function() {

      it('should beat paper', function() {

        player1.picks('scissors');
        player2.picks('paper');
        expect(game.winner()).toBe(player1);
        expect(game.victoryMessage()).toBe("Alex's scissors cut Bob's paper");

      });

      it('should beat lizard', function() {

        player1.picks('scissors');
        player2.picks('lizard');
        expect(game.winner()).toBe(player1);
        expect(game.victoryMessage()).toBe("Alex's scissors decapitate Bob's lizard");

      });

      it('should lose to rock', function() {

        player1.picks('scissors');
        player2.picks('rock');
        expect(game.winner()).toBe(player2);
        expect(game.victoryMessage()).toBe("Bob's rock blunts Alex's scissors");

      });

      it('should lose to spock', function() {

        player1.picks('scissors');
        player2.picks('Spock');
        expect(game.winner()).toBe(player2);
        expect(game.victoryMessage()).toBe("Bob's Spock smashes Alex's scissors");

      });

    });

    describe('lizard', function() {

      it('should beat spock', function() {

        player1.picks('lizard');
        player2.picks('Spock');
        expect(game.winner()).toBe(player1);
        expect(game.victoryMessage()).toBe("Alex's lizard poisons Bob's Spock");

      });

      it('should beat paper', function() {

        player1.picks('lizard');
        player2.picks('paper');
        expect(game.winner()).toBe(player1);
        expect(game.victoryMessage()).toBe("Alex's lizard eats Bob's paper");

      });

      it('should lose to rock', function() {

        player1.picks('lizard');
        player2.picks('rock');
        expect(game.winner()).toBe(player2);
        expect(game.victoryMessage()).toBe("Bob's rock crushes Alex's lizard");

      });

      it('should lose to scissors', function() {

        player1.picks('lizard');
        player2.picks('scissors');
        expect(game.winner()).toBe(player2);
        expect(game.victoryMessage()).toBe("Bob's scissors decapitate Alex's lizard");

      });

    });

    describe('spock', function() {

      it('should beat scissors', function() {

        player1.picks('Spock');
        player2.picks('scissors');
        expect(game.winner()).toBe(player1);
        expect(game.victoryMessage()).toBe("Alex's Spock smashes Bob's scissors");

      });

      it('should beat rock', function() {

        player1.picks('Spock');
        player2.picks('rock');
        expect(game.winner()).toBe(player1);
        expect(game.victoryMessage()).toBe("Alex's Spock vapourises Bob's rock");

      });

      it('should lose to paper', function() {

        player1.picks('Spock');
        player2.picks('paper');
        expect(game.winner()).toBe(player2);
        expect(game.victoryMessage()).toBe("Bob's paper disproves Alex's Spock");

      });

      it('should lose to lizard', function() {

        player1.picks('Spock');
        player2.picks('lizard');
        expect(game.winner()).toBe(player2);
        expect(game.victoryMessage()).toBe("Bob's lizard poisons Alex's Spock");

      });

    });

  });

  describe('draws', function() {

    describe('any identical picks', function() {

      it('should result in no winner', function() {
        var drawGameResults = ['rock', 'paper', 'scissors', 'lizard', 'spock'].map(function(x) {
          player1.picks(x);
          player2.picks(x);
          return game.winner();
        });

        expect(drawGameResults).toEqual([null, null, null, null, null]);

      });

    });

  });

});