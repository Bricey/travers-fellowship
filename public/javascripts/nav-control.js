$(document).ready(function() {
	var targetMenu = $('.navCont a.btn');

	//add url for Facebook share link
	$('a.fb').attr("href","https://www.facebook.com/share.php?u="+ encodeURIComponent(location.href));
	
	targetMenu.on('click',function(e) {
		e.preventDefault();
		$('body').toggleClass('dis');
		$('#progressBar').toggleClass('dis');

		if ($(this).hasClass('menu')) {
			$('#chapters').hide();
			$('header').toggleClass('menuOpen');
		}

		if ($('body').hasClass('dis-slideout')) {
			$('body').removeClass('dis-slideout');
			$('#slideout').removeClass('active');
		}
	});

	// check if ios for background:cover fix
	if (iOS()) {
		$('.bgFallback').show();
		$('#intro').css('background-attachment','scroll');
	} else {
		$('.bgFallback').remove();
	}
	
	function iOS() {

	  var iDevices = [
	    'iPad Simulator',
	    'iPhone Simulator',
	    'iPod Simulator',
	    'iPad',
	    'iPhone',
	    'iPod'
	  ];

	  if (!!navigator.platform) {
	    while (iDevices.length) {
	      if (navigator.platform === iDevices.pop()){ return true; }
	    }
	  }

	  return false;
	}

});