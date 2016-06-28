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
			 					console.log('Pulled from API!!');
			 					alert(data);
			 		    },
			 			   error: function() {
			 			    console.log('Something did not happen as intended');
			 			   }
			 			});
					}
				};
			quote.getQuote();
		});
	}); // end of document.ready