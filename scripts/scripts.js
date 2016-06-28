$(function(){
	function getQuote() {
		$.ajax({
			//type: 'get',
		headers: {
      'X-Mashape-Key': 'eLDaLcXAYOmshU8uqTBkhkrT9Nmcp1ACCmSjsnmbo1Va9oqckY',
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept': 'application/json'
    },
			url: 'https://andruxnet-random-famous-quotes.p.mashape.com/',
			// dataType: 'json',
			success: function(data) {
				console.log(data);
				var wrapperObj = document.getElementsByClassName('wrapper')[0],
						getNewQuote = document.getElementsByClassName('getNewQuote')[0],
						socialButton = document.getElementsByClassName('social-buttons__item');

				var dataObj = JSON.parse(data);
				var quoteContainer = document.getElementsByClassName('quoteContainer')[0];
					quoteContainer.innerHTML = dataObj.quote;
				var authorContainer = document.getElementsByClassName('authorContainer')[0];
					authorContainer.innerHTML = dataObj.author;
					var randomColor = getRandomColor();
					wrapperObj.style.backgroundColor = randomColor;
					getNewQuote.style.backgroundColor = randomColor;
					var socialButtonsLength = $('.social-buttons__item').length; 
					
					for (var i = 0; i < socialButtonsLength; i++) {
						socialButton[i].style.backgroundColor = randomColor;
					}
					
					quoteContainer.style.color = randomColor;
					authorContainer.style.color = randomColor;
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

	//Случайное целое число в диапазоне (0, max]
	function getRandomNum(max) {
	  return Math.round ( Math.random() * max );
	}
}); // end of document.ready