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

				var quoteContainer = $('.quoteContainer')[0];
					$(quoteContainer).html(dataObj.quote);
				var authorContainer = $('.authorContainer')[0];
					$(authorContainer).html(dataObj.author);
				var randomColor = getRandomColor();
					$(wrapperObj).css('background-color', randomColor);
					$(getNewQuote).css('background-color', randomColor);
				var socialButtonsLength = $('.social-buttons__item').length; 
					
					for (var i = 0; i < socialButtonsLength; i++) {
						$(socialButton[i]).css('background-color', randomColor);
					}
					$(quoteContainer).css('color', randomColor);
					$(authorContainer).css('color', randomColor);
				var currentQuote = dataObj.quote;
				var currentAuthor = dataObj.author;
				console.log(currentAuthor, currentQuote);
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
	  return 'rgb(' + getRandomNum(255) + ',' + getRandomNum(255) + ',' + getRandomNum(255) + ')';
	}

	function getRandomNum(max) {
	  return Math.round ( Math.random() * max );
	}

function inIframe () { try { return window.self !== window.top; } catch (e) { return true; } }

function openURL(url){
  window.open(url, 'Share');
}


}); 