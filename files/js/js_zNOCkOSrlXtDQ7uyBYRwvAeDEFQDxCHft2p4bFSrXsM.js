var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

// Sticky Plugin v1.0.0 for jQuery
// =============
// Author: Anthony Garand
// Improvements by German M. Bravo (Kronuz) and Ruud Kamphuis (ruudk)
// Improvements by Leonardo C. Daronco (daronco)
// Created: 2/14/2011
// Date: 2/12/2012
// Website: http://labs.anthonygarand.com/sticky
// Description: Makes an element on the page stick on the screen as you scroll
//       It will only set the 'top' and 'position' of your element, you
//       might need to adjust the width in some cases.

(function($) {
  var defaults = {
      topSpacing: 0,
      bottomSpacing: 0,
      className: 'is-sticky',
      wrapperClassName: 'sticky-wrapper',
      center: false,
      getWidthFrom: ''
    },
    $window = $(window),
    $document = $(document),
    sticked = [],
    windowHeight = $window.height(),
    scroller = function() {
      var scrollTop = $window.scrollTop(),
        documentHeight = $document.height(),
        dwh = documentHeight - windowHeight,
        extra = (scrollTop > dwh) ? dwh - scrollTop : 0;

      for (var i = 0; i < sticked.length; i++) {
        var s = sticked[i],
          elementTop = s.stickyWrapper.offset().top,
          etse = elementTop - s.topSpacing - extra;

        if (scrollTop <= etse) {
          if (s.currentTop !== null) {
            s.stickyElement
              .css('position', '')
              .css('top', '');
            s.stickyElement.parent().removeClass(s.className);
            s.currentTop = null;
          }
        }
        else {
          var newTop = documentHeight - s.stickyElement.outerHeight()
            - s.topSpacing - s.bottomSpacing - scrollTop - extra;
          if (newTop < 0) {
            newTop = newTop + s.topSpacing;
          } else {
            newTop = s.topSpacing;
          }
          if (s.currentTop != newTop) {
            s.stickyElement
              .css('position', 'fixed')
              .css('top', newTop);

            if (typeof s.getWidthFrom !== 'undefined') {
              s.stickyElement.css('width', $(s.getWidthFrom).width());
            }

            s.stickyElement.parent().addClass(s.className);
            s.currentTop = newTop;
          }
        }
      }
    },
    resizer = function() {
      windowHeight = $window.height();
    },
    methods = {
      init: function(options) {
        var o = $.extend(defaults, options);
        return this.each(function() {
          var stickyElement = $(this);

          stickyId = stickyElement.attr('id');
          wrapper = $('<div></div>')
            .attr('id', stickyId + '-sticky-wrapper')
            .addClass(o.wrapperClassName);
          stickyElement.wrapAll(wrapper);

          if (o.center) {
            stickyElement.parent().css({width:stickyElement.outerWidth(),marginLeft:"auto",marginRight:"auto"});
          }

          if (stickyElement.css("float") == "right") {
            stickyElement.css({"float":"none"}).parent().css({"float":"right"});
          }

          var stickyWrapper = stickyElement.parent();
          stickyWrapper.css('height', stickyElement.outerHeight());
          sticked.push({
            topSpacing: o.topSpacing,
            bottomSpacing: o.bottomSpacing,
            stickyElement: stickyElement,
            currentTop: null,
            stickyWrapper: stickyWrapper,
            className: o.className,
            getWidthFrom: o.getWidthFrom
          });
        });
      },
      update: scroller
    };

  // should be more efficient than using $window.scroll(scroller) and $window.resize(resizer):
  if (window.addEventListener) {
    window.addEventListener('scroll', scroller, false);
    window.addEventListener('resize', resizer, false);
  } else if (window.attachEvent) {
    window.attachEvent('onscroll', scroller);
    window.attachEvent('onresize', resizer);
  }

  $.fn.sticky = function(method) {
    if (methods[method]) {
      return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
    } else if (typeof method === 'object' || !method ) {
      return methods.init.apply( this, arguments );
    } else {
      $.error('Method ' + method + ' does not exist on jQuery.sticky');
    }
  };
  $(function() {
    setTimeout(scroller, 0);
  });
})(jQuery);
;
/* ======================== */
/* --- scripts.js --------- */
/* ------------------------ */

