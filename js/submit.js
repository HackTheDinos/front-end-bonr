var app = app || {};

var files = [];

// var server = 'http://10.20.64.78:8080';
var server = 'http://hack.jimsaunders.net';
// var server = 'http://localhost:8080';

var submitFossil = function(id) {
  console.log('submitting fossil with image ' + id);
  var formdata = _.object($("#add-fossil-form").serializeArray().map(function(v) {return [v.name, v.value];} ));
  var payload = new FormData();
  payload.append('pictures', [id]);
  // payload.append('submissionDate', formdata['date']);
  payload.append('description', formdata['comments']);
  payload = {
    pictures: [id],
    // submissionDate: new Date(formdata['date']).toISOString().substring(0, 10),
    description: formdata['comments'],
  };
  console.log(payload);
  $.ajax({
      type: 'POST',
      url: server + '/fossils',
      data: JSON.stringify(payload),
      processData: false,
      contentType: 'application/json',
      success: function(response) {
        console.log('fossil submitted');
        window.location = '../front-end-bonr/confirm.html';
      },
      error: function(response) {
        console.log('error');
        console.log(response);
        window.location = '../front-end-bonr/confirm.html';
      }
    });
};

app.main = (function() {
  var render = function(template, containerElement, data){

  }

  var profile = $('#profile-content');

  var attachEvents = function(){
    $('#add-fossil-form').submit(function(){
      console.log("submitting form");

      // No picture -- don't do anything.
      if (window.files.length < 1) {
        return false;
      }

      // Upload the picture
      console.log(window.files[0]);
      var payload = new FormData();
      payload.append('picture', window.files[0]);
      console.log(payload);

      $.ajax({
          type: 'POST',
          url: server + '/pictures',
          data: payload,
          processData: false,
          contentType: false,
          success: function(response) {
            console.log('image uploaded successfully!');
            // submit the fossil with the image id
            submitFossil(response.id);
          },
          error: function(response) {
            console.log('error');
            console.log(response);
          }
        });
      return false;
    }),

    $('#file').on('change', function(event) {
      console.log('on change');
      files = event.target.files;
    });
  }

  var init = function(){
    attachEvents();
  };

  return {
    init: init,
  };

})();

window.addEventListener('DOMContentLoaded', app.main.init);

