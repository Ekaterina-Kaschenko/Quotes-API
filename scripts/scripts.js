'use strict'
$(function() {
  function Quotes() {
    var self = this;
    self.wrapperObj = $('.wrapper');
    self.newQuoteButton = $('.getNewQuote');
    self.socialButton = $('.social-buttons__item');
    self.quoteContainer = $('.quoteContainer');
    self.authorContainer = $('.authorContainer');
    
    self.dataObj = null;
    self.updateQuote();
    $('.vk').click(function() {
      self.shareVK('URL', 'TITLE', 'IMG_PATH', self.getQuoteAuthor());
    });
    $('.twitter').click(function() {
      self.shareTwitter('URL', '"' + self.getQuoteAuthor() + '" '  + self.getQuoteText);
    });
    $('.facebook').click(function() {
      self.shareFacebook(window.location.href ,'TITLE','', '"' + self.getQuoteAuthor() + '" '  + self.getQuoteText());

    });
    
    return self;
  }

  Quotes.prototype.updateQuote = function() {
  	var self = this;
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
        self.dataObj = JSON.parse(data);
        self.updateContent();
      },
      error: function() {
        console.log('Something did not happen as intended');
      }
    });
  };
  Quotes.prototype.updateContent = function() {
  	var self = this;
    self.quoteContainer.html(self.getQuoteText());
    self.authorContainer.html(self.getQuoteAuthor());
    
    var randomColor = getRandomColor();
    self.wrapperObj.css('background-color', randomColor);
    self.newQuoteButton.css('background-color', randomColor);
    for (var i = 0; i < self.socialButton.length; i++) {
      self.socialButton[i].style['background-color'] = randomColor;
    }
    return self;
  };
  Quotes.prototype.shareVK = function(purl, ptitle, pimg, text) {
  	var self = this;
    var url = 'http://vkontakte.ru/share.php?';
    url += 'url=' + encodeURIComponent(purl);
    url += '&title=' + encodeURIComponent('"' + self.getQuoteText() + '" ' +
    	self.getQuoteAuthor());
    url += '&description=' + encodeURIComponent(text);
    url += '&image=' + encodeURIComponent(pimg);
    url += '&noparse=true';
    console.log(url);
    window.open(url);
    return self;
  };
  Quotes.prototype.shareFacebook =  function(purl, ptitle, pimg, text) {
    var self = this;
    var url  = 'https://www.facebook.com/dialog/feed';
    // url += '&p[title]='     + encodeURIComponent(ptitle);
    // url += '&p[summary]='   + encodeURIComponent(text);
    // url += '&p[url]='       + encodeURIComponent(purl);
    // url += '&p[images][0]=' + encodeURIComponent(pimg);
    // console.log(url);
    // window.open(url);
    // return self;
    url += '?app_id=' + 1631340873849527;
    url += '&display=popup';
    url += '&caption=' + ptitle;
    url += '&description=' + text;
    url += '&picture=' + pimg;
    url += '&redirect_uri=' + purl;
    console.log(url);
    window.open(url);
    return self;
  };

  Quotes.prototype.shareTwitter = function(purl, ptitle) {
    var self = this;
    var url  = 'http://twitter.com/share?';
    url += 'text='      + encodeURIComponent('"' + self.getQuoteText() + '" ' +
      self.getQuoteAuthor());
    url += '&url='      + encodeURIComponent(purl);
    url += '&counturl=' + encodeURIComponent(purl);
    window.open(url);
    return self;
  };

  Quotes.prototype.getQuoteText = function() {
  	return this.dataObj.quote;
  };
  Quotes.prototype.getQuoteAuthor = function() {
  	return this.dataObj.author;
  };
	
  var quotes = new Quotes();

  $('.getNewQuote').click(function() {
    quotes.updateQuote();
  });

});

function getRandomColor() {
    var colors = ['#7d4627', '#89bdd3', '#6ed3cf', '#9068be', '#e62739', '#3fb0ac', '#173e43', '#312c32', '#5a5c51', '#729f98', '#283018', '#aa863a', '#6534ff', '#62bcfa', '#5e0231', '#856046', '#e05038', '#e6af4b', '#300032', '#c43235', '#16174f', '#963019', '', '#e05915'];
    return colors[getRandomNum(colors.length - 1)];
  }

  function getRandomNum(max) {
    return Math.round(Math.random() * max);
  }
