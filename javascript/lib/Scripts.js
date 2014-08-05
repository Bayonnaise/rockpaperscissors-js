// Script for clicking on a choice
$(document).ready(function(){
  var p1 = new Player('Dave');
  var p2 = new Player('Computer');
  var game = new Game(p1, p2);

  $('#name').text(p1.name);

  $('.choices img').on('click', function(){
    p1.picks($(this).data('pick'));
    p2.picks(p2.random());

    var message = game.victoryMessage();
    $('<li>' + message + '</li>').prependTo('#results').slideDown().addClass(game.messageClass());
  	$('#results li:gt(4)').fadeOut(function() {
  		this.remove();
  	});

  	$('#p1').text(p1.score);
  	$('#p2').text(p2.score);
  })
})
