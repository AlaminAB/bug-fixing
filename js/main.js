$(document).ready(function(){

	$("body").click(function( event ) {

		languageDropDown = $('#languages');
		languageDropDownDisplay = languageDropDown.css('display');

		if ( languageDropDownDisplay != 'none' && event.target.id != 'language' && event.target.id != 'language-icon' && event.target.id != 'languages') {
			languageDropDown.hide();
		}

		if ( event.target.id == 'language' ) {
			languageDropDown.toggle();
		}

	});

	$('#btn-menu').on('click',function() {
		
		position = $(".phone-menu").css("right");
		if(position == '-240px') {
		$(".phone-menu").css("right", "0");
		} else {
		$(".phone-menu").css("right", "-240px");
		}

	});

	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})

})