$(document).ready(function() {

	var home_banner = $('.home-banner');

	home_banner.owlCarousel({

		loop: true,

		responsiveClass: true,

		nav: true,

		dots: false,

		autoplay: true,

		autoplayTimeout: 5000,

		navText: [

			"<i class='fa fa-angle-left'></i>",

			"<i class='fa fa-angle-right'></i>"

		],



		responsive: {

			0: {

				items: 1,

			},

			600: {

				items: 1,

			},

			1000: {

				items: 1,

			}

		}

	});

	var owl = $('.services_carousel');

	owl.owlCarousel({

		loop: false,

		responsiveClass: true,

		nav: true,

		dots: false,

		lazyLoad: true,

		autoplay: false,

		autoplayTimeout: 3000,

		responsive: {

			0: {

				items: 1,

			},

			600: {

				items: 1,

			},

			1000: {

				items: 1,

			}

		}

	});

	if ($(window).width() > 767) {

		/*$(window).scroll(function() {

			if ($(this).scrollTop() > 100) {

				$("header").addClass("header-fixed");

				$('.navbar-brand ').fadeIn();

				$(".navbar-nav ").addClass(".navbar-right")

				$(".logo").hide();

			} else {

				$("header").removeClass("header-fixed");

				$('.navbar-brand ').hide();

				$(".navbar-nav ").removeClass(".navbar-right")

				$(".logo").show();

			}

		});*/
		
		$(window).scroll(function() {
          var winScrollpos = $(window).scrollTop();
          var headerScrollpos = $("header").scrollTop();
          if (winScrollpos > 200) {
          		$("header").addClass("header-fixed");
				$('.navbar-brand ').fadeIn();
				$(".navbar-nav ").addClass(".navbar-right")
				$(".logo").hide();
          } else {
           		$("header").removeClass("header-fixed");
				$('.navbar-brand ').hide();
				$(".navbar-nav ").removeClass(".navbar-right")
				$(".logo").show();
          }
        });
		

	} else {



	}

	$('.gallery_details ul li a').hover(function() {

		$(this).find('.img_hover').stop().fadeIn(300);

	}, function() {

		$(this).find('.img_hover').stop().fadeOut(300);

	});

	/*
	 
	 *  Simple image gallery. Uses default settings
	 
	 */

	$('.fancybox').fancybox();



});

$(window).on("load", function() {

	$(".about_scroll").mCustomScrollbar({

	});

	$('.gallery_shorting a').click(function() {

		$('.gallery_shorting .current').removeClass('current');

		$(this).addClass('current');



		var selector = $(this).attr('data-filter');

		$container.isotope({

			filter: selector,

			animationOptions: {

				duration: 750,

				easing: 'linear',

				queue: false

			}

		});

		return false;

	});

	var $container = $('.gallery-container');

	$container.isotope({

		filter: '*',

		animationOptions: {

			duration: 750,

			easing: 'linear',

			queue: false

		}

	});
	 var filterFns = {
        // show if number is greater than 50
        numberGreaterThan50: function() {
            var number = $(this).find('.number').text();
            return parseInt(number, 10) > 50;
        },
        // show if name ends with -ium
        ium: function() {
            var name = $(this).find('.name').text();
            return name.match(/ium$/);
        }
    };
    $('.gallery-select').on('change', function() {
        // get filter value from option value
        var filterValue = this.value;
        // use filterFn if matches value
        filterValue = filterFns[filterValue] || filterValue;
        $container.isotope({
            filter: filterValue
        });
    });

});

function onPlayerReady(event) {

	event.target.playVideo();

}

// Fires when the player's state changes.

function onPlayerStateChange(event) {

	// Go to the next video after the current one is finished playing

	if (event.data === 0) {

		$.fancybox.next();

	}

}

// The API will call this function when the page has finished downloading the JavaScript for the player API

function onYouTubePlayerAPIReady() {



	// Initialise the fancyBox after the DOM is loaded

	$(document).ready(function() {

		$(".fancybox")

		.attr('rel', 'gallery')

		.fancybox({

			openEffect: 'none',

			closeEffect: 'none',

			nextEffect: 'none',

			prevEffect: 'none',

			padding: 0,

			margin: 50,

			beforeShow: function() {

				// Find the iframe ID

				var id = $.fancybox.inner.find('iframe').attr('id');



				// Create video player object and add event listeners

				var player = new YT.Player(id, {

					events: {

						'onReady': onPlayerReady,

						'onStateChange': onPlayerStateChange

					}

				});

			}

		});



	});



}