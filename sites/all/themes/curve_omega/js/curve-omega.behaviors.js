(function ($) {

  /**
   * The recommended way for producing HTML markup through JavaScript is to write
   * theming functions. These are similiar to the theming functions that you might
   * know from 'phptemplate' (the default PHP templating engine used by most
   * Drupal themes including Omega). JavaScript theme functions accept arguments
   * and can be overriden by sub-themes.
   *
   * In most cases, there is no good reason to NOT wrap your markup producing
   * JavaScript in a theme function.
   */

  /**
   * Behaviors are Drupal's way of applying JavaScript to a page. In short, the
   * advantage of Behaviors over a simple 'document.ready()' lies in how it
   * interacts with content loaded through Ajax. Opposed to the
   * 'document.ready()' event which is only fired once when the page is
   * initially loaded, behaviors get re-executed whenever something is added to
   * the page through Ajax.
   *
   * You can attach as many behaviors as you wish. In fact, instead of overloading
   * a single behavior with multiple, completely unrelated tasks you should create
   * a separate behavior for every separate task.
   *
   * In most cases, there is no good reason to NOT wrap your JavaScript code in a
   * behavior.
   *
   * @param context
   *   The context for which the behavior is being executed. This is either the
   *   full page or a piece of HTML that was just added through Ajax.
   * @param settings
   *   An array of settings (added through drupal_add_js()). Instead of accessing
   *   Drupal.settings directly you should use this because of potential
   *   modifications made by the Ajax callback that also produced 'context'.
   */


  Drupal.behaviors.curveOmegamatchviewportheight = {
    attach: function (context, settings) {

      last_time_2 = +new Date();
      viewportTop = $(window).scrollTop();
      windowHeight = $(window).height();
      viewportBottom = windowHeight+viewportTop;

      if($('.parallax').length) {
        // Set the parallax container to the height of the viewport
        $('.parallax, .parallax--blur').height($(window).height());

        // Make sure the content below the parallax has been pushed down the page
        if($(window).width() <= 600 ) {
          $('#main-content').height($(window).height());
        } else {
          $('#main-content').height($(window).height()  - 50);
        }

        // Init the parallax

        function is_touch_device() {
          return 'ontouchstart' in window // works on most browsers
              || 'onmsgesturechange' in window; // works on ie10
        }

        function scrollEvent( event ){

          var now = +new Date();

          if(!is_touch_device()){
            viewportTop = $(window).scrollTop();
            windowHeight = $(window).height();
            viewportBottom = windowHeight+viewportTop;

            if($(window).width() >= 600 && viewportTop <= windowHeight ) {

              $('[data-parallax="true"]').each(function () {
                distance = viewportTop * $(this).attr('data-speed');
                if ($(this).attr('data-direction') === 'up') {
                  sym = '-';
                } else {
                  sym = '';
                }
                $(this).css('transform', 'translate3d(0, ' + sym + distance + 'px,0)');
              });

              $('[data-blur="true"]').each(function () {
                distance = 100 / windowHeight * viewportTop / 100 * 4;
                $(this).css('opacity', distance);
              });

              $('.parallax__wrapper').each(function () {
                distance = 1 - (100 / windowHeight * viewportTop / 100 * 2);
                $(this).css('opacity', distance);
                if (distance <= 0){
                  $(this).css('display', 'none');
                } else {
                  $(this).css('display', 'block');
                }
              });

              $('[data-push-left="true"]').each(function () {
                distance = 100 / windowHeight * viewportTop * 10;
                $(this).css('left', distance);
              });
              $('[data-push-right="true"]').each(function () {
                distance = 100 / windowHeight * viewportTop * 10 ;
                $(this).css('right', distance);
              });
            } else {

              // Reset everything if turned off
              $('[data-push-left="true"]').each(function () {
                distance = 100 / windowHeight * viewportTop * 10;
                $(this).css('left', 'auto');
              });
              $('[data-push-right="true"]').each(function () {
                distance = 100 / windowHeight * viewportTop * 10 ;
                $(this).css('right', 'auto');
              });

              $('.parallax__wrapper').each(function () {
                $(this).css('opacity', '1');
                $(this).css('display', 'block');
              });

              $('[data-parallax="true"]').each(function () {
                $(this).css('transform', 'none');
              });

            }

          }
          last_time_2 = now;

        }

        function draw() {
          requestAnimationFrame(draw);
          // Drawing code goes here
          scrollEvent();
        }

        $(window).scroll( $.throttle( 2000, draw ) );






        // On window resize update the parallax container
        $(window).resize(function() {
          $('.parallax, .parallax--blur').height($(window).height());

          if($(window).width() <= 600 ) {
            $('#main-content').height($(window).height());
          } else {
            $('#main-content').height($(window).height()  - 50);
          }
        });
      }
    }
  };

  Drupal.behaviors.curveOmegaMatchHeights = {
    attach: function (context, settings) {
      $('.case-study').matchHeight();
      $('.blog-article').matchHeight();
      $('.view-mode-summary_card').matchHeight();
    }
  };

  Drupal.behaviors.curveOmegaLockscreen = {
    attach: function (context, settings) {

      $('#drawer-toggle').change(function(){
        if($('#drawer-toggle').is( ':checked' )){
          $('#page-wrapper').addClass('open');
        } else {
          $('#page-wrapper').removeClass('open');
        }
      })
    }
  }


})(jQuery);
