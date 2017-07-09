function bannerListFn(a, b, c, d, e, f) {
	var $bannerMaxWapDom = a;
	var windowWidth = $(window).width();
	var timeShow = 0;
	var array = 0;
	var timeOff = 0;

	var imgPos = $bannerMaxWapDom.find("ul").find("li");

	var cloneOne = imgPos.first().clone();
	$bannerMaxWapDom.find("ul").append(cloneOne);
	$bannerMaxWapDom.find("li").width(windowWidth);
	var liWidth = imgPos.width();
	var liLength = $bannerMaxWapDom.find("li").length;
	$bannerMaxWapDom.find("ul").width(liWidth * (liLength + 1));

	var $imgBtnList = b;

	setTimeout(function(i) {
		timeShow++;
		(timeShow == 1) ? $bannerMaxWapDom.find("ul").fadeIn(): $bannerMaxWapDom.find("ul").hide();
	}, 20);

	(e === undefined) ? e = 2000: e = e;

	function imgListBtn() {

		for(var i = 0; i < liLength - 1; i++) {
			$imgBtnList.append("<span></span>");
		}

		$imgBtnList.children().eq(0).addClass("current");

		$imgBtnList.children().click(function() {
			var index = $(this).index();
			array = index;
			bannerImgList(index);
			$imgBtnList.children().eq(array).addClass("current").siblings().removeClass("current");

		});

	}

	imgListBtn();

	function bannerImgList(a) {
		$bannerMaxWapDom.find("ul").animate({
			left: -a * windowWidth
		}, 400)
	}

	function setTime() {
		timeOff = setInterval(function() {
			array++;
			move();
		}, e)
	}

	(f) ? setTime(): setTime;

	c.stop(true).click(function() {
		array--;
		move();
	});

	d.stop(true).click(function() {
		array++;
		move();
	});

	function move() {

		if(array == liLength) {
			$bannerMaxWapDom.find("ul").css({
				left: 0
			});
			array = 1;
		}

		if(array == -1) {
			$bannerMaxWapDom.find("ul").css({
				left: -liWidth * (liLength - 1)
			});
			array = liLength - 2
		}

		$bannerMaxWapDom.find("ul").stop(true).animate({
			left: -array * liWidth
		});

		(array == liLength - 1) ? $imgBtnList.children().eq(0).addClass("current").siblings().removeClass("current"): $imgBtnList.children().eq(array).addClass("current").siblings().removeClass("current");

	}

	$bannerMaxWapDom.hover(function() {
		clearInterval(timeOff);
	}, function() {
		(f) ? setTime(): setTime;
	});
}
$(".banner").mouseenter(function() {
	$(".left-btn").fadeIn();
	$(".right-btn").fadeIn();
})
$(".banner").mouseleave(function() {
	$(".left-btn").fadeOut();
	$(".right-btn").fadeOut();
})

$(".b04smallPic li").mouseenter(function() {
	var a = $(this).index();
	$(this).children("a").addClass("hover");
	$(this).siblings().children("a").removeClass("hover");
	$(this).parent().siblings("ul").children("li").eq(a).stop().fadeIn().siblings().stop().fadeOut()
})
var linkmore=0;
$("#linkMore").mouseenter(function(){
	
	if(linkmore==0)
	{
		$(".footTop .botLink .botLinkCon dd").addClass("linkHeight")
		$(".contactQQ").removeClass("qqHide")
		$(".footTop .botLink .linkMore.hoverUp").removeClass("hoverDown")
	}
	if(linkmore==1)
	{
		$(".footTop .botLink .botLinkCon dd").removeClass("linkHeight")
		$(".contactQQ").addClass("qqHide");
		$(".footTop .botLink .linkMore.hoverUp").addClass("hoverDown")

	}
	linkmore++;
	if(linkmore==2){
		linkmore=0;
	}
})
var j=0;
$("#newsDrop a").mouseenter(function(){
	if(j==0)
	{
		for(var k=0;k<3;k++)
		{
			for(var l=0;l<2;l++)
			{
				$(".b07main").children(".b07tab").eq(k).children(".b07tabText").children(".newsTxtW").eq(l).children().eq(2).addClass("conDrop")
			}
			
		}
		$(this).css("background-position","-112px -561px")
	}
	if(j==1)
	{
		for(var k=0;k<3;k++)
		{
			for(var l=0;l<2;l++)
			{
				$(".b07main").children(".b07tab").eq(k).children(".b07tabText").children(".newsTxtW").eq(l).children().eq(2).removeClass("conDrop")
			}
			
		}
		$(this).css("background-position","-112px -542px")
	}
	j++;
	if(j==2)
	{
		j=0;
	}
	
})
$(".b07tab .b07tabTitle li").mouseenter(function(){
	var a=$(this).index();
	if(a==0){
		$(this).addClass("cur").next().removeClass("cur")
	}
	if(a==1){
		$(this).addClass("cur").prev().removeClass("cur")
	}
	$(this).parent().siblings().children(".newsTxtW").eq(a).show().siblings().hide()
})
$(window).scroll(function(){
	var docObj=$(document).scrollTop();
	console.log(docObj);//486变，4873变
	if(docObj<=486)
	{
		$("#rightBar").css({"position":"","top":""})
	}
	if(docObj>486)
	{
		$("#rightBar").css({"position":"fixed","top":"291.5px"})
	}
	if(docObj>4870)
	{
		$("#rightBar").css({"position":"absolute","top":"5220px"})
	}
})
