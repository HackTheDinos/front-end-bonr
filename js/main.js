var app = app || {};

app.main = (function() {

	var attachEvents = function(){
		//listening for clicks. 
	}

	var init = function(){
		attachEvents();
	};

	return {
		init: init,
	};

})();

window.addEventListener('DOMContentLoaded', app.main.init);

