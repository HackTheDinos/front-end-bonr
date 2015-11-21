var app = app || {};

app.main = (function() {

	var render = function(template, containerElement, method, data){
		console.log(method + ' ' + template + ' in ' + containerElement);
		if(data !== undefined){
			console.log(data);
		}

		var templateToCompile = $('#tpl-' + template).html();
		var compiled =  _.template(templateToCompile);

		if(method === 'replace'){
			$(containerElement).html(compiled({data: data}));	
		}else if(method === 'append'){
			$(containerElement).append(compiled({data: data}));
		}


	var attachEvents = function(){
		//listening for clicks. 
	}

	var init = function(){
		attachEvents();
		render();
	};

	return {
		init: init,
	};

})();

window.addEventListener('DOMContentLoaded', app.main.init);

