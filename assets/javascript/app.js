var panel = $("#play-area");

$(document).on("click", "#start", function(event){
  game.start();
});

$(document).on("click", "#done", function(event){
  game.done();
});

var questions = [{
	question: "The Sahara Desert is NOT a part of which country?",
	choices: ["Chad", "Sount Africa", "Morocco"],
	correctAnswer: "Sount Africat"

}, 
{	

	question: "Who was the guitarist for The Who?",
	choices: ["Jimmy Page", "Pete Townshend", "Angus Young", "Jimi Hendrix"],
	correctAnswer: "Pete Townshend"

}, 
{

	question: "What is the world's most populous country?",
	choices: ["India", "China", "Indonesia"],
	correctAnswer: "China"

}, 
{

	question: "What is the world's smallest (in sq mi.) country?",
	choices: ["Vatican City", "Liechtenstein", "Monaco"],
	correctAnswer: "Vatican City"

},
{

	question: "What country has the highest waterfall?",
	choices: ["Bolivia", "Venezuela", "south Africa"],
	correctAnswer: "Venezuela"

}, 
{

	question: "What country's capital is Nairobi?",
	choices: ["Kenya", "Ethiopia", "Gambia"],
	correctAnswer: "Kenya"

},
{

	question: "What country is the world's top travel destination?",
	choices: ["United States", "Great Britain", "France"],
	correctAnswer: "France"

}];

var game = {
	correct: 0,
	incorrect: 0,
	counter: 60,

  countdown: function() {
  	game.counter--;
  	$("#counter-number").html(game.counter);

  	if (game.counter === 0) {
  		alert("TIME'S UP");
  		game.done();

  	}
  },

  start: function() {
  	timer = setInterval(game.countdown, 1000);
  	$('#subcontainer').prepend('<h2>Time Remaining: <span id="counter-number">60</span> Seconds</h2>');
  	$("#start").remove();

  	for (var i = 0; i < questions.length; i++) {
      panel.append('<h2>' + questions[i].question + '</h2>');
      for (var j = 0; j < questions[i].choices.length; j++){
        panel.append('<input type="radio" name ="question' + '-' + i + '"value="' + questions[i].choices[j] + '">' + questions[i].choices[j]);
        }
  		}
  		panel.append("<button id='done'>DONE</button>");
      
  	},

  	done: function() {

  		$.each($("input[name='question-0']:checked"), function() {
  			if ($(this).val() == questions[0].correctAnswer) {
  				console.log(this);
  				  game.correct++;
  			} else {
  				game.incorrect++;
  			}

  		});
  		$.each($("input[name='question-1']:checked"), function() {
  			if ($(this).val() == questions[1].correctAnswer) {
  				console.log(this);
  				game.correct++;
  			} else {
  				game.incorrect++;
  			}

  		});
  		$.each($("input[name='question-2']:checked"), function() {
  			if ($(this).val() == questions[2].correctAnswer) {
  				console.log(this);
  				game.correct++;
  			} else {
  				game.incorrect++;
  			}

  		});
  		$.each($("input[name='question-3']:checked"), function() {
  			if ($(this).val() == questions[3].correctAnswer) {
  				console.log(this);
  				game.correct++;
  			} else {
  				game.incorrect++;
  			}

  		});
  		$.each($("input[name='question-4']:checked"), function() {
  			if ($(this).val() == questions[4].correctAnswer) {
  				console.log(this);
  				game.correct++;
  			} else {
  				game.incorrect++;
  			}

  		});

  		this.results();
  	},


  	  results:function() {
  	  	clearInterval(timer);

  	  	$("#subcontainer h2").remove();
  	   panel.html("<h2>You're Done!</h2>");
  	   panel.append("<h3>You got this many right: " + this.correct + "</h3>");
  	   panel.append("<h3>You got this many wrong: " + this.incorrect + "</h3>");
  	   panel.append("<h3>You didn't answer this many: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");
  	  
  	  }

  };