(function ($) {
   
	$(document).ready(function() {

		// $(".navigation-container").sticky({topSpacing:0});
		
		// var menuPadding = parseInt($( '#header-inner' ).css( 'padding-top' ).replace( "px","" ));
		// var menuSpeed = 333;

		$( '#menu-toggle a' ).click( function(e) {	
			if ( $( '#header' ).hasClass( 'menu-expanded' ) ) {
				// $( '#header-inner' ).stop(true, true).animate( { paddingTop: menuPadding }, menuSpeed, function() {} );
				// $( '#navigation' ).stop(true, true).slideUp( menuSpeed );
				$( '#header' ).removeClass( 'menu-expanded' );
				$( this ).removeClass( 'active' );
			} else {
				// $( '#header-inner' ).stop(true, true).animate( { paddingTop: menuPadding + $( '#navigation' ).height() }, menuSpeed, function() {} );
				// $( '#navigation' ).stop(true, true).slideDown( menuSpeed );
				$( '#header' ).addClass( 'menu-expanded' );
				$( this ).addClass( 'active' );
			}
			
			e.preventDefault();
		});
		
		detector = $('body');
		compareWidth = detector.width();
	
		$(window).resize(function() {
		
			if(detector.width() != compareWidth) {
				compareWidth = detector.width();
				elementCheck();
			}
		
		});
	
		function elementCheck() {
			if (detector.width() > 720){
				if ( $( '#header' ).hasClass( 'menu-expanded' ) ) {
          $( '#header' ).removeClass( 'menu-expanded' );
        }
        if ($( 'body' ).hasClass('node-type-case-study')) {
          if ($( '#case-study-tabs' ).length > 0 ) {
            removeCaseStudyTabs()
          }
        }
			} else if (detector.width() < 720){
        if ($( 'body' ).hasClass('node-type-case-study')) {
          if ($( '#case-study-tabs' ).length == 0 ) {
            addCaseStudyTabs(); 
          }
        }
      }
		}
		
		elementCheck();
		
		if ($( '#budget-slider').length > 0 ) {
      $("#budget-slider").slider({
        value:0,
        min: 0,
        max: 75000,
        step: 5000,
        slide: function(event, ui) {
          $("#edit-submitted-general-information-your-new-site-budget-ex-vat").val(ui.value);
          if (ui.value == 0) { $('#budget-amount').html("Don't know / No Set Budget"); } else { $('#budget-amount').html('£' + addCommas(ui.value)); }
        }
      });
      
      $('#budget-amount').html("Don't know / No Set Budget");
    }
		
		function addCommas(nStr) {
			nStr += '';
			x = nStr.split('.');
			x1 = x[0];
			x2 = x.length > 1 ? '.' + x[1] : '';
			var rgx = /(\d+)(\d{3})/;
			while (rgx.test(x1)) {
				x1 = x1.replace(rgx, '$1' + ',' + '$2');
			}
			return x1 + x2;
		}
    function addCaseStudyTabs() {
      $( '.block-case-study-header' ).after( '<div id="case-study-tabs"><ul class="tabs clearfix"></ul></div>' );
      
      $( '.block-case-study-section' ).each( function(index) {
        if (index != 0) {
          $( this ).hide(0); 
          activeClass = ''
        } else {
          activeClass = ' active';
        }
        $( '#case-study-tabs ul' ).append( '<li class="tab-' + index + activeClass +'"><span>' + $( ".view-header h2", this ).html() + '</span></li>'  );
      })
      
      $( '#case-study-tabs ul li' ).click( function(e) {
        $( '.block-case-study-section' ).hide(0);
        $( '#case-study-tabs ul li' ).removeClass('active');
        $( this ).addClass('active');
        $( '.block-case-study-section-' + $(this).index() ).show(0);
        e.preventDefault();
      });
    }
    
    function removeCaseStudyTabs() {
       $( '#case-study-tabs' ).remove();
       $( '.block-case-study-section' ).each( function() {
        $( this ).show(0); 
       });
    }

});

} )(jQuery);;


}
/*
     FILE ARCHIVED ON 06:12:20 Feb 08, 2014 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 00:47:32 Jan 13, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 119.131
  exclusion.robots: 0.151
  exclusion.robots.policy: 0.145
  RedisCDXSource: 2.046
  esindex: 0.007
  LoadShardBlock: 100.364 (3)
  PetaboxLoader3.datanode: 81.0 (5)
  CDXLines.iter: 15.023 (3)
  PetaboxLoader3.resolve: 131.732 (3)
  load_resource: 186.767 (2)
*/