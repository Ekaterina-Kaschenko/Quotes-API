$(function(){
		$('.getNewQuote').click(function(){ 
			console.log('click');
				var quote = {
					getQuote : function () {
						var apiKey = 'eLDaLcXAYOmshU8uqTBkhkrT9Nmcp1ACCmSjsnmbo1Va9oqckY';
						
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
			 							console.log(socialButton);

			 					var dataObj = JSON.parse(data);
			 					console.log(dataObj.quote);
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
			 							console.log('ki');
			 						}
			 						
			 						quoteContainer.style.color = randomColor;
			 						authorContainer.style.color = randomColor;
			 		    },
			 			   error: function() {
			 			    console.log('Something did not happen as intended');
			 			   }
			 			});
					}
				};
			quote.getQuote();
		});

		function getRandomColor() {
		    var letters = '0123456789ABCDEF'.split('');
		    var color = '#';
		    for (var i = 0; i < 6; i++ ) {
		        color += letters[Math.floor(Math.random() * 16)];
		    }
		    return color;
		}
	}); // end of document.ready