$(document).ready(function () {
    "use strict";

	$(".footer_block_mid_column_item h5").click(function() {
		$(this).parent().find("ul").slideToggle();
		$(this).toggleClass("active");
	});

	$(".dropdown_mid_column_item h5").click(function() {
		$(this).parent().find("ul").slideToggle();
		$(this).toggleClass("active");
	});

	$(".header_block_right_btn").click(function() {
		$(".back_modal").addClass("active");
		$(".dropdown").addClass("active");
		$("body").addClass("scroll");
	});

	$('input[type="tel"]').inputmask("+7(999)999-99-99");

	$(".show_modal").click(function() {
		$(".back_modal").addClass("active");
		$(".modal_form").addClass("active");
		$(".dropdown").removeClass("active");
		$("body").addClass("scroll");
	});

	$(".back_modal").click(function() {
		$(this).removeClass("active");
		$(".modal_form").removeClass("active");
		$(".dropdown").removeClass("active");
		$("body").removeClass("scroll");
	});

	$(".dropdown_top_close").click(function() {
		$(".back_modal").removeClass("active");
		$(".dropdown").removeClass("active");
		$("body").removeClass("scroll");
	});

	$(".modal_form_close").click(function() {
		$(".back_modal").removeClass("active");
		$(".modal_form").removeClass("active");
		$("body").removeClass("scroll");
	});

	$(".modal_form_top_close").click(function() {
		$(".back_modal").removeClass("active");
		$(".modal_form").removeClass("active");
		$("body").removeClass("scroll");
	});

	
});