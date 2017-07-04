$(document).ready(function() {
	var targetMenu = $('.navCont a.btn');
	var chapterLink = $('#chapters .menuCont a');

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

		} else if ($(this).hasClass('chapters')) {
			$('#chapters').show();
			$('header').toggleClass('chaptersOpen');
		}

		if ($('body').hasClass('dis-slideout')) {
			$('body').removeClass('dis-slideout');
			$('#slideout').removeClass('active');
		}
	});

	chapterLink.on('click',function(e) {
		$('body').toggleClass('dis');
		$('#progressBar').toggleClass('dis');
		$('header').removeClass('chaptersOpen');
	});
});