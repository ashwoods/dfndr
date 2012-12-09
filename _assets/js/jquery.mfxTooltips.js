(function($) {
	$.fn.mfxTooltips = function(options) {
		// Merge the default options with the user specified options
		var o = $.extend({
			html: '<div class="mfx_tooltip mfx_tooltip_content"></div>'
		}, options);
		
		$(this).each(function() {
			var $this = $(this);
			
			// On hover we show the tooltip and position it
			$this.hover(function(event) {
				var leftOffset = 0;
				
				$('body').append(o.html);
				$('.mfx_tooltip').find('.content').html($this.attr('data-tooltip'));
				$('.mfx_tooltip').find('.arrow').css('left', String($('.mfx_tooltip').width() / 2 - 6) + 'px');
				
				if ($this.attr('data-alignment') == 'left') {
					leftOffset = $this.offset().left;
				} else if ($this.attr('data-alignment') == 'center') {
					leftOffset = $this.offset().left - ($('.mfx_tooltip').width() / 2 - 6);
				} else if ($this.attr('data-alignment') == 'right') {
					leftOffset = ($this.offset().left + $this.width()) - ($('.mfx_tooltip').width() / 2 - 6);
				} else {
					// Default is center
					leftOffset = $this.offset().left - ($('.mfx_tooltip').width() / 2 - 6);
				}
				
				$('.mfx_tooltip').stop(true, true).css({
					left: leftOffset,
					top: $this.offset().top + $this.height() + 5
				}).fadeIn(150);
				
			}, function(event) {
				$('.mfx_tooltip').stop(true, true).fadeOut(150, function() {
					$(this).remove();
				});
			});
		});
	}
})(jQuery);
