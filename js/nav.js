document.querySelector( "#nav-toggle" ).addEventListener( "click", function() {
    this.classList.toggle( "active" );
  });

  $("#nav-toggle").click(function togglemenu() {
    console.log("running");
    $('.dropdownmenu').toggleClass("menudropped");
});