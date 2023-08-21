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

	var countAllSlider = $(".slider_wrap_block_item").length;

	$(".slider_wrap_count_all").text(countAllSlider);

	$('.slider_wrap_block').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: false,
		centerMode: true,
		focusOnSelect: true,
		speed: 500,
		autoplay: true,
  		autoplaySpeed: 1500,
		prevArrow: $('.slider_wrap_prev'),
      	nextArrow: $('.slider_wrap_next'),
		responsive: [
			{
			  breakpoint: 767,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
				centerMode: true
			  }
			}
		]
	});

	$(".slider_wrap_block").on("afterChange", function(event, slick, currentSlide){
		$(".slider_wrap_count_current").text(parseInt(slick.currentSlide + 1));
	});

	$(".price_block_item").each(function() {
		var height = $(this).find(".price_block_item_table_row").eq(0).find(".price_block_item_table_row_item").eq(0).height();
		$(this).find(".price_block_item_table_row").each(function() {
		  $(this).find(".price_block_item_table_row_item").eq(0).height(height);
		});
	});

	var countAllCut = $(".cutting_section_block_slider_mob_slider_item").length;

	$(".cutting_section_block_slider_mob_btns_count_all").text(countAllCut);

	$('.cutting_section_block_slider_mob_slider').slick({
		dots: false,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		fade: true,
		prevArrow: $('.cutting_section_block_slider_mob_btns_prev'),
      	nextArrow: $('.cutting_section_block_slider_mob_btns_next')
	});

	$(".cutting_section_block_slider_mob_slider").on("afterChange", function(event, slick, currentSlide){
		$(".cutting_section_block_slider_mob_btns_count_change").text(parseInt(slick.currentSlide + 1));
	});

	
	
});