AFRAME.registerComponent('query-configurable', {
	init: function () {
		this.el.addEventListener('loaded', this.applyQueryParams.bind(this));
	},
	applyQueryParams: function () {
		var params = (location.search || '?').substring(1).split('&');
		params.forEach(function (param) {
			var parts = param.split('=');
			var name = parts[0];
			var val = parts[1];
			this.el.setAttribute(name, decodeURIComponent(val).replace(/,/g, ' ').replace('0x', '#'));
		}.bind(this));
	}
});
