var app = app || {};

app.main = (function() {


	var getProfile = function(obj){
		console.log(obj.description);

		render('profile', '#main-container', obj);
		which ++;

		if (which > profileArray.length-1){
			which = 0;
		}

	}

	// var sendVote = function(fossilId, bool){
	// 	$.ajax({
	// 	    contentType: 'application/json',
	// 	    data: JSON.stringify({
	// 	        "vote": bool
	// 	    }),
	// 	    dataType: 'json',
	// 	    success: function(data){
	// 	        console.log("device control succeeded");
	// 	    },
	// 	    error: function(){
	// 	        console.log("Device control failed");
	// 	    },
	// 	    processData: false,
	// 	    type: 'POST',
	// 	    url: 'http://localhost:8080/fossils/' + fossilId + '/votes'
	// 	});
	// }

	// var render = function(template, containerElement, method, data){
	var render = function(template, containerElement, data){
		// console.log(template + ' in ' + containerElement);
		if(data !== undefined){
			console.log(data);
		}

		var templateToCompile = $('#tpl-' + template).html();
		var compiled =  _.template(templateToCompile);

		$(containerElement).html(compiled({data: data}));
		attachEvents();
		$('#main-container').fadeIn();
		// listenforSwipe();	
	}

	var profile = $('#profile-content');
	var vote = '';

	// var listenforSwipe = function(){
	// 	var myElement = document.getElementById('profile-content');

	// 	var mc = new Hammer(myElement);

	// 	// listen to events...
	// 	mc.on("panleft panright tap press", function(ev) {
	// 	    //myElement.textContent = ev.type +" gesture detected.";

	// 	    if (ev.type == "panleft"){
	// 			profileImage.style.animationName = ev.type;
	// 	    	console.log(profileImage.style.WebkitAnimationPlayState);
	// 			profileImage.style.WebkitAnimationPlayState = "running";
	// 			profileImage.style.animationPlayState = "running";
	// 			vote = "NO";
	// 			render('vote-confirm', '#main-container', vote);
	// 	    } else if (ev.type == "panright"){
	// 	    	profileImage.style.animationName = ev.type;
	// 	    	console.log(profileImage.style.WebkitAnimationPlayState);
	// 			profileImage.style.WebkitAnimationPlayState = "running";
	// 			profileImage.style.animationPlayState = "running";
	// 			vote = "YES";
	// 			render('vote-confirm', '#main-container', vote);
	// 	    } else {
	// 	    	profileImage.style.animationName = ev.type;
	// 	    }
	// 	});
	// }

	var attachEvents = function(){
		// listenforSwipe();

		$('#no').click(function(){
			console.log("pan left");
			vote = "NO";
			$('#profile').addClass('animation');

			$('.animation').css({'animationName': 'panleft', 'WebkitAnimationPlayState': 'running', 'animationPlayState': 'running'})
						   .delay(600)
						   .queue(function(){
						   		// console.log("done");
						   		$('#main-container').css('display', 'none');
						   		render('vote-confirm', '#main-container', vote);
						   });
		});

		$('#yes').click(function(){
			console.log("pan left");
			vote = "YES";
			$('#profile').addClass('animation');

			$('.animation').css({'animationName': 'panright', 'WebkitAnimationPlayState': 'running', 'animationPlayState': 'running'})
						   .delay(600)
						   .queue(function(){
						   		// console.log("done");
						   		$('#main-container').css('display', 'none');
						   		render('vote-confirm', '#main-container', vote);
						   });
		});

		//wait for animation to end then render next screen
		// $('#profile-content').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',   
		// 	function(e) {
		// 		console.log("done");
		//     	// render('vote-confirm', '#main-container', vote);
		// 	}
		// );
			// render('vote-confirm', '#main-container', vote);
		$('#next').click(function(){
			$('#main-container').css('display', 'none');
			getProfile(profileArray[which]);
		})
	}

	var profileArray = [
		{image: ['./data/imgs/12a_Y.jpg', './data/imgs/12b_Y.jpg', './data/imgs/12c_Y.jpg'],
		profileText: "Hey Carl! I definitely found a super valuable fossil. It's like, a sabertooth bone or something I bet. Please tell me I struck it rich, my man! #Sabertooths4Ever"},
		{image: ['./data/imgs/21a_N.jpg', './data/imgs/21b_N.jpg', './data/imgs/21c_N.jpg'],
		profileText: "Hey Carl, this morning I tripped on something strange in my backyard and after digging into the ground I found an abnormally shaped rock. It had a weird texture, and a mild pungent smell, and it kind of resembles a big sea shell. What does this look like to you? Love, Stan."},
		{image: ['./data/imgs/3a_Y.jpg', './data/imgs/3b_Y.jpg', './data/imgs/3c_Y.jpg'],
		profileText: "Dear Carl, I went on a hike in the mountains near my house and when I was in this cave, I found a rock that I kind of think looks like a tooth. Do you think that this is a from a dino??"}
	];

	var which = 0;

	var server = "http://localhost:8080/"

	var init = function(){
		attachEvents();
		console.log("initializing..");
		

		$.get('http://localhost:8080/fossils', function(data){
			console.log("data " + data);
			// profileArray = data;
			getProfile(profileArray[which]);

		});

		// $.get('http://localhost:8080/fossils/1/votes', function(data){
		// 	console.log(data);
		// 	// profiles = data;


		// });

		// sendVote(1, true);

		
	};

	return {
		init: init,
	};

})();

window.addEventListener('DOMContentLoaded', app.main.init);

