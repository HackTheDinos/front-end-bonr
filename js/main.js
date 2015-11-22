var app = app || {};

app.main = (function() {

	// var render = function(template, containerElement, method, data){
	var render = function(template, containerElement, data){
		console.log(template + ' in ' + containerElement);
		if(data !== undefined){
			console.log(data);
		}

		var templateToCompile = $('#tpl-' + template).html();
		var compiled =  _.template(templateToCompile);

		// if(method === 'replace'){
		// 	$(containerElement).html(compiled({data: data}));	
		// }else if(method === 'append'){
		// 	$(containerElement).append(compiled({data: data}));
		// }
	}

	var profile = $('#profile-content');

	var attachEvents = function(){
		$('#no').click(function(){
			console.log("pan left");
			$('#profile-content').css('animationName', 'panleft').css('WebkitAnimationPlayState', 'running').css('animationPlayState', 'running');
		})
		$('#yes').click(function(){
			console.log("pan right");
			$('#profile-content').css('animationName', 'panright').css('WebkitAnimationPlayState', 'running').css('animationPlayState', 'running');
		})
	}

	var init = function(){
		attachEvents();
		render(profile, );
	};

	return {
		init: init,
	};

})();

window.addEventListener('DOMContentLoaded', app.main.init);

