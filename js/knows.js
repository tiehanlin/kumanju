$("#MenuList li a").click(function(){
	$(this).addClass("hover").parent("li").siblings().children("a").removeClass("hover")
	var index=$(this).index("a")-25;

	$("#knowsRight div").eq(index).show().siblings().hide()
})
