// JavaScript Document
 jQuery(document).ready(function(){
	 var swiper = new Swiper('.swiper-container', {
      slidesPerView: 3,
      spaceBetween: 30,
      centeredSlides: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
	  loop : true,
	  autoplay: {
		delay: 5000,
	  },		
    });
 });