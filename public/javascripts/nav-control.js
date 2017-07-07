$(document).ready(function() {
	var targetMenu = $('.navCont a.btn');

	targetMenu.on('mouseover',function() {
		console.log($(this).children('img').addClass('hover'));
	});

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
});