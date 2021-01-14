/* --- scripts.js ------------------------ */

(function ($) {

	$(document).ready(function() {
		
		// Add anchor class
		$('ul.menu-standard a').addClass('anchor');
		
		// Remove href for each anchor that has children
		$('ul.menu-standard').each(function ()
		{
			if($(this).siblings('a').length > 0)
			{
				$(this).siblings('a').removeAttr('href');
				$(this).siblings('a').removeClass('anchor').addClass('hidden');
			}
		});
		
		// Hide all unordered lists and display the first.
		$('.taxonomy-tree-menu').each(function ()
		{
			$('ul', this).css( "display", "none" );
			$('ul', this).first().css( "display", "block" );
		});
		
		// Toggle of displayed menu items
		$('.menu-standard a').click(function()
		{
			if($(this).hasClass('hidden'))
			{
				$(this).parent('li').siblings('li').children('a.shown').siblings('ul').stop(true, true).slideUp();
				$(this).parent('li').siblings('li').children('a.shown').removeClass('shown').addClass('hidden');	
				$(this).removeClass('hidden').addClass('shown');
				$($(this).siblings('ul')).stop(true, true).slideDown()
			}
		});
				
	});
		
})(jQuery);