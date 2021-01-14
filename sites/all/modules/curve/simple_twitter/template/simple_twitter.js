(function ($) {

	$(document).ready(function() {

		//var stBlock = '#block-simple-twitter-simple-twitter-hashtag-block .hash-data';
		var stBlock = '.page-curvecake #main-content .hash-data';
		var regenScript = '/sites/all/modules/curve/simple_twitter/update_output.php';

		// Define hashTimer() function
		function hashTimer() {
				
			// Set at 30 seconds.		
			$(stBlock).animate({
				opacity: 1
			}, 5000, function() {
				$.get(regenScript, function(data) {
					$(stBlock).html(data);
				});
				hashTimer();
			});
		}
		
		// Init hashTimer
		hashTimer()

		// Tweet Link
		!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="https://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");
		
		// Twitter popup 
	  $('.tweet-curvecake .link').click(function(e){
		 var new_win = window.open($(this).attr('href'), '', 'height=460,width=300');
		 if (window.focus) {
			 new_win.focus();
		 }
		 e.preventDefault();
	  });

	});
		
})(jQuery);