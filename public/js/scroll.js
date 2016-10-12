var js = {};
! function($) {
	$.fn.exists = function() {
		return $(this).length > 0
	}, js.model = {
		events: {},
		extend: function(e) {
			var t = $.extend({}, this, e);
			return $.each(t.events, function(e, i) {
				t._add_event(e, i)
			}), t
		},
		_add_event: function(e, t) {
			var i = this,
				s = e,
				a = "",
				o = document;
			e.indexOf(" ") > 0 && (s = e.substr(0, e.indexOf(" ")), a = e.substr(e.indexOf(" ") + 1)), "resize" != s && "scroll" != s || (o = window), $(o).on(s, a, function(e) {
				e.$el = $(this), "function" == typeof i.event && (e = i.event(e)), i[t].apply(i, [e])
			})
		}
	},  js.header = js.model.extend({
		$header: null,
		$sub_header: null,
		active: 0,
		hover: 0,
		show: 0,
		y: 0,
		opacity: 1,
		direction: "down",
		events: {
			ready: "ready",
			scroll: "scroll",
			"mouseenter #header": "mouseenter",
			"mouseleave #header": "mouseleave"
		},
		ready: function() {
			this.$header = $("#header"), this.$sub_header = $("#sub-header"), this.active = 1
		},
		mouseenter: function() {
			var e = $(window).scrollTop();
			this.hover = 1, this.opacity = 1, this.show = e, this.$header.stop().animate({
				opacity: 1
			}, 0)
		},
		mouseleave: function() {
			this.hover = 0
		},
		scroll: function() {
			if(this.active) {
				var e = $(window).scrollTop(),
					t = e >= this.y ? "down" : "up",
					i = t !== this.direction,
					s = e - this.y,
					a = this.$sub_header.outerHeight();
				clearTimeout(this.t), 300 > e && this.$header.removeClass("-white "), i && (0 == this.opacity && "up" == t ? (this.show = e, a > e ? 
					this.show = 0 : this.show -= 0) : 1 == this.opacity && "down" == t && (this.show = e), this.show = Math.max(0, this.show)), 
				this.$header.hasClass("-open") && (this.show = e), this.hover && (this.show = e);
				var o = e - this.show;
				o = Math.max(0, o), o = Math.min(o, 1);
				var n = (1 - o) / 1;
				// var n = 0;
				this.$header.css("opacity", n), e > a ? this.$header.addClass("-white ") : 0 == n && this.$header.removeClass("-white "), 
				this.y = e, this.direction = t, this.opacity = n
			}
		}
	})
}(jQuery);