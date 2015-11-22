

var myElement = document.getElementById('profile-content');
var profileImage = document.getElementById('profile-content');

// create a simple instance
// by default, it only adds horizontal recognizers
var mc = new Hammer(myElement);

// listen to events...
mc.on("panleft panright tap press", function(ev) {
    //myElement.textContent = ev.type +" gesture detected.";

    if (ev.type == "panleft" || ev.type == "panright"){
    	profileImage.style.animationName = ev.type;
    	console.log(profileImage.style.WebkitAnimationPlayState);

		profileImage.style.WebkitAnimationPlayState = "running";
		// Standard syntax
		profileImage.style.animationPlayState = "running";
    }

});