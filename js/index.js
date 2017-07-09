var swiper = new Swiper('#b01lunbo', {
				pagination: '.swiper-pagination',
				paginationClickable: true,
				loop: true,
				slidesPerView: 5,
				spaceBetween: 50,
				nextButton: '.swiper-button-next',
				prevButton: '.swiper-button-prev',
				breakpoints: {
					1024: {
						slidesPerView: 4,
						spaceBetween: 40
					},
					768: {
						slidesPerView: 3,
						spaceBetween: 30
					},
					640: {
						slidesPerView: 2,
						spaceBetween: 20
					},
					320: {
						slidesPerView: 1,
						spaceBetween: 10
					}
				}
			});
$(window).scroll(function(){
	var docTOP=$(document).scrollTop()
	if(docTOP>0)
	{
		$("nav").css({"position":"fixed","top":"0","left":"0","width":"100%","z-index":"20"});
		$("#carousel-example-generic").css({"margin-top":"60px"});
	}
})
$(".b03oneBottom .aniImg img").mouseenter(function(){
	$(this).removeClass("b03ani");
	$(this).css({"width":"100%","height":"100%"})	
})
$(".b03oneBottom .aniImg img").mouseleave(function(){
	$(this).addClass("b03ani");
	$(this).css({"width":"","height":""})	
})

