var app = app || {};

app.main = (function() {


	var getProfile = function(obj){

		render('profile', '#main-container', obj);
		which ++;

		if (which > profileArray.length-1){
			which = 0;
		}

	}

	// var render = function(template, containerElement, method, data){
	var render = function(template, containerElement, data){
		console.log(template + ' in ' + containerElement);
		if(data !== undefined){
			console.log(data);
		}

		var templateToCompile = $('#tpl-' + template).html();
		var compiled =  _.template(templateToCompile);

		$(containerElement).html(compiled({data: data}));
		attachEvents();	
	}

	var profile = $('#profile-content');
	var vote = '';

	var attachEvents = function(){
		$('#no').click(function(){
			console.log("pan left");
			$('#profile-content').css('animationName', 'panleft').css('WebkitAnimationPlayState', 'running').css('animationPlayState', 'running');
			vote = "NO";
			render('vote-confirm', '#main-container', vote);
		})
		$('#yes').click(function(){
			console.log("pan right");
			$('#profile-content').css('animationName', 'panright').css('WebkitAnimationPlayState', 'running').css('animationPlayState', 'running');
			vote = "YES";
			render('vote-confirm', '#main-container', vote);
		})
		$('#next').click(function(){
			getProfile(profileArray[which]);
		})
	}

	var profileArray = [
		{image: ['./data/sample.jpg', './data/thumbSample.jpg', './data/thumbSample.jpg'],
		profileText: "This is profile number one"},
		{image: ['./data/sample.jpg', './data/thumbSample.jpg', './data/thumbSample.jpg'],
		profileText: "This is profile number two"},
		{image: ['./data/sample.jpg', './data/thumbSample.jpg', './data/thumbSample.jpg'],
		profileText: "This is profile number three"}
	]

	var which = 0;

	var init = function(){
		attachEvents();
		
		// $.get('/fossils', function(data){
		// 	console.log(data);
		// 	profiles = data;

			getProfile(profileArray[which]);

		// })
		
	};

	return {
		init: init,
	};

})();

window.addEventListener('DOMContentLoaded', app.main.init);

