
$(document).on('click', '.submit_btn', function(){
  var firstname = $('.first_name').val();
  var lastname = $('.last_name').val();
  var name = firstname + ' ' + lastname;
  
  $('#cards').append('<div class="acard">' + name + '<p>Click for Description</p>' + '</div>');

});

$(document).on('click', '.acard', function(){
	var firstname = $('.first_name').val();
	var lastname = $('.last_name').val();
	var name = firstname + ' ' + lastname;
	var desc = $('.desc').val();


	if ($(this).html() == name + '<p>Click for Description</p>') 
	{ 
	 $(this).html(desc); 
	} 
	else 
	{ 
	 $(this).html(name + '<p>Click for Description</p>'); 
	};
  
});


$(document).ready(function(){
  $('.submit_btn').hover(function(){
    $(this).css('background-color', '#EA833A');
    }, 
    function() {
    $(this).css('background-color', '#CF6113');
  });
});


