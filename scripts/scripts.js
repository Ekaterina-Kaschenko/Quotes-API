'use strict'
$(function() {
  function Quotes() {
    var self = this;
    this.wrapperObj = $('.wrapper');
    this.newQuoteButton = $('.getNewQuote');
    this.socialButton = $('.social-buttons__item');
    this.quoteContainer = $('.quoteContainer');
    this.authorContainer = $('.authorContainer');
    
    this.dataObj = null;
    this.updateQuote();
    $('.vk').click(function() {
      self.shareVK('URL', 'TITLE', 'IMG_PATH', self.getQuoteAuthor());
    });
    $('.twitter').click(function() {
      self.shareTwitter('URL', '"' + self.getQuoteAuthor() + '" '  + self.getQuoteText);
    });
    $('.facebook').click(function() {
      self.shareFacebook(window.location.href, self.getQuoteAuthor(), '"' +  self.getQuoteText() + '"');

    });
    
    return self;
  }

  Quotes.prototype.updateQuote = function() {
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
        this.dataObj = JSON.parse(data);
        this.updateContent();
      },
      error: function() {
        console.log('Something did not happen as intended');
      }
    });
  };
  Quotes.prototype.updateContent = function() {
    this.quoteContainer.html(this.getQuoteText());
    this.authorContainer.html(' - ' + this.getQuoteAuthor());
    
    var randomColor = getRandomColor();
    this.wrapperObj.css('background-color', randomColor);
    this.quoteContainer.css('color', randomColor);
    this.authorContainer.css('color', randomColor);
    this.newQuoteButton.css('background-color', randomColor);
    for (var i = 0; i < this.socialButton.length; i++) {
      this.socialButton[i].style['background-color'] = randomColor;
    }
    return this;
  };
  Quotes.prototype.shareVK = function(purl, ptitle, pimg, text) {
    var url = 'http://vkontakte.ru/share.php?';
    url += 'url=' + encodeURIComponent(purl);
    url += '&title=' + encodeURIComponent('"' + this.getQuoteText() + '" ' +
    	this.getQuoteAuthor());
    url += '&description=' + encodeURIComponent(text);
    url += '&image=' + encodeURIComponent(pimg);
    url += '&noparse=true';
    console.log(url);
    window.open(url);
    return this;
  };
  Quotes.prototype.shareFacebook =  function(purl, ptitle, text) {
    var url  = 'https://www.facebook.com/dialog/feed';
    url += '?app_id=' + 1631340873849527;
    url += '&display=popup';
    url += '&caption=' + ptitle;
    url += '&description=' + text;
    url += '&link=' + purl;
    url += '&redirect_uri=' + 'https://ekaterina-kaschenko.github.io/Quotes-API/facebook.html';
    console.log(url);
    window.open(url);
    return this;
  };

  Quotes.prototype.shareTwitter = function(purl, ptitle) {
    var url  = 'http://twitter.com/share?';
    url += 'text='      + encodeURIComponent('"' + this.getQuoteText() + '" ' +
      this.getQuoteAuthor());
    url += '&url='      + encodeURIComponent(purl);
    url += '&counturl=' + encodeURIComponent(purl);
    window.open(url);
    return this;
  };

  Quotes.prototype.getQuoteText = function() {
  	return this.dataObj.quote;
  };
  Quotes.prototype.getQuoteAuthor = function() {
  	return this.dataObj.author;
  };

});

var quotes = new Quotes();

  $('.getNewQuote').click(function() {
    quotes.updateQuote();
  });

function getRandomColor() {
  var colors = ['#7d4627', '#89bdd3', '#6ed3cf', '#9068be', '#e62739', '#3fb0ac', '#173e43', '#312c32', '#5a5c51', '#729f98', '#283018', '#aa863a', '#6534ff', '#62bcfa', '#5e0231', '#856046', '#e05038', '#e6af4b', '#300032', '#c43235', '#16174f', '#963019', '#e05915'];
  return colors[getRandomNum(colors.length - 1)];
}

function getRandomNum(max) {
  return Math.round(Math.random() * max);
}
