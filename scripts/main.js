'use strict';

// Trash
let priceButton = document.querySelector('.pricing-table-item__button');

priceButton.addEventListener('click', function (e) {
	e.preventDefault();
});
// Cool story Bob

// Team-member-card click - change info
let card = $('.team-member');
card.click(function () {
	let target = $(this).attr('data-target');
	$('.team-member_info').hide();
	$('.' + target).show();
});

// Scroll - animate numbers
let numberFlag = true;
$(window).on('scroll', function () {
	
	if (!numberFlag) return false;

	const heightToNumbers = -200;
	let windowHeight = $(window).height();
	let windowTop = $(window).scrollTop();
	let sectionTop = $('.stats').offset().top;

	let totalScroll = windowHeight + windowTop + heightToNumbers;

	if (totalScroll > sectionTop) {
		$('.stats-element__number').spincrement({
			thousandSeparator: ',',
			duration: 1800
		});
		numberFlag = false;
	}
});