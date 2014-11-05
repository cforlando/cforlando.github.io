jQuery(function($){

  var sum = $('.wpc-widget-summary')
    , letter = $('.wpc-widget-letter')
    , sign = $('.wpc-widget-signature')
    , menu = $('.wpc-menu')
    , widget = $('.wpc');

  // handling TABs
  widget.addClass('wpc-current-summary');

  menu.on('click', 'li.summary a', function(e){
    e.preventDefault();
    widget.removeClass('wpc-current-signature');
    widget.removeClass('wpc-current-letter');
    widget.addClass('wpc-current-summary');
  });

  menu.on('click', 'li.sign a',  function(e){
    e.preventDefault();
    widget.removeClass('wpc-current-summary');
    widget.removeClass('wpc-current-letter');
    widget.addClass('wpc-current-signature');
  });

  menu.on('click', 'li.letter a',  function(e){
    e.preventDefault();
    widget.removeClass('wpc-current-summary');
    widget.removeClass('wpc-current-signature');
    widget.addClass('wpc-current-letter');
  });

  var form = $('#wpc_widget-2 form');

  $("form").validate({
    rules: {
      'wpc-email': {
        required: true,
        email: true,
        },
      'wpc-firstname': "required",
      'wpc-lastname': "required",
      'wpc-address': "required",
      'wpc-city': "required",
      'wpc-stateprovince': "required",
      'wpc-postalcode': "required",
      'wpc-countrycode': "required",
	  },
    messages: {
      'wpc-email': { 
        required: "please enter an email",
        email: "please, a valid email",
        },
      'wpc-firstname': "please enter your firstname",
      'wpc-lastname': "please enter your lastname",
      'wpc-address': "please enter your address",
      'wpc-city': "please enter your city",
      'wpc-stateprovince': "please enter your state/province",
      'wpc-postalcode': "please enter your postal code",
      'wpc-countrycode': "please enter your country code",
	  }
  })

});
