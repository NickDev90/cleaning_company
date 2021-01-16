$(function(){
	$('.burger').click(function (argument) {
		$('.burger,.menu').toggleClass('active'); 
		$('body').toggleClass('lock');
	});
	$('.menu').click(function(event) {
		$('.burger,.menu').removeClass('active');
		$('body').removeClass('lock');
	});
});


// The same on native Javascript:
 
// let liElements = document.querySelectorAll('.menu li');
// let menu = document.querySelector('.menu');
// let burger = document.querySelector('.burger');
// let body = document.querySelector('body');

// burger.onclick = () => {
// 	burger.classList.toggle('active');
// 	menu.classList.toggle('active');
// 	body.classList.toggle('lock');
// };

// liElements.forEach(function (li) {
// 	li.onclick = function () {
// 		burger.classList.remove('active');
// 		menu.classList.remove('active');
// 		body.classList.remove('lock');
// 	};
// });


	
