(function($){

	function RoughCover(el, options) {

		//Defaults:
		this.defaults = {
		};

		//Extending options:
		this.opts = $.extend({}, this.defaults, options);

		//Privates:
		this.$el = $(el);
	}

	// Separate functionality from object creation
	RoughCover.prototype = {

		init: function() {
			var _this = this;

			// Only run if there's no support for background-size
			if (!Modernizr.backgroundsize) {
				_this.fallback();
			}
		},

		fallback: function(element){
			var _this = this;

			// Get current header background image
			var currentBackground = this.$el.css('backgroundImage') + "";
			// … and remove url() stuff so we only have the clean URL
			currentBackground = currentBackground.substr(4, currentBackground.length -5);

			// Insert fallback image and hide the original, non-supported one
			var fallbackHTML = "<div class='Cover-fallback'><img class='Cover-fallbackImage' src=" + currentBackground + "></div>";
			this.$el.prepend(fallbackHTML).css({
				'background-image': 'none'
			});

			// Center it on load and resize
			$(window).on('load resize', function() {
				_this.center();
			});
		},

		center: function(element) {
			var $fallbackImage = this.$el.find('.Cover-fallbackImage');

			var overflowY = ( ($fallbackImage.height() - this.$el.outerHeight()) / 2 ) * -1;
			var overflowX = ( ($fallbackImage.width() - this.$el.width()) / 2 ) * -1;
			$fallbackImage.css({
				'margin-top': overflowY+'px',
				'margin-left': overflowX+'px'
			});
		}

	};

	// The actual plugin
	$.fn.roughCover = function(options) {
		if(this.length) {
			this.each(function() {
				var rev = new RoughCover(this, options);
				rev.init();
				$(this).data('roughCover', rev);
			});
		}
	};
})(jQuery);