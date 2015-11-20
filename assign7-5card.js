$(document).ready(function(){

	
  $('.submit_btn').hover(function(){
    $(this).css('background-color', '#EA833A');
    }, 
    function() {
    $(this).css('background-color', '#CF6113');
  });
});

	$(document).on('click', '.submit_btn', function(){
	  var firstname = $('form').find(('.first_name')).val();
	  var lastname = $('form').find(('.last_name')).val();
	  var desc = $('form').find(('.desc')).val();

	  $('#cards').append('<div class="acard">' + firstname + ' ' + 
	  	lastname + '<p>Click for Description</p>' + '</div>');

	  
	 });






