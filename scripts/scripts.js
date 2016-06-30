$(function(){
	function getQuote() {
		$.ajax({
			type: 'get',
		headers: {
      'X-Mashape-Key': 'eLDaLcXAYOmshU8uqTBkhkrT9Nmcp1ACCmSjsnmbo1Va9oqckY',
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept': 'application/json'
    },
			url: 'https://andruxnet-random-famous-quotes.p.mashape.com/',
			success: function(data) {
				console.log(data);
				var wrapperObj = $('.wrapper')[0],
						getNewQuote = $('.getNewQuote')[0],
						socialButton = $('.social-buttons__item');

				var dataObj = JSON.parse(data);
				var currentQuote = dataObj.quote;
				var currentAuthor = dataObj.author;
				var quoteContainer = $('.quoteContainer')[0];
					$(quoteContainer).html(currentQuote);
				var authorContainer = $('.authorContainer')[0];
					$(authorContainer).html(currentAuthor);
				var randomColor = getRandomColor();
					$(wrapperObj).css('background-color', randomColor);
					$(getNewQuote).css('background-color', randomColor);
				var socialButtonsLength = $('.social-buttons__item').length; 
					
					for (var i = 0; i < socialButtonsLength; i++) {
						$(socialButton[i]).css('background-color', randomColor);
					}
					$(quoteContainer).css('color', randomColor);
					$(authorContainer).css('color', randomColor);
				
					$('.twitter').click(function() {
				    if(!inIframe()) {
				      openURL('https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + currentQuote + '" ' + currentAuthor));
				    }
					});

	    },
		   error: function() {
		    console.log('Something did not happen as intended');
		   }
		});
	}
	getQuote();
	$('.getNewQuote').click(function(){ 
		getQuote(); 
	});

	function getRandomColor() {
		var colors = ['#7d4627', '#89bdd3', '#6ed3cf', '#9068be', '#e62739', '#3fb0ac','#173e43', '#312c32', '#5a5c51', '#729f98', '#283018', '#aa863a', '#6534ff', '#62bcfa', '#5e0231', '#856046', '#e05038', '#e6af4b', '#300032', '#c43235', '#16174f', '#963019', '', '#e05915'];
	  var color = colors[getRandomNum(colors.length)];

	  return color;
	}

	function getRandomNum(max) {
	  return Math.round ( Math.random() * max );
	}

function inIframe () { try { return window.self !== window.top; } catch (e) { return true; } }

function openURL(url){
  window.open(url, 'Share');
}


}); 