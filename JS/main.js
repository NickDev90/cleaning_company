$(function(){
	$('.burger').click(function (argument) {
		$('.burger,.menu').toggleClass('active'); 
		$('body').toggleClass('lock');
	});
});
 