$(document).ready(function() {
	var slideout = $('#slideout');
	var slideoutToggle = $('.gallery-btn');
	var slideoutClose = $('.slideout-close');
	var galImg;
	var progress = $('progress');
	var galBtn = $('.gallery-btn');
	var moreIcon = $('.more-icon');

	var galleryObj = {
		"gal-drawings" : {
			name: 'drawing',
			captions: [
				['XXX0'],
				['XXX1'],
				['XXX2'],
				['XXX3'],
				['XXX4'],
				['XXX5']
			]
		},
		"url-zaatari" : {
			url: "https://www.google.com/maps/embed?pb=!1m0!4v1498162611152!6m8!1m7!1sF%3A-ZOCZdG37nhY%2FWOkVtTmxhJI%2FAAAAAAAAABQ%2FHl5xGJsoqXsCTIyFruE0PmAUk-MjN1aogCLIB!2m2!1d32.2858696!2d36.3356418!3f47.799609088037954!4f3.355989764901338!5f0.7820865974627469",
			caption: "Za'atari refugee camp in Jordan."
		}
	}

	slideoutToggle.on('click',function() {
		$('body').addClass('dis-slideout');
		var targData = $(this).attr('data-content');
		initGallery(targData);
		slideout.addClass('active');
	});

	slideoutClose.on('click',function() {
		$('body').removeClass('dis-slideout');
		slideout.removeClass('active');
		$('.gal-ft').children().remove();
		$('.gal-cont').removeClass('url gal-fw');
		$('.back').off();
		$('.next').off();
	});

	function adjustImageProportions(t) {
		var targ = t;
		var mW = 800;
		var mH = 500;
		var h = targ.height();
		var w = targ.width();
		var ratio = 0;

		if (w > mW) {
			ratio = mW / w;   // get ratio for scaling image
            targ.css("width", mW); // Set new width
            targ.css("height",'auto');  // Scale height based on ratio
		}

		if (h > mH) {
			ratio = mH / h; // get ratio for scaling image
            targ.css("height", mH);   // Set new height
            targ.css("width", 'auto');    // Scale width based on ratio
		}
	}	

	function initGallery(d) {
		var dSStr = d.substring(0,3);
		if (dSStr === 'gal') {
			launchGallery(d);
		} else if (dSStr === 'url') {
			launchUrl(d);
		}
	}

	function launchUrl(d) {
		var galUrl = $('<iframe>').addClass('').attr('src',galleryObj[d].url).attr('frameborder',0);
		var gal = galleryObj[d];
		$('.gal-cont').addClass('url gal-fw');
		$('.gal-ft').append(galUrl);
	}

	function launchGallery(d) {
		galImg = $('<img>').attr('alt','gallery image');
		$('.gal-ft').append(galImg);
		var gal = galleryObj[d];
		var totalImages = gal.captions.length-1;
		var currentSlide = 0;
		galImg.attr('src','images/art/'+d+"/"+gal.name+currentSlide+".jpg");

		$('.back').on('click',function() {
			if (currentSlide > 0) currentSlide--;
			galImg.attr('src','images/art/'+d+"/"+gal.name+currentSlide+".jpg");
			adjustImageProportions(galImg);
		});

		$('.next').on('click',function() {
			if (currentSlide < totalImages) currentSlide++;
			galImg.attr('src','images/art/'+d+"/"+gal.name+currentSlide+".jpg");
			adjustImageProportions(galImg);
		});
	}

	// progressBar controls

	var winHeight = $(window).height(),
	  docHeight = $(document).height();
	  max = docHeight - winHeight;

	$(progress).attr('max', max);
	var value = $(window).scrollTop();
	$(progress).attr('value', value);

	$(document).on('scroll', function() {
	  value = $(window).scrollTop();
	  progress.attr('value', value);
	  var min = 0,max=300;
	  if (value > min && value <= max) {
	  	$('.hed-img').css('opacity',(value-max)/(min-max));
	  	$('.bgFallback').css('opacity',(value-max)/(min-max));
	  }
	});

	// scaleToFill() for fullpage video background
	//scaleToFill();
	$('.video video').on('loadeddata',scaleToFill);

	function scaleToFill() {
		$('.video video').each(function(i,videoTag) {
			var $video = $(videoTag),
			videoRatio = videoTag.videoWidth / videoTag.videoHeight,
			tagRatio = $video.width() / $video.height(),
			val;
			console.log($video);
			console.log(videoTag);

			if (videoRatio < tagRatio) {
				val = tagRatio / videoRatio * 1.02;
			} else if (tagRatio < videoRatio) {
				val = videoRatio / tagRatio * 1.02;
			}

			$video.css('transform','scale('+val+','+val+')');
		});
	}

	//lazy load code
	$('img.lazy').lazyload();

	// window on resize controls

	$(window).on('resize',function() {
		//slideout.css({'top':$(window).scrollTop(),'height':'100vh'});
			if (galImg !== undefined) adjustImageProportions(galImg);
		winHeight = $(window).height(),
	  	docHeight = $(document).height();
	  	max = docHeight - winHeight;	
		$(progress).attr('max', max);
		value = $(window).scrollTop();
		$(progress).attr('value', value);	
	});
	scaleToFill();
});