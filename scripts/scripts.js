$(function(){
		$('.getNewQuote').click(function(){ 
			console.log('click');
				var quote = {
					getQuote : function () {
			 			var getQuoteCategories = {
			 				type: 'get',
			 				url: 'http://quotes.rest/qod.json',
			 				dataType: 'json',
			 				success: function(data) {
			 					console.log('Pulled from API!!');
			 					alert(data);
			 		    },
			 			   error: function() {
			 			    console.log('Something did not happen as intended');
			 			   }
			 			};
					}
				};
				quote.getQuote();
		});

	}); // end of document.ready