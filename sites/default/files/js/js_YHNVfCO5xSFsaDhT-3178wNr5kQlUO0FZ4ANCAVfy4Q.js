/*
 *  Project: Scrolly : parallax is easy as a matter of fact !
 *  Description: Based on jQuery boilerplate
 *  Author: Victor C. / Octave & Octave web agency
 *  Licence: MIT
 */
(function ( $, window, document, undefined ) {
    // Create the defaults once
    var pluginName = 'scrolly',
        defaults = {
            bgParallax: false
        },
        didScroll = false;

    function Plugin( element, options ) {
        this.element = element;
        this.$element = $(this.element);

        this.options = $.extend( {}, defaults, options) ;
        
        this._defaults = defaults;
        this._name = pluginName;
        
        this.init();
    }

    Plugin.prototype.init = function () {
        var self = this;
        this.startPosition = this.$element.position().top;
        this.offsetTop = this.$element.offset().top;
        this.height = this.$element.outerHeight(true);
        this.velocity = this.$element.attr('data-velocity');
        this.bgStart = parseInt(this.$element.attr('data-fit'), 10);

        $(document).scroll(function(){
            self.didScroll = true;
        });
        
        setInterval(function() {
            if (self.didScroll) {
                self.didScroll = false;
                self.scrolly();
            }
        }, 10);
    };

    Plugin.prototype.scrolly = function() {
        var dT =  $(window).scrollTop(),
            wH = $(window).height(),
            position = this.startPosition;

        if(this.offsetTop >= (dT+wH)) {
            this.$element.addClass('scrolly-invisible');
        } else {
            if(this.$element.hasClass('scrolly-invisible')){
                position = this.startPosition + (dT + ( wH - this.offsetTop ) ) * this.velocity;
            } else {
                position = this.startPosition + dT  * this.velocity;
            }
        }
        // Fix background position
        if(this.bgStart){ position = position + this.bgStart; }

        if(this.options.bgParallax === true) {
            this.$element.css({backgroundPosition: '50% '+position+'px'});
        } else {
            this.$element.css({top: position});
        }
    };

    $.fn[pluginName] = function ( options ) {
        return this.each(function () {
            if (!$.data(this, 'plugin_' + pluginName)) {
                $.data(this, 'plugin_' + pluginName, new Plugin( this, options ));
            }
        });
    };

})(jQuery, window, document);
;
/* ======================== */
/* --- scripts.js --------- */
/* ------------------------ */

(function ($) {

	$(document).ready(function() {

		/* --- PARALLAX --- */
		$('.parallax').scrolly({bgParallax: true});

		$(window).load(function() {
			winResized();
		}).bind('resize',function() {
			winResized();
		});

		/* --- FRONT HEADER -- */
    $('#header').addClass('header--large');
    $(window).scroll(function() {  
    	if($('body').hasClass('front') && $(window).width() > 720){  
        if($(document).scrollTop() > 0) {
          $('#header').removeClass('header--large');
        } else {
        	$('#header').addClass('header--large');
        }
    	}
    	/*
      var speed = 400;
      if($('body').hasClass('front') && $(window).width() > 720){   
        if($(document).scrollTop() > 0) {
          if($('#header').data('size') == 'big') {
            $('#header').data('size','small');
            $('#header').stop().animate({ height:'60px' },200);
            $('#header').css({ "background-color":"rgba(0,0,0,1)" });
            $('#logo-container img').stop().animate({ 'max-width':'132px', 'margin-top':'5px' },speed);
            $('#navigation ul.menu').stop().animate({ 'padding-top':'8px' },speed);  
            $('#navigation ul.menu li a').stop().animate({ 'font-size':'16px' },speed);  
            $('#navigation').stop().animate({ 'margin-top':'10px' },speed);
          }
        } else {
          if($('#header').data('size') == 'small') {
            $('#header').data('size','big');
            $('#header').stop().animate({ height:'170px' },100);
            $('#header').css({ "background-color"    : "rgba(0,0,0,0)" });
            $('#logo-container img').stop().animate({ 'max-width':'240px', 'margin-top':'85px' },speed);
            $('#navigation ul.menu').stop().animate({ 'padding-top':'97px' },speed);  
            $('#navigation ul.menu li a').stop().animate({ 'font-size':'20px' },speed);
            $('#navigation').stop().animate({ 'margin-top':'10px' },speed); 
          }
        }
      }
      */
    });  




		/* --- ARROW SCROLL ON HOME PAGE ---*/
		$('a[href*=#]:not([href=#])').click(function() {
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
				if (target.length) {
					$('html,body').animate({ scrollTop: target.offset().top }, 800);
					return false;
				}
			}
		});


		/* --- MOBILE MENU --- */
		$( '#menu-toggle a' ).click( function(e) {
			if ( $( 'body' ).hasClass( 'menu-expanded' ) ) {
				$( 'body' ).removeClass( 'menu-expanded' );
				$( this ).removeClass( 'active' );
			} else {
				$( 'body' ).addClass( 'menu-expanded' );
				$( this ).addClass( 'active' );
			}
			e.preventDefault();
		});


		/* --- MOBILE MENU SHADOW --- */
		$( '.shadow-curtain' ).click( function(e) {
			$( 'body' ).removeClass( 'menu-expanded' );
			$( this ).removeClass( 'active' );
			e.preventDefault();
		});


    /* --- EQUALHEIGHTS --- */
		equalheight = function(container) {
			var currentTallest = 0,
			currentRowStart = 0,
			rowDivs = new Array(),
			$el,
			topPosition = 0;
			$(container).each(function() {
				$el = $(this);
				$($el).height('auto')
				topPostion = $el.position().top;
				if (currentRowStart != topPostion) {
					for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
						rowDivs[currentDiv].height(currentTallest);
					}
					rowDivs.length = 0; // empty the array
					currentRowStart = topPostion;
					currentTallest = $el.height();
					rowDivs.push($el);
				} else {
					rowDivs.push($el);
					currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
				}
				for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
					rowDivs[currentDiv].height(currentTallest);
				}
			});
		}


    /* --- EQUAL HEIGHTS ON CONTAINER --- */
		$(window).load(function() {
			equalheight('.equalheights .grid-equal');
		});


    /* --- RESPONSIVE EQUALHEIGHTS --- */
		$(window).resize(function(){
			equalheight('.equalheights .grid-equal');
		});


});


function winResized() {
		$('.front .field-name-body, .parallax').css('height', jQuery(window).height());
		if (jQuery(window).height() <= 700) {
			$('.parallax--wrapper').addClass('heightHide');
		} else {
			$('.parallax--wrapper').removeClass('heightHide');
		}
	}

} )(jQuery);
;
