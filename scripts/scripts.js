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
				
					var Share = {
						vkontakte: function(purl, ptitle, pimg, text) {
							url  = 'http://vkontakte.ru/share.php?';
							url += 'url='          + encodeURIComponent(purl);
							url += '&title='       + encodeURIComponent('"' + currentQuote + '".');
							url += '&description=' + encodeURIComponent(text);
							url += '&image='       + encodeURIComponent(pimg);
							url += '&noparse=true';
							Share.popup(url);
						},

						facebook: function(purl, ptitle, pimg, text) {
							url  = 'http://www.facebook.com/sharer.php?s=100';
							url += '&p[title]='     + encodeURIComponent(ptitle);
							url += '&p[summary]='   + encodeURIComponent(text);
							url += '&p[url]='       + encodeURIComponent(purl);
							url += '&p[images][0]=' + encodeURIComponent(pimg);
							Share.popup(url);
						},
						twitter: function(purl, ptitle) {
							url  = 'http://twitter.com/share?';
							url += 'text='      + encodeURIComponent(ptitle);
							url += '&url='      + encodeURIComponent(purl);
							url += '&counturl=' + encodeURIComponent(purl);
							Share.popup(url);
						},

						popup: function(url) {
							window.open(url);
						}
					};

					
					$('.vk').click(function() {
						Share.vkontakte('URL','TITLE','IMG_PATH', currentAuthor);
					});
					$('.facebook').click(function() {
						Share.facebook('URL','TITLE','IMG_PATH','DESC');
					});
					$('.twitter').click(function() {
						Share.twitter('URL','TITLE');
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